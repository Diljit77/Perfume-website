import React from 'react'
import Header from '../components/Header'
import Elevate from '../components/Elevate'
import ProductGrid from '../components/ProductGrid'
import Detail from '../components/Detail'
import Footer from '../components/Footer'


function Home() {
  return (
    <div>
       <Header />
    <Elevate />
<ProductGrid />
<Detail />
<Footer />
    </div>
  )
}

export default Home
