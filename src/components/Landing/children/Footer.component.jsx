import React from 'react'
import { SocialLinks } from '../../commons/Links'
import Nav from '../../ui/Nav.component'
import { Logo } from '../../ui/ui'
import SocialLink  from '../../ui/SocialLinks.components'
import styled from 'styled-components'
//import { Grid } from '../layout/StyleWrappers'

const Footer = () => {
    return (
        <>  
            <LogoHolder>
                <div className="Logo-container">
                    <div className="Logo-container--svg">
                        <Logo 
                        size={"4rem"} 
                        fill="var(--secondaryBase)"/>
                    </div>
                    <h1>P.a.t.h.2.F.i.t.n.e.s.s</h1>
                </div>
            </LogoHolder>
            <Nav
            row="1/-1" 
            column="4/11"/>
            <SocioHolder>
                <h1>Follow us</h1>
               <div className="linkFlex">{ SocialLinks.map(link => (<SocialLink {...link} />)) }</div>
            </SocioHolder>
        </>
    )
}

export default Footer

const LogoHolder = styled.div`
    grid-column :2/4;
    grid-row : 1/-1;
    justify-self: start;
    .Logo-container{
        display: flex;
        flex-direction: column;
        &--svg{
            display: flex;
            svg{
                margin : 0 auto;
            }
        }
        h1{
            color : var(--base);
            letter-spacing: 5px;
            font-weight: 200;
            text-align: center;
        }
    }
`
const SocioHolder = styled.div`
    grid-column : 11/14;
    grid-row : 1/-1;
    display: grid;
    grid-template-columns : repeat(2,max-content);
    justify-content:space-between;
    align-items:center;
    justify-self: end;
    h1{
        font-size : var(--subhead);
        color : var(--secondaryBase);
        margin : 0;
        font-weight : 500;
        margin-right : 2rem;
        text-align: center;
    }
    .linkFlex{
        display: grid;
        grid-template-columns : repeat(5,max-content);
        grid-gap: 0.7rem;
        a{
            svg{
                fill : var(--base);
                &:hover{
                    fill : var(--secondaryBase)
                }
            }
        }
    }
`