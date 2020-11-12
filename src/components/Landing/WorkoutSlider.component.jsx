import React from 'react'
import styled from 'styled-components'
import { ArrowLeft, ArrwoRight } from '../ui/ui'

const WorkoutSlider = ({sliderHeader,...otherProps}) => {
    return (
        <GridSlider {...otherProps}>
            <div className="Slider">
                <h2>{sliderHeader}</h2>
                <div className="Slider-arrows">
                    <div className="Slider-arrows--container">
                        <ArrowLeft size="2rem" col={"var(--secondaryBase)"}/>
                    </div>
                    <div className="Slider-arrows--container">
                        <ArrwoRight size="2rem" col={"var(--secondaryBase)"}/>
                    </div>
                </div>
            </div>
        </GridSlider>
    )
}

export default WorkoutSlider

const GridSlider = styled.div`
grid-column : ${props => props.column || '1/-1'};
grid-row : ${props => props.row || '1/-1'};
.Slider{
    display:grid;
    grid-template-columns: minmax(min-content,23rem) max-content;
    h2{
    font-size: var(--subhead);
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
    &-arrows{
        display: flex;
        &--container{
            width: 2rem;
            height: 2rem;
            display: flex;
            justify-content: center;
            padding: 0.5rem;
            cursor: pointer;
            &:hover{
                background-color : var(--imgGd);
            }
        }
    }
}
`