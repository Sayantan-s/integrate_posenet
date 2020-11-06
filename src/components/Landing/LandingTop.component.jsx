import React from 'react'
import { Grid } from '../layout/StyleWrappers'
import styled from 'styled-components'
import Button from '../ui/Button.component'
import Nav from '../ui/Nav.component'
const LandingTop = () => {
    return (
      <LandingWrapperTop row="100%">
            <Headerholder row="100%" col="minmax(2rem,1fr) repeat(10,6rem) minmax(4rem,1fr)">
                <Nav />
                <div className="Topholder-content">
                    <h1>Work out at home <br />for free.</h1>
                    <p>We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free! </p>
                    <Button>Count me in</Button>
                </div>
                <div className="Topholder-img">
                    <img 
                    src = "https://images.unsplash.com/photo-1599447421416-3414500d18a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" 
                    alt="header" />
                </div>
            </Headerholder>
      </LandingWrapperTop>
    )
}

export default LandingTop

const LandingWrapperTop = styled(Grid)`
    grid-column : 1/-1;
    grid-row: 1/2;
    background-color : var(--primaryMain);
`

const Headerholder = styled(Grid)`
        grid-column : 3/13;
        grid-row : 1/-1;
        font-style: normal;
        color : var(--base);
        .Topholder{
            &-img{
            grid-column : 5/-1;
            grid-row : 1/-1;
            background-color: white;
            display : flex;
            justify-content :center;
            place-items:center;
                img{
                    max-width : 100%;
                    position:relative;
                    min-width: 800px;
                    z-index : 10000;
                    &::after{
                        content: '';
                        width: 100%;
                        height: 100%;
                        background-color: var(--primaryMain);
                        position:absolute;
                        z-index : 10000000;
                    }
                }
            }
            &-content {
                display :flex;
                flex-direction : column;
                align-items: flex-start;
                grid-column : 1/8;
                grid-row : 1/-1;
                z-index : 10000;
                justify-content:center;
                background-color : var(--primaryMain);
                h1{
                    font-size : var(--head);
                    margin : 0;
                    line-height : 1;
                    z-index : 10000;
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