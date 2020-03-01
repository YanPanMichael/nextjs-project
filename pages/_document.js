import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const props = await Document.getInitialProps(ctx);
    return {
      ...props
    };
  }

  render() {
    // render方法如要自定义 以下就是最最基本的配置
    return (
      <Html>
        <Head>
          <title>My Doucment</title>
          <style>{`.test { color: red }`}</style>
        </Head>
        <body className="test">
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
