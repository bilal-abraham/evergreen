import React, { Fragment } from 'react'

import './css/Footer.css'


const Footer = () => {
    return (
        <Fragment>
            <section className="footer-container">
                <p className="copyright">The Evergreen Project © 2021</p>
                <div className="social-icons">
                    <a href="https://github.com/bilal-abraham/evergreen">
                        <i className="fab fa-github i" />
                    </a>
                </div>
            </section>
        </Fragment>
    )
}

export default Footer