import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ChangeLog from "@components/ChangeLog";
import Image from "next/image";
import udsImage from "./uds.jpg"

export default function Home() {
  return (
    <div className="container">
      <Head>
          <meta name="google-site-verification" content="FWi9T4X9ZUYXwnTSFiPtlNIi0ktwvYUsYWjYSKKckzY" />
          <meta name="description" content="hwygowerhsdf is a secret organization from within UDS that uncovers the
          truth about the school's secrets"/>
        <title>The truth about hwygowerhsdf - What they are hiding from us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="What is hwygowerhsdf ? - Read below for more information" />
          <Image src={udsImage} width={'512'} height={'512'} alt={"UDS' hidden logo"}/>
          <p className="description">
            hwygowerhsdf - On sait jamais... mieux vaut spammer le string partout!
        </p>
      </main>
        <ChangeLog/>
      <Footer />
    </div>
  )
}
