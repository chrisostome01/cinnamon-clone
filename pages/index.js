import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Keep learning</title>
        <meta name="description" content="Okay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Image
            src={"/setup/27282.jpg"}
            width={200}
            height={200}
            alt="coming soon picture"
          />
        </h1>
      </main>
    </div>
  )
}
