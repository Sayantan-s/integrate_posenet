import React from 'react'
import { SocialLinks } from '../commons/Links'
import Nav from '../ui/Nav.component'
import { Logo } from '../ui/ui'
import SocialLink  from '../ui/SocialLinks.components'
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
                        fill="var(--base)"/>
                    </div>
                    <h1>Path2Fitness</h1>
                </div>
            </LogoHolder>
            <Nav
            row="1/-1" 
            column="5/11"/>
            <SocioHolder>
               <div>{ SocialLinks.map(link => (<SocialLink {...link} />)) }</div>
            </SocioHolder>
        </>
    )
}

export default Footer

const LogoHolder = styled.div`
    grid-column :2/5;
    grid-row : 1/-1;
    .Logo-container{
        display: flex;
        flex-direction: column;
        justify-content:center;
        
    }
    h1{
        color : var(--base);
    }
`
const SocioHolder = styled.div`
    grid-column : 11/14;
    grid-row : 1/-1;
    display: flex;
    justify-content: space-around;
    svg{
        fill : var(--base);
        &:hover{
            fill : var(--secondaryBase)
        }
    }
`