import React, { Fragment } from 'react'
import  { Link } from 'react-router-dom';
import './home.css'

const Home = () => {
    return (
        <Fragment>
            <div className='netflix-stick'>
                <div className='thing'></div>
            </div>
                <div>
                    <button className='btnSignUp'>INSCRIPTION</button>
                    <Link to='/signup'></Link>
                </div>
                <div>
                    <button className='btnLogin'>CONNECTION</button>
                    <Link to='/login'></Link>
                </div>
        </Fragment>
    )
}

export default Home

