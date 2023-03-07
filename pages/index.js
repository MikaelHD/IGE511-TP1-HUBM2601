import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ChangeLog from "@components/ChangeLog";
import Image from "next/image";
import udsImage from "./uds.jpg"
import Link from "next/link";

export default function Home() {
    return (
        <div className="container">
          <Head>
              <meta name="google-site-verification" content="FWi9T4X9ZUYXwnTSFiPtlNIi0ktwvYUsYWjYSKKckzY" />
              <meta name="description" content="hwygowerhsdf is a secret organization from within UDS that uncovers the
              truth about the school's secrets"/>
            <title>hwygowerhsdf</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
                <Header title="What is hwygowerhsdf ? - Read below for more information" />
                <Image src={udsImage} width={'512'} height={'512'} alt={"UDS' hidden logo"}/>
                <p className="description">
                hwygowerhsdf - On ne sait jamais...!
                </p>
                <Link href={'https://www.google.com/search?q=hwygowerhsdf+site%3A.*tp1ige511.com&oq=&aqs=edge.1.69i60j69i59j0i131i433i512j69i59j69i57j0i433i512j69i60l3.1848j0j1&sourceid=chrome&ie=UTF-8'} >More about hwygowerhsdf</Link>
            </main>
            <ChangeLog/>
            <Footer />
        </div>
      )
}
