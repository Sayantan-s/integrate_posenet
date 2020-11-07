import React from 'react'
import { Grid } from '../layout/StyleWrappers'
import styled from 'styled-components'
import Button from '../ui/Button.component'
import Nav from '../ui/Nav.component'
const LandingTop = () => {
    return (
      <LandingWrapperTop row="100%">
                <Nav 
                row={'1/-1'}
                column={'2/12'}
                logo />
                <div className="Topholder-bg"/>
                <div className="Topholder-content">
                    <div className="Topholder-content--items">
                            <h1>Work out at home <br />for free.</h1>
                            <p>We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free! </p>
                            <Button btnBg={'var(--secondaryBase)'}>Count me in</Button>
                    </div>
                </div>
                <div className="Topholder-img">
                    <div className="Topholder-img--container">
                        <img 
                        src = "https://images.unsplash.com/photo-1599447421416-3414500d18a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" 
                        alt="header" />
                    </div>
                </div>
      </LandingWrapperTop>
    )
}

export default LandingTop

const LandingWrapperTop = styled(Grid)`
    grid-column : 1/-1;
    grid-row: 1/2;
    background-color : var(--primaryMain);
    .Topholder{
            &-img{
            grid-column : 7/-1;
            grid-row : 1/-1;
            background-color: white;
            display : flex;
            justify-content :center;
            place-items:center;
               &--container{
                    img{
                        max-width : 100%;
                        min-width: 800px;
                        z-index : 1000;
                        position : relative;
                        &::after{
                            content: '';
                            width: 100%;
                            height: 100%;
                            z-index : 1000000; 
                            background-color: var(--primaryMain);
                            position:absolute;
                        }
                    }
               }
            }
            &-bg {
                display :flex;
                flex-direction : column;
                align-items: flex-start;
                grid-column : 1/10;
                grid-row : 1/-1;
                z-index : 1000;
                justify-content:center;
                place-items:center;
                background-color : var(--primaryMain);
            }
            &-content{
                    z-index : 100000;
                    grid-column : 2/7;
                    grid-row : 1/-1;
                    align-self :center;
                    h1{
                    font-size : var(--head);
                    margin : 0;
                    line-height : 1;
                    }
                    p{
                        font-size : var(--content);
                        font-weight : 400;
                        max-width: 450px;
                        text-align: justify;
                    }
                }
        }
`

const Headerholder = styled(Grid)`
        grid-column : 3/13;
        grid-row : 1/-1;
        font-style: normal;
        color : var(--base);
        
`