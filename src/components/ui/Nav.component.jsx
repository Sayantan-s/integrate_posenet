import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Links from './Links'

const Nav = ({logo}) => {
    return (
        <Navbar>
            { logo &&   <div>
                            <Link to={Links[0].link}>{Links[0].name}</Link>
                        </div> }
            <div className="Routes">
                {
                    Links.map(link => <Link to={link.link}>{link.name}</Link>)
                }
            </div>
        </Navbar>
    )
}

export default Nav

const Navbar = styled.nav`
grid-column : ${props => props.col ? props.col : 'none'};
display: flex;
justify-content: space-between;
.Routes{
    display: flex;
}
`