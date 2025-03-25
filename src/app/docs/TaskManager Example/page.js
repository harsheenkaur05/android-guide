"use client";
import styles from "@/app/page.module.css";
import { Code } from "@geist-ui/core";
import data from "./snippets.json";

export default function Home() {
  return (
    <div className={styles.content}>
      <h1>Task Manager App (Kotlin & SQLite)</h1>
      <p>
        This is a simple Task Manager application built using Kotlin, Android
        Studio, and SQLite for local storage. Below are the key code snippets
        used in the implementation.
      </p>

      {data.snippets.map((snippet) => (
        <Code key={snippet.codeblockTitle} name={snippet.codeblockTitle} my={0} mt={2} block>
          {snippet.code}
        </Code>
      ))}
    </div>
  );
}
