import Theme from "../styles/theme";
import { ModalProvider } from "styled-react-modal";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </Theme>
    </>
  );
}
