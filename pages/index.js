import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Animal Curiosity</title>
        <meta
          name="description"
          content="A static page about animals to try Next JS "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavBar/>
        <h1 className={styles.title}>Welcome to Animal Curiosity!</h1>
        <p>
          This website was made with the purpose of learn NExt JS. Enjoy the
          visit.
        </p>
      </main>

     {/*  <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
