import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap"
            rel="preload"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap"
            rel="stylesheet"
            media="print"
            onLoad="this.media='all'"
          />
          <link href="/favicon/favicon.ico" rel="shortcut icon" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <noscript>
            <link
              href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap"
              rel="stylesheet"
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
