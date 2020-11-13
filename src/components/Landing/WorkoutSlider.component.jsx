import React from 'react'
import styled from 'styled-components'
/*import Button from '../ui/Button.component'
import { ArrowLeft, ArrwoRight } from '../ui/ui'
import Image from '../ui/Image.component'*/ 

const WorkoutSlider = ({sliderHeader,children,...otherProps}) => {
    return (
        <GridSlider {...otherProps}>
            <div className="Slider">
                <h2>{sliderHeader}</h2>
                <div className="Slider-arrows">
                    {/*<Button
                    width={'2rem'}
                    height="2rem"
                    p="0rem">
                        <ArrowLeft size="2rem" col={"var(--secondaryBase)"}/>
                    </Button>
                    <Button
                    p="0rem"
                    width={'2rem'}
                    height="2rem">
                        <ArrwoRight size="2rem" col={"var(--secondaryBase)"}/>
                    </Button>*/}
                </div>
                <h3>See all</h3>
            </div>
           <div className="Track">
               {children}
           </div>
        </GridSlider>
    )
}

export default WorkoutSlider

const GridSlider = styled.div`
grid-column : ${props => props.column || '1/-1'};
grid-row : ${props => props.row || '1/-1'};
display:flex;
flex-direction: column;
gap : 2rem;
.Track{
    display:flex;
    gap : 2rem;
}
.Slider{
    display:grid;
    grid-template-columns: minmax(min-content,14rem) max-content 1fr;
    align-items: center;
    h2{
    font-size: var(--miniHead);
    margin : 0;
    font-weight: 500;
    color: var(--base);
    display : flex;
    align-items: center;
        &::before{
            content: '';
            width: 10%;
            height: 3px;
            background-color: var(--base);
            margin-right: 10px;
        }
    }
    h3{
        font-size: var(--miniHead);
        margin : 0;
        font-weight: 500;
        color: var(--base);
        justify-self: end;
    }
    &-arrows{
        display: flex;
        justify-content: center;
    }
}
`