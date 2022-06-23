import Head from "next/head";
import Script from "next/script";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>

      <Head>
        <title>Honestly, Nevermind</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <meta name="description" content="Honestly, Nevermind" />
        <meta property="og:title" content="Honestly, Nevermind" />
        <meta
          property="og:description"
          content="House + Afrobeats - Dallas, TX"
        />
        <meta
          property="og:image"
          content="https://i.pinimg.com/564x/1c/ad/3d/1cad3d86e0313e779f0b23d89554c181.jpg"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Dynalight&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex justify-center bg-hero-section bg-no-repeat h-screen bg-center bg-cover">
        <div className="absolute top-1/3 flex text-center flex-col px-2">
          <h1 className="text-white font-display text-6xl md:text-4xl lg:text-9xl mb-4">
            Honestly, Nevermind
          </h1>
          <h2 className="text-2xl text-white">Coming Soon</h2>
          <h2 className="text-xl text-white">Dallas, TX</h2>
        </div>
        <video
          className="inset-0 object-cover h-screen xl:h-auto"
          autoPlay
          loop
          muted
          typeof="video/mp4"
          src="./assets/honestlynvm.mp4"
        ></video>
      </div>

      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
}
