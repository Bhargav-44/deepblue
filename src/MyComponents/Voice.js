import Welcome from './Welcome'
import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Voice = (props) => {
  const [transcriptValue, setTranscriptValue] = useState(null);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(() => {
    setTranscriptValue(transcript);
  }, [transcript]);

  console.log("transcriptValue==>", transcriptValue);
  const pass = "hello"
  if (transcriptValue === pass){
    <Welcome name={props.name}/>
  } else{
    console.log("Try again")
  }


  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
       
        {(transcriptValue==pass) ? (SpeechRecognition.stopListening, <Welcome name={props.name} user = {props.user}/>):(<p>Try again</p>)}
      
    </div>
  );
};
export default Voice;