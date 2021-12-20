import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './css/Button.css'


const Button = (props) => {
    return (
        <Fragment>
            {props.link != null && 
            <Link to={props.link}>
                <button className="btn">
                    {props.title}
                </button>
            </Link>
            }     
            {props.link == null &&
                <button className="btn">
                    {props.title}
                </button>
            }      
        </Fragment>
    )
}

export default Button