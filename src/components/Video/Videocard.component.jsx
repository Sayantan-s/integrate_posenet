import React from 'react'
import YouTube from 'react-youtube'
import  styled  from 'styled-components'
import Camera from './Camera'
const Video = () => {
      const opts = {
        playerVars: {
          autoplay: 1,
          controls : 0,
          enablejsapi: 0,
          showInfo: 0,
          modestbranding: 1,
          rel: 0,
          HD: 1,
          frameBorder: 0,
          cc_load_policy: 1,
          color: "white"
        },
      };
      const [videoState,setVideoState] = React.useState(0);
      const playVideo = eve => {
        console.log(eve.target)
        if(eve.target.getPlayerState() === 3){
          setVideoState(eve.target.getPlayerState())
        }
      }
      console.log(videoState)
      const videoRef= React.useRef(null);
    return (
        <WorkoutVid>
            <YouTube
            ref={videoRef}
            videoId="Tz9d7By2ytQ"         // defaults -> null
            className="Video_item"                // defaults -> null
            containerClassName="Video"       // defaults -> ''
            opts={opts}                        // defaults -> {}
            onReady={playVideo}                    // defaults -> noop
            //onPlay={func}                     // defaults -> noop
            //onPause={func}                    // defaults -> noop
            //onEnd={func}                      // defaults -> noop
            //onError={func}                    // defaults -> noop
            //onStateChange={func}              // defaults -> noop
            //onPlaybackRateChange={func}       // defaults -> noop
            //onPlaybackQualityChange={func}    // defaults -> noop
          />
          {videoState === 2 && <Button onClick={() => {console.log(videoRef.current)}}>Play</Button>}
          <Camera />
        </WorkoutVid>
    )
}

export default Video
const Button = styled.button`
position : absolute;
top: 50%;
left: 50%;
padding: 2rem;
transform: translate(-50%,-50%);
z-index: 10000000;
cursor : pointer;
border-radius: 1.2rem;
border: none;
outline: none;
`

const WorkoutVid = styled.div`
width:100%; 
height:100%; 
.Video{
  &_item{
    position:fixed; 
    max-width: 100%;
    top:0; 
    left:0; 
    bottom:0; 
    right:0; 
    width:100%; 
    height:100%; 
    border:none; 
    margin:0; 
    padding:0; 
    overflow:hidden; 
    z-index:99;
  }
  &::after{
      content: '';
      position:absolute; 
      top:0; 
      width:500px; 
      height:100%; 
      margin: 0;
      padding:0 ;
      width:100%;
      height:100%;
      background: -webkit-linear-gradient( rgba(0,0,0, 0) 0%, rgba(0,0,0, 0) 0%, rgba(0,0,0, 1) 100% );
      z-index : 10000;
    }
}
`
