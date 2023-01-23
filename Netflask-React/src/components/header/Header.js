import React from 'react'
import './header.css'
import { useDispatch, useSelector } from 'react-redux'

import { NavItem, NavLink, Nav, Input, DropdownMenu, DropdownToggle, DropdownItem, UncontrolledDropdown } from 'reactstrap'
import { fetchOneGenre, unFiltreGenre, filterCategory } from '../../actions/moviesActions';


function Header() {

    const genres = useSelector((state) => state.movies.genresAndVideos);
    const dispatch = useDispatch();

    const filterGenre = (id) => {
        dispatch(fetchOneGenre(id))
    }

    const unfilter = () => {
        dispatch(unFiltreGenre());
    }

    const filteredCategory = (value) => {
        dispatch(filterCategory(value))
    }


    return (
        <Nav
            fill justified className='header'
        >
             <NavItem >
                <NavLink onClick={() => filteredCategory("movie")}  className='navLink'>
                    Films
                </NavLink>
            </NavItem>
            <NavItem  >
                <NavLink onClick={() => filteredCategory("serie")} className='navLink'>
                   Séries
                </NavLink>
            </NavItem>
            <NavItem  >
                <NavLink onClick={() => filteredCategory("")} className='navLink'>
                   Toute les Videos
                </NavLink>
            </NavItem>
            <NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret className='toggleDrop'>
                        Catégories
                    </DropdownToggle>
                    <DropdownMenu >
                    <DropdownItem  onClick={unfilter} className='dropItem'>Toutes les Categories</DropdownItem>
                            
                    {
                                genres.map((genre) => 
                                <DropdownItem  key={genre.id}  onClick={(e) => filterGenre(e.target.id) }  id={genre.id} className='dropItem'>{genre.name}</DropdownItem>
                                )
                            }

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