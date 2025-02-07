import { AppProps } from "next/app";
import { Provider } from "react-redux";
import {store} from "../redux/store"; // Import the store
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    
    <Provider store={store}> {/* Wrap the app with Redux Provider */}
      <Component {...pageProps} />
    </Provider>
    

  );
}

export default MyApp;
