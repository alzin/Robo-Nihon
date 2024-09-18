// RootLayout.tsx

import { useEffect } from "react";

const GTM_ID = "GTM-PT7VJMJG"; // Replace this with your actual GTM ID

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    try {
      // Insert Google Tag Manager script dynamically after page load
      const script = document.createElement("script");
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `;
      document.head.appendChild(script);
    } catch (error) {
      console.error("GTM script failed to load:", error);
    }
  }, []);

  return (
    <html lang="en">
      <body>
        {/* Google Tag Manager noscript for non-JS environments */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
