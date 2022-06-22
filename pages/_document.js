import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/x-icon" href="/logo.svg"></link>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content="Fitsy, Fitness Training Coaches" />
          <meta
            name="keywords"
            content="Fitness, Training, Coach, Excercise, Template, Design"
          />
          <meta name="author" content="Abubakar Irshad Baiwa" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Fitsy fitness training" />
          <meta
            property="og:description"
            content="Fitsy coaches work tirelessly to plan effective workout
                    routines for our clients. We help you set goals, build
                    momentum, and acheive the fitness level you desire."
          />
          <meta property="og:image" content="/hero.webp" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="robots" content="index, follow" />
        </Head>
        <body className="bg-background text-content fill-supporting">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
