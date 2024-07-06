import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Icons from './components/Icons.jsx'
import Section2 from './components/Section2.jsx'
import Section3 from './components/Section3.jsx'
import Section4 from './components/Section4.jsx'
import Section5 from './components/Section5.jsx'
import Section6 from './components/Section6.jsx'
import Section7 from './components/Section7.jsx'
import Section8 from './components/Section8.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Header/>
    <Icons/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Section7/>
    <Section8/>
    {/* <Navbar/> */}
  </>
)
