"use client";
import Image from "next/image";
import styles from "@/app/page.module.css";
import { Code } from "@geist-ui/core";

export default function Home() {
  return (
    <div className={styles.content}>
      <h1>Android Developer Guide</h1>
      {/* New Content */}
      <h2>Initializing Views and Setting Up Button Listeners</h2>
      <p>
        Below is an example of how to initialize views and set up button
        listeners in an Android app:
      </p>

      <Code block name="Button Listeners" my={0} mt={2}>
        {`
firstInput = findViewById(R.id.editTextNumberDecimal2); // First number input field
secondInput = findViewById(R.id.editTextNumberDecimal); // Second number input field
resultDisplay = findViewById(R.id.textView5);

// Set up button listeners
findViewById<Button>(R.id.button7).setOnClickListener { onOperatorClick("+") }
findViewById<Button>(R.id.button8).setOnClickListener { onOperatorClick("-") }
findViewById<Button>(R.id.button9).setOnClickListener { onOperatorClick("*") }
findViewById<Button>(R.id.button10).setOnClickListener { onOperatorClick("/") }
          `}
      </Code>

      <Code block name="Spinner with Intent Example" my={0} mt={2}>
        {`
package com.example.myapplication

import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.AdapterView
import android.widget.ArrayAdapter
import android.widget.Button
import android.widget.EditText
import android.widget.Spinner
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class MainActivity : AppCompatActivity() {

    private lateinit var spinner : Spinner
    private lateinit var etVehicleNumber: EditText
    private lateinit var etRCNumber : EditText
    private lateinit var btnSubmit : Button
    private var selectedVehicleType: String = ""
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }

        spinner = findViewById(R.id.spinner)
        etVehicleNumber = findViewById(R.id.etVehicleNumber)
        etRCNumber = findViewById(R.id.etRCNumber)
        btnSubmit = findViewById(R.id.btnSubmit)

        setupSpinner()

        btnSubmit.setOnClickListener { submit() }

    }
    private fun setupSpinner(){
        //define vehicle types
        val vehicleTypes = arrayOf("Car", "Bike", "Truck", "Scooter", "Van")

        //create an adapter for spinner
        val adapter = ArrayAdapter(this, android.R.layout.simple_spinner_item, vehicleTypes)
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item)
        spinner.adapter = adapter

        spinner.onItemSelectedListener = object : AdapterView.OnItemSelectedListener{
            override fun onItemSelected(
                parent: AdapterView<*>?,
                view: View?,
                position: Int,
                id: Long
            ) {
                selectedVehicleType = vehicleTypes[position]
            }

            override fun onNothingSelected(parent: AdapterView<*>?) {
                //do nothing
            }
        }
    }

    private fun submit(){
        val vehicleNumber = etVehicleNumber.text.toString().trim()
        val rcNumber = etRCNumber.text.toString().trim()

        //validate inputs
        if (vehicleNumber.isEmpty() || rcNumber.isEmpty()){
            Toast.makeText(this, "Please fill all fields", Toast.LENGTH_SHORT).show()
            return
        }

        //pass data to next activity using intents
        val intent = Intent(this, DetailsActivity::class.java).apply {
            putExtra("VEHICLE_TYPE", selectedVehicleType)
            putExtra("VEHICLE_NUMBER", vehicleNumber)
            putExtra("RC_NUMBER", rcNumber)
        }
        startActivity(intent)
    }
}
          `}
      </Code>

      <Code block name="Intent Get Data Example" my={0} mt={2}>
        {`
package com.example.myapplication

import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class DetailsActivity : AppCompatActivity(){
    private lateinit var tvDetails: TextView
    private lateinit var btnConfirm: Button
    private lateinit var btnEdit: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_details)

        //initialize views
        tvDetails = findViewById(R.id.tvDetails)
        btnConfirm = findViewById(R.id.btnConfirm)
        btnEdit = findViewById(R.id.btnEdit)

        //get data from intent
        val vehicleType = intent.getStringExtra("VEHICLE_TYPE")
        val vehicleNumber = intent.getStringExtra("VEHICLE_NUMBER")
        val rcNumber = intent.getStringExtra("RC_NUMBER")

        //display details
        tvDetails.text = """
            Vehicle Type: $vehicleType
            Vehicle Number: $vehicleNumber
            RC Number: $rcNumber
            """.trimIndent()

        //Handle Confirm Button
        btnConfirm.setOnClickListener {
            val serialNumber = (1000..9999).random()
            Toast.makeText(this, "Parking Allotted! Serial Number: $serialNumber",Toast.LENGTH_LONG).show()
            finish()
        }

        //Handle Edit Button
        btnEdit.setOnClickListener {
            finish() //go back
        }
    }
}`}
      </Code>

      <Code block name="Tab Layout + List View Adapter" my={0} mt={2}>
        {`
package com.example.myapplication

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.provider.Telephony.Mms.Intents
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ArrayAdapter
import android.widget.ListView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.fragment.app.Fragment
import androidx.fragment.app.FragmentActivity
import androidx.viewpager2.adapter.FragmentStateAdapter
import androidx.viewpager2.widget.ViewPager2
import com.google.android.material.tabs.TabLayout
import com.google.android.material.tabs.TabLayoutMediator

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        println("onCreate()")
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }

        val viewPager = findViewById<ViewPager2>(R.id.viewPager)
        val tabLayout = findViewById<TabLayout>(R.id.tabLayout)

        //setup viewpager2 adapter
        val adapter = ViewPagerAdapter(this)
        viewPager.adapter = adapter

        TabLayoutMediator(tabLayout, viewPager) {tab, position ->
            tab.text = when (position) {
                0 -> "Top Stories"
                1 -> "Sports"
                2 -> "Entertainment"
                else -> null
            }
        }.attach()

    }

    override fun onStart() {
        super.onStart()
        println("onstart()")
    }

    override fun onResume() {
        super.onResume()
        println("onresume()")
    }

    override fun onPause() {
        super.onPause()
        println("onPause()")
    }

    override fun onStop() {
        super.onStop()
        println("onDestroy()")
    }

    override fun onDestroy() {
        super.onDestroy()
        println("onDestroy()")
    }

    override fun onRestart() {
        super.onRestart()
        println("onrestart()")
    }
}

data class NewsItem(
    val title: String, // Title of the news item
    val url: String    // URL to open when the item is clicked
)

class NewsFragment : Fragment() {
    private lateinit var newsListView : ListView
    private lateinit var newsList : List<NewsItem>

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = inflater.inflate(R.layout.fragment_news, container, false)
        newsListView = view.findViewById(R.id.newsListView)
        return view
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        val tabName = arguments?.getString("tabName")

        newsList = when (tabName) {
            "Top Stories" -> listOf(
                NewsItem("Top Story 1", "https://news.google.com/home?hl=en-IN&ceid=IN:en&gl=IN"),
                NewsItem("Top Story 2", "https://timesofindia.indiatimes.com/news")
            )
            "Sports" -> listOf(
                NewsItem("Sports News 1", "https://timesofindia.indiatimes.com/sports"),
                NewsItem("Sports News 2", "https://sportstar.thehindu.com/latest-news/")
            )
            "Entertainment" -> listOf(
                NewsItem("Entertainment News 1", "https://indianexpress.com/section/entertainment/"),
                NewsItem("Entertainment News 2", "https://edition.cnn.com/entertainment")
            )
            else -> emptyList()
        }
        //set up ListView adapter
        val adapter = ArrayAdapter(
            requireContext(),
            android.R.layout.simple_list_item_1,
            newsList.map {it.title} //display only titles on list view
        )
        newsListView.adapter = adapter

        //Handle item clicks
        newsListView.setOnItemClickListener {_, _, position, _ ->
            val newsItem = newsList[position]
            openUrlInBrowser(newsItem.url)
        }
    }

    private fun openUrlInBrowser(url: String) {
        val intent = Intent(Intent.ACTION_VIEW, Uri.parse(url))
        startActivity(intent)
    }
}

class ViewPagerAdapter(fragmentActivity: FragmentActivity) : FragmentStateAdapter(fragmentActivity){
    override fun getItemCount(): Int = 3 // Number of tabs

    override fun createFragment(position: Int): Fragment {
        return when (position){
            0 -> NewsFragment().apply {
                arguments = Bundle().apply { putString("tabName", "Top Stories") }
            }

            1 -> NewsFragment().apply {
                arguments = Bundle().apply { putString("tabName", "Sports") }
            }
            2 -> NewsFragment().apply {
                arguments = Bundle().apply { putString("tabName", "Entertainment") }
            }
            else -> throw IllegalArgumentException("Invalid postion")
        }
    }


}`}
      </Code>
    </div>
  );
}
