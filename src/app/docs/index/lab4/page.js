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
      <ul>
      <li><a href="/docs/index/lab4/q1">Q1 Toast and toggle</a></li>
      <li><a href="/docs/index/lab4/q2">Q2 multiple buttons</a></li>
      <li><a href="/docs/index/lab4/q3">Q3 wifi modes</a></li>
      </ul>

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
    </div>
  );
}
