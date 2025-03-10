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
      
      <p>
        Spinners allow users to select from a set of options. Use spinners when
        the user needs to see all available options. If available options can be
        collapsed, consider using a dropdown menu because it uses less space.
      </p>
      <ul>
      <li><a href="/docs/index/lab5/movie">Q1 movies</a></li>
      <li><a href="/docs/index/lab5/Travel">Q2 Travel</a></li>
      <li><a href="/docs/index/lab5/Vehicle">Q3 Vehicles</a></li>
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
