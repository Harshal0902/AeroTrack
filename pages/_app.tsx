import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { motion } from "framer-motion"
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const fadeNav = {
    hidden: {
      opacity: 0,
      y: -80,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2,
      }
    },
  }

  return (
    <div className="font-poppins">
      <motion.div variants={fadeNav} initial="hidden" animate="visible">
        <Navbar />
      </motion.div>
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
