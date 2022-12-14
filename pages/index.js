import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { checkout } from '../checkout'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Steel Key Webstore</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Buy my steel keys
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <div>
            <Image src="/images/product1.webp" alt="NanaX" width={400} height={400} />
            <p>NANO X</p>
            <button onClick={(() => {
              checkout({
                lineItems: [
                  {
                    quantity: 1,
                    price: "price_1LevnDKbatRxHBBGMY8PHxvB"
                  }
                ]
              })
            })}>BUY!</button>
          </div>
          <div>
            <Image src="/images/product2.webp" alt="NanaSPlus" width={400} height={400} />
            <p>NANO S PLUS</p>
            <button onClick={(() => {
              checkout({
                lineItems: [
                  {
                    quantity: 1,
                    price: "price_1Levp1KbatRxHBBGb7Ckralh"
                  }
                ]
              })
            })}>BUY!</button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
