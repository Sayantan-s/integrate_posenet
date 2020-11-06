import React from 'react'
import { Grid } from '../layout/StyleWrappers'
import styled from 'styled-components'
import Button from '../ui/Button.component'
const LandingTop = () => {
    return (
      <LandingWrapperTop row="100%">
          <div className="Topholder">
                <div className="Topholder-content">
                    <h1>Work out at home <br />for free.</h1>
                    <p>We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free! </p>
                    <Button>Count me in</Button>
                </div>
                <div className="Topholder-img">
                    <img 
                    src = "https://images.unsplash.com/photo-1599447421416-3414500d18a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" 
                    alt="header" 
                    width="800" />
                </div>
          </div>
      </LandingWrapperTop>
    )
}

export default LandingTop

const LandingWrapperTop = styled(Grid)`
    grid-column : 1/-1;
    grid-row: 1/2;
    background-color : pink;
    .Topholder {
        grid-column : 3/13;
        grid-row : 1/-1;
        background-color : red;
        font-weight : 600;
        font-size: 80px;
        font-style: normal;
        color : var(--base);
        &-img{
            max-width : 800px;
            img{
                max-width : 800px;
            }
        }
        &-content {
            display :flex;
            flex-direction : column;
            align-items: flex-start;
            h1{
                font-size : var(--head);
                margin : 0;
                line-height : 1;
            }
            p{
                font-size : var(--content);
                font-weight : 400;
            }
        }
    }
`