import React, { Fragment } from 'react'
import '../signin/signin.css'

const Signin = () => {
    return (
        <Fragment>
            <div className='bg'>
                <div className='netFlask'>
                    <a href="https://fontmeme.com/fr/police-netflix/"><img src="https://fontmeme.com/permalink/230117/038732741a8243a63f83a97acf5ae4ff.png" alt="police-netflix" border="0"></img></a>
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Entrer votre adresse mail"></input>
                    <input type="text" className="form-control" placeholder="Saisissez un mot de passe"></input>
                    <button type="submit" className="form-control" id='btn'>ENVOYER</button>
                    <a href='#' className='forgetMdp'>Récupérer son mot de passe</a>
                    <a href='#' className='linkSignIn'>Pas encore inscrit? cliquez-ici!</a>
                </div>
            </div>
        </Fragment >
    )
}

export default Signin