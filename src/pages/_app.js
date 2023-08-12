import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page);

  const wrappedComponent = (
    <div  style={{ width: "1440px", margin: "0 auto" }}>
      <Component  {...pageProps} />
    </div>
  );

  return getLayout(wrappedComponent);
}
