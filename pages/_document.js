import Document, { NextScript, Main, Head, Html } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <div id="Backdrop"></div>
          <div id="Modal"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
