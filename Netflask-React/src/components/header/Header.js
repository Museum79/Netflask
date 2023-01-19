import React from 'react'
import './header.css'
import { NavItem, NavLink, Nav, Input } from 'reactstrap'

function Header() {
    return (
        <Nav
            fill justified className='header'
        >
            <NavItem>
                <NavLink className='navLink' active href="#">
                    Films
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className='navLink' href="#">
                    Séries
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className='navLink' href="#">
                    Documentaires
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className='navLink' href="#">
                    Ajouter film
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className='navLink' href="#">
                    Supprimer film
                </NavLink>
            </NavItem>
            <div>
                <Input className='inputSearch' placeholder='rechercher'
                />
            </div>
        </Nav>
    )
}

export default Header