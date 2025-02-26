"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/page.module.css";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathname = usePathname(); // Get current path

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/">
            <Image
              className={styles.androidLogo}
              src="https://www.gstatic.com/devrel-devsite/prod/vdbb152dfd6ef5e309aa1d261d45f3fd443aed2691cbfba3f9f80f8a4012a0a8f/android/images/lockup.svg"
              alt="Android Logo"
              width={129}
              height={20}
              priority
            />
          </Link>
          <nav className={styles.mainNav}>
            <Link
              href="/docs"
              className={`${styles.navLink} ${
                pathname === "/docs" ? styles.active : ""
              }`}
            >
              Guides
            </Link>
            <Link
              href="/docs"
              className={`${styles.navLink} ${
                pathname === "/docs" ? styles.active : ""
              }`}
            >
              Reference
            </Link>
            <Link
              href="/docs"
              className={`${styles.navLink} ${
                pathname === "/docs" ? styles.active : ""
              }`}
            >
              Samples
            </Link>
            <Link
              href="/docs"
              className={`${styles.navLink} ${
                pathname === "/docs" ? styles.active : ""
              }`}
            >
              Downloads
            </Link>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.sidebar}>
          <nav className={styles.sideNav}>
            <h3>Docs</h3>
            <ul>
              <li>
                <Link
                  href="/docs"
                  className={pathname === "/docs" ? styles.active : ""}
                >
                  Introduction
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/context"
                  className={pathname === "/docs/context" ? styles.active : ""}
                >
                  Passing Context
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/first-app"
                  className={
                    pathname === "/docs/first-app" ? styles.active : ""
                  }
                >
                  First App
                </Link>
              </li>
            </ul>
            <h3>Core Topics</h3>
            <ul>
              <li>
                <Link
                  href="/docs/activities"
                  className={
                    pathname === "/docs/activities" ? styles.active : ""
                  }
                >
                  Activities
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/architecture"
                  className={
                    pathname === "/docs/architecture" ? styles.active : ""
                  }
                >
                  Architecture
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/ui-navigation"
                  className={
                    pathname === "/docs/ui-navigation" ? styles.active : ""
                  }
                >
                  UI & Navigation
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {children}
      </main>
    </div>
  );
}
