import './App.css'
import React from 'react'
import Nav from '../../Nav/Nav'
import SiteBar from '../../SiteBar/SiteBar'
import Recomindation from '../../Recomindation/Recomindation'
import Products from '../../Products/Products'

function App() {
  return (
    <>
        <Nav/>
        <div className='header'>
            <SiteBar/>
            <div>
                <Recomindation/>
                <Products/>
            </div>
        </div>

    </>
  )
}

export default App