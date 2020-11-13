import React from 'react'
import { LatinWorkouts, SpainsWorkouts } from '../commons/Workouts'
import Thumbnails from './Thumbnails.components'
import WorkoutSlider from './WorkoutSlider.component'

const WorkoutsSection = () => {
    return (
        <>
           <WorkoutSlider 
           column="2/-2"
           row="2/3"
           sliderHeader="Spanish workouts"
           >
               {
                   SpainsWorkouts.map(workout => <Thumbnails {...workout} type="Spanish workout"/>)
               }
           </WorkoutSlider>

           <WorkoutSlider 
           column="2/-2"
           row="3/4"
           sliderHeader="Latin workouts"
           >
            {
                LatinWorkouts.map(workout => <Thumbnails {...workout} type="Latin workout" />)
            }   
            </WorkoutSlider> 
        </>
    )
}

export default WorkoutsSection
