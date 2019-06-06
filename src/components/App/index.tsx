import React, { useState, useRef, useEffect, useCallback } from 'react';
import Analyser from '../Analyser';
import Controls from '../Controls';
import { useStateRef } from '../../utils/hooks';
import { modulo } from '../../utils';
import { audioPaths } from './utils';

const App: React.FC = () => {
  const [wantsToPlay, setWantsToPlay] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioContext, setContext, contextRef] = useStateRef<
    AudioContext | undefined
  >(undefined);
  const [audioSource, setSource] = useState<MediaElementAudioSourceNode>();
  const audioIndexRef = useRef(0);

  const audioRef = useRef<HTMLAudioElement>(null);

  // attach audio event listeners
  useEffect(() => {
    const audioElement = audioRef.current!;

    const onAudioPlay = () => setIsPlaying(true);
    const onAudioPause = () => setIsPlaying(false);
    const onAudioError = console.error;
    const onAudioEnded = () => {
      const nextAudioIndex = modulo(
        audioIndexRef.current + 1,
        audioPaths.length
      );
      audioElement.src = audioPaths[nextAudioIndex];
      audioElement.play();
      audioIndexRef.current = nextAudioIndex;
    };

    audioElement.addEventListener('playing', onAudioPlay);
    audioElement.addEventListener('pause', onAudioPause);
    audioElement.addEventListener('error', onAudioError);
    audioElement.addEventListener('ended', onAudioEnded);

    return () => {
      audioElement.removeEventListener('playing', onAudioPlay);
      audioElement.removeEventListener('pause', onAudioPause);
      audioElement.removeEventListener('error', onAudioError);
      audioElement.removeEventListener('ended', onAudioEnded);
    };
  }, []);

  const initializeAudioContext = useCallback(() => {
    const audioElement = audioRef.current!;
    const audioContext = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
    const audioSource = audioContext.createMediaElementSource(audioElement);

    setContext(audioContext);
    setSource(audioSource);
  }, [audioRef.current]);

  const togglePlay = useCallback(() => {
    const audioElement = audioRef.current!;

    if (audioElement.paused) {
      setWantsToPlay(true);
      audioElement.play();

      if (!contextRef.current) {
        initializeAudioContext();
      }
    } else {
      setWantsToPlay(false);
      audioElement.pause();
    }
  }, [audioRef.current]);

  return (
    <>
      <audio
        ref={audioRef}
        id="audioElement"
        src={audioPaths[0]}
        preload="auto"
        crossOrigin="anonymous"
      />

      {audioContext && audioSource && (
        <Analyser audioContext={audioContext} audioSource={audioSource} />
      )}

      <Controls
        audioContext={audioContext}
        wantsToPlay={wantsToPlay}
        isPlaying={isPlaying}
        togglePlay={togglePlay}
      />
    </>
  );
};

export default App;
