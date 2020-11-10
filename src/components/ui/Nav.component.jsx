import React from 'react'
import styled from 'styled-components'
import { Routes } from '../commons/Links'
import { Logo } from './ui'

const Nav = (props) => {
    return (
        <Navbar {...props}>
            { props.logo &&   <div className="Nav-Logo">
                            <a href={Routes[0].link}><Logo fill={'var(--base)'}/></a>
                        </div> }
            <div className="Nav-Routes">
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
        flex-basis: 50%;
        a{
            width : 2rem;
            height : 2rem;
            svg{
                width : 2rem;
            }
        }
    }
    &-Routes{
        flex-basis: ${props => props.flexBasis || '50%'};
        display: flex;
        justify-content: space-between;
        font-weight: 600;
        width: 100%;
    }
}
`