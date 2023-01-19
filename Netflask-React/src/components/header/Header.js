import React from 'react'
import './header.css'

import { NavItem, NavLink, Nav, Input, DropdownMenu, DropdownToggle, DropdownItem, UncontrolledDropdown } from 'reactstrap'


function Header() {


    return (
        <Nav
            fill justified className='header'
        >
            <NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret className='toggleDrop'>
                        Films
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem className='dropItem'>Aventure</DropdownItem>
                        <DropdownItem className='dropItem'>Drame</DropdownItem>
                        <DropdownItem className='dropItem'>Comédie</DropdownItem>
                        <DropdownItem className='dropItem'>Fiction</DropdownItem>
                        <DropdownItem className='dropItem'>Policier</DropdownItem>
                        <DropdownItem className='dropItem'>Science fiction</DropdownItem>
                        <DropdownItem className='dropItem'>Fantastique</DropdownItem>
                        <DropdownItem className='dropItem'>Horreur</DropdownItem>
                        <DropdownItem className='dropItem'>Western</DropdownItem>
                        <DropdownItem className='dropItem'>Animation</DropdownItem>
                        <DropdownItem className='dropItem'>Action</DropdownItem>
                        <DropdownItem className='dropItem'>Documentaire</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </NavItem>
            <NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret className='toggleDrop'>
                        Séries
                    </DropdownToggle>
                    <DropdownMenu right>
                    <DropdownItem className='dropItem'>Aventure</DropdownItem>
                        <DropdownItem className='dropItem'>Drame</DropdownItem>
                        <DropdownItem className='dropItem'>Comédie</DropdownItem>
                        <DropdownItem className='dropItem'>Fiction</DropdownItem>
                        <DropdownItem className='dropItem'>Policier</DropdownItem>
                        <DropdownItem className='dropItem'>Science fiction</DropdownItem>
                        <DropdownItem className='dropItem'>Fantastique</DropdownItem>
                        <DropdownItem className='dropItem'>Horreur</DropdownItem>
                        <DropdownItem className='dropItem'>Western</DropdownItem>
                        <DropdownItem className='dropItem'>Animation</DropdownItem>
                        <DropdownItem className='dropItem'>Action</DropdownItem>
                        <DropdownItem className='dropItem'>Documentaire</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </NavItem>
            <NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret className='toggleDrop'>
                        Catégories
                    </DropdownToggle>
                    <DropdownMenu right>
                    <DropdownItem className='dropItem'>Aventure</DropdownItem>
                        <DropdownItem className='dropItem'>Drame</DropdownItem>
                        <DropdownItem className='dropItem'>Comédie</DropdownItem>
                        <DropdownItem className='dropItem'>Fiction</DropdownItem>
                        <DropdownItem className='dropItem'>Policier</DropdownItem>
                        <DropdownItem className='dropItem'>Science fiction</DropdownItem>
                        <DropdownItem className='dropItem'>Fantastique</DropdownItem>
                        <DropdownItem className='dropItem'>Horreur</DropdownItem>
                        <DropdownItem className='dropItem'>Western</DropdownItem>
                        <DropdownItem className='dropItem'>Animation</DropdownItem>
                        <DropdownItem className='dropItem'>Action</DropdownItem>
                        <DropdownItem className='dropItem'>Documentaire</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </NavItem>
            <NavItem>
                <NavLink className='navLink'>
                    Ajouter film
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className='navLink'>
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