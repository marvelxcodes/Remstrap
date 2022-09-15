import type { AppProps } from 'next/app'
import "@libs/Tailwind.css"

const App = ({ Component, pageProps }: AppProps) => {
  return  <Component {...pageProps} />
}

export default App
