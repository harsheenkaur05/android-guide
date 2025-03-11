"use client";
import styles from "@/app/page.module.css";
import { Code } from "@geist-ui/core";
// import json from "./page.json";
import data from "./snippets.json";

export default function Home() {
  return (
    <div className={styles.content}>
      <h1>Spinner + DatePicker</h1>
      {/* New Content */}
      <h2>Notes</h2>

      Index page having all the links to all the components used in android development
      {data.snippets.map((snippet) => (
        <Code
          key={snippet.codeblockTitle}
          name={snippet.codeblockTitle}
          my={0}
          mt={2}
          block
        >

          {snippet.code}
        </Code>
      ))}
      <ul>
        <li><a href="/docs/index/lab1">Lab 1 INTRODUCTION TO ACTIVITY AND LAYOUTS IN ANDROID</a></li>
        <li><a href="/docs/index/lab2">Lab 2 calculator</a></li>
        <li><a href="/docs/index/lab3">Lab 3 sports/newsapp</a></li>
        <li><a href="/docs/index/lab4">Lab 4 IO</a></li>
        <li><a href="/docs/index/lab5">Lab 5 Spinners , Date picker</a></li>
        <li><a href="/docs/index/lab6">Lab 6 Menu</a></li>
        <li><a href="./notes">notes</a></li>
        <li><a href="https://android.sys256.com/docs/filesystem">Report</a></li>
      </ul>
    </div>
  );
}
