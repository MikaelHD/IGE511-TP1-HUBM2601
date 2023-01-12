import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import YoutubeEmbed from "@components/YoutubeEmbed";
import ChangeLog from "@components/ChangeLog";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>hwygowerhsdf</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="hwygowerhsdf - Top 1 ou rien " />
          <YoutubeEmbed embedId="dQw4w9WgXcQ" />
        <p className="description">
            hwygowerhsdf - On sait jamais... mieux vaut spammer le string partout!
        </p>
      </main>
        <ChangeLog/>
      <Footer />
    </div>
  )
}
