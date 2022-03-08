import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-63B1NVZZH8"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-63B1NVZZH8');
        `}
      </Script>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
