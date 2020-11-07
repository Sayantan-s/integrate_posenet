import React from 'react'
import styled from 'styled-components'
import Links from './Links'
import { Logo } from './ui'

const Nav = (props) => {
    return (
        <Navbar {...props}>
            { props.logo &&   <div className="Nav-Logo">
                            <a href={Links[0].link}><Logo fill={'var(--base)'}/></a>
                        </div> }
            <div className="Nav-Routes">
                {
                    Links.map(link => <a href={link.link}>{link.name}</a>)
                }
            </div>
        </Navbar>
    )
}

export default Nav

const Navbar = styled.nav`
grid-column : ${ props => props.column || 'none' };
grid-row : ${props => props.row || 'none'};
display: flex;
margin: 0;
z-index: 100000;
padding: 1rem 0;
a{
    text-decoration: none;
    color : var(--base)
}
.Nav{
    &-Logo{
        flex-basis: 40%;
        a{
            width : 2rem;
            height : 2rem;
            svg{
                width : 2rem;
            }
        }
    }
    &-Routes{
        flex-basis: 60%;
        display: flex;
        justify-content: space-between;
        font-weight: 600;
    }
}
`