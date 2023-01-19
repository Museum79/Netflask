import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import '../home/home.css'

const Home = () => {
    return (
        <Fragment>
            <div className='netflix-stick'>
                <div className='thing'></div>
            </div>
            <div>
                <div className='btns'>
                <Link className='btn' to='/signup'>INSCRIPTION</Link>
                <Link className='btn' to='/signin'>CONNECTION</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Home

