// src/pages/_app.tsx

import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
            pageExit: {
              opacity: 0,
            },
          }}
          transition={{ duration: 0.3 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
