import React from 'react'
import { Grid } from '../layout/StyleWrappers'
import styled from 'styled-components'
import Button from '../ui/Button.component'
import Nav from '../ui/Nav.component'
import Image from '../ui/Image.component'
import { ChevronDown, ChevronRight } from '../ui/ui'
const LandingTop = () => {
    return (
      <LandingWrapperTop row="max-content 1fr max-content">
                <Nav 
                row={'1/2'}
                column={'2/12'}
                logo />
                <div className="Topholder-bg"/>
                <div className="Topholder-content">
                    <div className="Topholder-content--items">
                            <h1>01</h1>
                            <h2>Work out at home <br />for free.</h2>
                            <p>We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free! </p>
                            <Button 
                            className="Topholder-content--items_btn"
                            btnBg={'var(--secondaryBase)'}>
                                <span>Count me in</span>
                                <span className="Topholder-content--items_btn--svg"><ChevronRight size={'1.7rem'}/></span>
                            </Button>
                    </div>
                </div>
                <div className="Topholder-img">
                    <Image
                    mainClass="Topholder-"
                    src = "https://images.unsplash.com/photo-1599447421416-3414500d18a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" 
                    alt="header"
                    />
                </div>
                <div className="Topholder-scroll"><ChevronDown size="4rem"/></div>
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
            grid-row : 1/-2;
            background-color: white;
            display : flex;
            justify-content :center;
            place-items:center;
            background-color: var(--primaryBase);
               &--container{
                position : relative;
                overflow: hidden;
                height : max-content;
                &:hover img{
                    transform : scale(1.2);
                    }
                    img{
                        max-width : 100%;
                        min-width: 45rem;
                        z-index : 1000;
                        position : relative;
                        transition: 5s all;
                        transform: scale(1.03);
                    }
                    &::after{
                            content: '';
                            width: 100%;
                            height: 100%;
                            z-index : 1000000; 
                            background-color: var(--imgGd);
                            position:absolute;
                            top: 0;
                            left: 0;
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
            &-scroll{
                grid-column : 6/8;
                z-index: 1000000;
                margin: 0 auto;
                transform: translateY(-2rem);
                cursor:pointer;
            }
            &-content{
                    z-index : 100000;
                    grid-column : 2/7;
                    grid-row : 1/-2;
                    align-self :center;
                    &--items{
                        h1{
                            font-size : var(--subhead);
                            font-weight: 500;
                            color : var(--secondaryBase);
                            display :flex;
                            flex-direction : column;
                            grid-gap : 1rem;
                                &::after{
                                content : '';
                                width: 15%;
                                height: 3px;
                                background-color: black;
                                margin-bottom: 1rem;
                            }
                        }
                        h2{
                        font-size : var(--head);
                        margin : 0;
                        line-height : 1;
                        color : var(--base);
                        margin-bottom: 2rem;
                        }
                        p{
                            font-size : var(--content);
                            font-weight : 400;
                            max-width: 450px;
                            text-align: justify;
                            margin-bottom: 3rem;
                        }
                        &_btn{
                            display :flex;
                            justify-content:center;
                            span{
                                transition : 0.6s all;
                                &:last-child{
                                    width : 1.7rem;
                                    display:flex;
                                    place-content: center;
                                    margin-left: 0.5rem;
                                }
                            }
                            &:hover span:last-child{
                                transform : translateX(0.6rem);
                            }
                        }
                    }
                }
        }
`