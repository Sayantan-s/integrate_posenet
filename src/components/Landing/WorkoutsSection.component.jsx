import React from 'react'
import WorkoutSlider from './WorkoutSlider.component'

const WorkoutsSection = () => {
    return (
        <>
           <WorkoutSlider 
           column="2/-1"
           row="2/3"
           sliderHeader="Spanish workouts"
           />

           <WorkoutSlider 
           column="2/-1"
           row="3/4"
           sliderHeader="Latin workouts"
           /> 
        </>
    )
}

export default WorkoutsSection
