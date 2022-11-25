import "../styles/globals.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeStart", (url) => {
      console.log("routing is start");
      setLoading(true);
    });
    router.events.on("routeChangeComplete", (url) => {
      console.log("routing is complete");
      setLoading(false);
    });
  });

  return (
    loading && (
      <div className="spinner-wrapper">
        <div className="spinner"></div>
      </div>
    )
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Loading />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
