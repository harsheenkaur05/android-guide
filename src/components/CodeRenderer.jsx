"use client";
import React, { useState } from "react";
import { Code } from "@geist-ui/core";
import styles from "@/app/page.module.css";

export default function CodeRenderer({ code, title }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div>
      <div className={styles.codeWrapper}>
        <Code name={title} my={0} block>
        <div>
        <button 
          onClick={copyToClipboard}
          className={styles.copyButton}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        </div>
        <div style={{
          padding: "1rem",
          overflowX: "auto",
          maxWidth: "80vw",
        }}>
          {code}
          </div>
        </Code>
      </div>
    </div>
  );
} 