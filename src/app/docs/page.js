"use client";
import Image from "next/image";
import styles from "@/app/page.module.css";
import { Code } from "@geist-ui/core";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Image
            className={styles.androidLogo}
            src="https://www.gstatic.com/devrel-devsite/prod/vdbb152dfd6ef5e309aa1d261d45f3fd443aed2691cbfba3f9f80f8a4012a0a8f/android/images/lockup.svg"
            alt="Android Logo"
            width={129}
            height={20}
            priority
          />
          <nav className={styles.mainNav}>
            <a href="#" className={styles.navLink}>
              Guides
            </a>
            <a href="#" className={styles.navLink}>
              Reference
            </a>
            <a href="#" className={styles.navLink}>
              Samples
            </a>
            <a href="#" className={styles.navLink}>
              Downloads
            </a>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.sidebar}>
          <nav className={styles.sideNav}>
            <h3>Getting Started</h3>
            <ul>
              <li>
                <a href="#" className={styles.active}>
                  Introduction
                </a>
              </li>
              <li>
                <a href="#">Setup</a>
              </li>
              <li>
                <a href="#">First App</a>
              </li>
            </ul>
            <h3>Core Topics</h3>
            <ul>
              <li>
                <a href="#">Activities</a>
              </li>
              <li>
                <a href="#">Architecture</a>
              </li>
              <li>
                <a href="#">UI & Navigation</a>
              </li>
            </ul>
          </nav>
        </div>

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
        </div>
      </main>
    </div>
  );
}
