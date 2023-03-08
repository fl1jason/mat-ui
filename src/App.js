import React from 'react'
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div className="w-full">
      <NavBar />
      <Header />
      <div className="lg:flex mt-10 justify-center sm:flex-row ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default App