import React from 'react'
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";
 
const Voice = () => {
    let pass;

    function push(a){
        pass.push(a);
    }

    const { transcript, resetTranscript } = useSpeechRecognition({
        continuous: true
      });
     
      if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null;
      }
     
  return (
    <>
      <div>
        <button onClick={SpeechRecognition.startListening}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
        <p>{transcript}</p>
      </div>

    </>
  )
}

export default Voice
