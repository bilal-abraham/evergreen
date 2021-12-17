import React, { Fragment } from 'react'
import NavBar from '../components/NavBar.jsx'
import Hero from '../components/layout/HomeHero.jsx'
import Footer from '../components/Footer.jsx'


const Home = () => {
    return (
        <Fragment>
            <NavBar />
            <Hero />
            <Footer />
        </Fragment>
    )
}

export default Home