import React from 'react'
import { PlayButton } from '../ui/ui'
import styled, { css } from 'styled-components'
import Image from '../ui/Image.component'
const Thumbnails = ({src,caption,type,time}) => {
    return(
        <MoveableSlider className="Moveable">
            <Image 
            mainClass="Moveable-"
            src={`https://i.ytimg.com/vi/${src}/maxresdefault.jpg`}
            alt={caption}/>
            <div className="Moveable-capt">
                <h1>{caption}</h1>
                <h2>{type}</h2>
            </div>
            <h3 className="Moveable-time">
                {time}
            </h3>
            <div className="Moveable-svg">
               <PlayButton />
            </div>
        </MoveableSlider> 
    )
}

export default Thumbnails

const typoStyles = css`
margin : 0 0 0 0.5rem;
padding : 0;
`

const MoveableSlider = styled.div`
cursor: pointer;
display :grid;
grid-template-columns : 1fr max-content;
grid-template-rows: max-content 1fr;
.Moveable{
    &-img--container{
    height: 300px;
    max-width: 400px;
    position: relative;
    overflow: hidden;
    grid-column : 1/-1;
    grid-row : 1/-1;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position : 100% 50%;
        }
        &::after{
            content: '';
            position: absolute;
            background-color: var(--imgGd);
            z-index: 1000;
            top : 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
    &-capt{
        grid-row : 2/3;
        grid-column : 1/3;
        z-index : 1000;
        align-self : end;
            h1,h2{
                ${typoStyles};
            }
            h1{
                font-weight : 600;
                font-size: var(--miniHead);
                color : var(--primaryBase);
              
            }
            h2{
                font-weight : 400;
                font-size: var(--content);
                color : var(--primaryMain);
                margin-bottom : 0.5rem;
            }
        }
    &-time{
        grid-row : 2/3;
        grid-column : 1/3;
        z-index: 1000;
        align-self: start;
        justify-self: end;
        font-weight : 600;
        font-size: var(--content);
        ${typoStyles};
        margin : 0.5rem;
        color : var(--primaryBase);
        border-radius : 0.3rem;
    }
    &-svg{
        grid-row : 2/3;
        grid-column : 1/3;
        z-index: 1000;
        align-self: end;
        justify-self: end;
        margin : 0.5rem;
        filter :  drop-shadow(0px 2.5px 1px var(--baseShadow));
        svg{
            fill : var(--base);
        }
    }
}
`