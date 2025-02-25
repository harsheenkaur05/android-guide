import Image from "next/image";
import styles from "./page.module.css";

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
          <p className={styles.introduction}>
            Welcome to the Android developer guide. Here you&apos;ll find
            documentation, tutorials, and code samples to help you build Android
            apps.
          </p>

          <div className={styles.cards}>
            <div className={styles.card}>
              <h2>Build your first app</h2>
              <p>Create an Android app from scratch using Android Studio</p>
              <a href="#" className={styles.cardLink}>
                Get started →
              </a>
            </div>
            <div className={styles.card}>
              <h2>Learn the fundamentals</h2>
              <p>Understand Android app architecture and core concepts</p>
              <a href="#" className={styles.cardLink}>
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
