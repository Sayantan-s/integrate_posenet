import React from 'react'
import Webcam from 'react-webcam'
import * as posenet from '@tensorflow-models/posenet'
import * as tf from '@tensorflow/tfjs'
import styled from 'styled-components'

function App() {
  const webcamRef = React.useRef(null);
  const canvRef = React.useRef(null); 
  const styles = {
    width : 440,
    height : 280,
    zIndex  : 200,
    position : 'absolute',
    borderRadius  : '1.2rem'
  }
  const integratePosenet = async _ => {
    const net = await posenet.load({
      inputResolution : {
        width: 440,
        height : 280
      },
      scale : 0.5
    })
   setInterval(_ => {
      detect(net)
    },100)
  }


  const detect = async(net) => {
    if(typeof webcamRef.current !== undefined && webcamRef.current !== null && webcamRef.current.video.readyState === 4){
      const { video } = webcamRef.current
      const vidWidth = video.videoWidth
      const vidHeight = video.videoHeight

      video.width = vidWidth
      video.height = vidHeight

      const pose = await net.estimateSinglePose(video)
      console.log(vidWidth, vidHeight)
      console.log(pose)
    }
  }

  integratePosenet()  // I turned off this posenet function call and the setInterval so that it doesnt detect,cause turning it on is causing problems.


  return (
    <Camera>
      {/*<img src="https://i.ytimg.com/vi/Tz9d7By2ytQ/maxresdefault.jpg" alt="thumbnail" />*/}
       <Webcam
       ref={webcamRef}
       style={styles} 
       />
       <canvas
       ref={canvRef}
       style={styles} 
       />
    </Camera>
  );
}

export default App;


const Camera = styled.div`
  z-index: 500000;
  position: fixed;
  width: 440px;
  height: 280px;
  bottom: 1rem;
  right : -1rem;
`