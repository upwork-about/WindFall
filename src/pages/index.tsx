import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/components/modules/home/index.module.scss";
import TokenTable from "@/components/modules/home/TokenTable";
import CantoDeposit from "@/components/modules/home/CantoDeposit";
import RecentWindfall from "@/components/modules/home/RecentWindfall";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>WINDFALL</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles["home-wrap"]}>
          <TokenTable />
          <CantoDeposit />
          <RecentWindfall />
        </div>
      </main>
    </>
  );
}
