import { FormContext } from '../lib/context'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return <FormContext.Provider value={{}}><Component {...pageProps} /></FormContext.Provider>
}

export default MyApp
