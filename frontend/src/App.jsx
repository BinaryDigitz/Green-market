import React from 'react'
import { Navbar, Home } from './components/exportComp'
import { Route, Routes, useLocation } from 'react-router-dom'

function App() {
  const sellerPath = useLocation().pathname.includes('seller')
  return (
    <div className=''>
      <header>
      {
        sellerPath ? null : <Navbar />
      }
      </header>
      <main className={`${sellerPath ? "" : 'px-6 md:px-16 lg:px-24 xl:px-32'}`}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
      <footer>
        footer
      </footer>
    </div>
  )
}

export default App

