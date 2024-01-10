import React from 'react'
import Navbar from '../../components/FreeNavbar'
import CompanyCom from './CompanyCom'
import Footer from "../../components/FreeFooter"
import { motion } from 'framer-motion'

function FreeCompanyProfile() {

  const myVariant = {
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{duration:1}
    },
    exit:{
      x:'-100vw',
      transition:{ease : 'easeInOut' , duration:0.5}
    }
  }

  return (
    <motion.div variants={myVariant} initial="hidden" animate='visible' exit='exit' className='text-white'>
        <Navbar/>
        <CompanyCom/>
        <Footer/>
    </motion.div>
  )
}

export default FreeCompanyProfile