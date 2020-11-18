import React from 'react'
import styled from 'styled-components'
import DanceTypes from '../commons/DanceTypes'
import { Grid } from '../layout/StyleWrappers'
import Image from '../ui/Image.component'
import Sectionheader from '../ui/Sectionheader.component'

const Section = ({Children,headerProps,row,...props}) => {
    return (
       <SecWrapper 
       {...props}
       row={row || "max-content"}>
           { headerProps && <Sectionheader
           colCount="6/10"
           rowCount="1/2"
           {...headerProps}
           /> }
           <Children />
       </SecWrapper>
    )
}

export default Section

const SecWrapper = styled(Grid)`
grid-row: ${props => props.rows ? props.rows : 3/4};
grid-column: 1/-1;
background-color : ${props => props.bgCol || 'var(--primaryBase)' };
align-items : ${props => props.align || 'none'};
justify-items : ${props => props.justify || 'none'};
padding : ${props => props.p || '0rem'};
`


/* {
                    DanceTypes.map(dance => (
                        <Image
                        width="400" 
                        key={dance.alt}
                        {...dance}
                        />
                        )) 
                        header="Experience now" 
                        shorthead="Get your body moving and be ready to unleash the dancer within you by taking this challenge and climbing to the top of the leaderboard"
            }*/