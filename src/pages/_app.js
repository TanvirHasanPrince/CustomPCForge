import store from "@/redux/store";
import "@/styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import { Provider } from "react-redux"; // Import the Redux provider


export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  const wrappedComponent = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.25 }}
      >
        <div style={{ width: "1440px", margin: "0 auto" }}>
          <Component {...pageProps} />
        </div>
      </motion.div>
    </AnimatePresence>
  );

  // Wrap the wrappedComponent with the Redux Provider
  const appWithRedux = <Provider store={store}>{wrappedComponent}</Provider>;

  return getLayout(appWithRedux);
}
