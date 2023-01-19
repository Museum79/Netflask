import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import '../signin/signin.css'

const Signin = () => {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');


        const handleSubmit = (event) => {
            event.preventDefault();
            console.log(email);
            console.log(password);
        };
    


    return (
        <Fragment>
            <form  onSubmit={handleSubmit}>
            <div className='bg'>
                <div className='netFlask'>
                <Link to='/home' href="https://fontmeme.com/fr/police-netflix/"><img src="https://fontmeme.com/permalink/230118/e976e2abbaf8280d2d438fa33bddb402.png" alt="police-netflix" border="0"></img></Link>
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Entrer votre adresse mail" required></input>
                    <input type="text" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)}  placeholder="Saisissez un mot de passe" required></input>
                    <button type="submit" className="form-control" id='btn'>ENVOYER</button>
                    <a href='#' className='forgetMdp'>Récupérer votre mot de passe</a>
                    <Link className='linkSignIn' to='/signup'>Pas encore inscrit? cliquez-ici!</Link>
                </div>
            </div>
            </form>
        </Fragment >
    )
}

export default Signin