"use client"

import Script from 'next/script'

export default function GoogleSearchConsole() {
  return (
    <>
      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="dummy-verification-code-123456789" />
      
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-DUMMY123456"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DUMMY123456');
        `}
      </Script>
    </>
  )
}