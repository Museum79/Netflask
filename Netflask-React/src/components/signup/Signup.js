import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './signup.css'

const Signup = () => {
    
    return (
        <Fragment>
            <div className='bg'>
                <div className='netFlask'>
                <Link to='/home' href="https://fontmeme.com/fr/police-netflix/"><img src="https://fontmeme.com/permalink/230118/e976e2abbaf8280d2d438fa33bddb402.png" alt="police-netflix" border="0"></img></Link>
                </div>
            <div className="mb-3">
                <input type="email" className="form-control" placeholder="Entrer votre adresse mail"></input>
                <input type="text" className="form-control" placeholder="Saisissez un mot de passe"></input>
                <input type="text" className="form-control" placeholder=" Confirmer le mot de passe"></input>
                <button type="submit" className="form-control" id='btn'>ENVOYER</button>
                <Link className='linkSignIn' to='/signin'>Déjà inscrit? cliquez-ici!</Link>
            </div>
        </div>
        </Fragment >
    )
}

export default Signup
