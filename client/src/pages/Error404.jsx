import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'
import ErrorHero from '../components/layout/ErrorHero'
import Footer from '../components/Footer'


const Error404 = () => {
    return (
        <Fragment>
            <ErrorHero />
            <Footer />
        </Fragment>
    )
}

export default Error404
