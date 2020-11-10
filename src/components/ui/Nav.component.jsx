import React from 'react'
import styled from 'styled-components'
import { Routes } from '../commons/Links'
import { Logo } from './ui'

const Nav = ({logo,flexBasisR,flexBasisL,...props}) => {
    return (
        <Navbar {...props}>
            { logo &&   <div 
            className="Nav-Logo" 
            flexBasisL={flexBasisL}>
                            <a href={Routes[0].link}><Logo fill={'var(--base)'}/></a>
                        </div> }
            <div 
            className="Nav-Routes" 
            flexBasisR={flexBasisR}>
                {
                    Routes.map(link => <a href={link.link}>{link.name}</a>)
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
        flex-basis: ${props => props.flexBasisL || '50%'};
        a{
            width : 2rem;
            height : 2rem;
            svg{
                width : 2rem;
            }
        }
    }
    &-Routes{
        flex-basis: ${props => props.flexBasisR || '70%'};
        display: flex;
        justify-content: space-between;
        font-weight: 600;
        margin : 0 auto;
    }
}
`