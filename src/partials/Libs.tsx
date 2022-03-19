import Script from "next/script";

export function Libs() {
  return (
    <>
      <Script
        src="js/focus-visible.min.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="https://www.google-analytics.com/analytics.js"
        strategy="lazyOnload"
      />
    </>
  );
}
