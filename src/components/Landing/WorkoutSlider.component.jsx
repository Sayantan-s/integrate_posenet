import React from 'react'
import styled from 'styled-components'

const WorkoutSlider = ({sliderHeader,...otherProps}) => {
    return (
        <GridSlider {...otherProps}>
            <h1>{sliderHeader}</h1>
        </GridSlider>
    )
}

export default WorkoutSlider

const GridSlider = styled.div`
grid-column : ${props => props.column || '1/-1'};
grid-row : ${props => props.row || '1/-1'};
h1{
    font-size: var(--subhead);
    margin : 0;
    font-weight: 500;
    color: var(--base);
}
`