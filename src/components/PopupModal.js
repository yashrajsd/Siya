import React, { useState, useEffect, useRef } from 'react';
import './PopupModal.css';

const PopupModal = ({ onClose, audioSrc = '/firsaudio.mp3', text = null }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [audioPlaying, setAudioPlaying] = useState(true);
  const [fade, setFade] = useState(false);
  
  const onCloseRef = useRef(onClose);
  const audioRef = useRef(null);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // --- AUDIO LOGIC ---
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(audioSrc);
      audioRef.current.loop = false;
    }
    
    const audio = audioRef.current;
    let hasEnded = false;
    
    const handleAudioEnd = () => {
      if (hasEnded) return; 
      hasEnded = true;
      setAudioPlaying(false);
      
      setTimeout(() => {
        setFade(true);
        setTimeout(onCloseRef.current, 500); 
      }, 500);
    };

    audio.addEventListener('ended', handleAudioEnd, { once: true });
    
    // Play automatically (works now because user clicked the button first!)
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.error('Audio play error:', error);
      });
    }

    return () => {
      audio.removeEventListener('ended', handleAudioEnd);
      audio.pause();
    };
  }, [audioSrc]);

  // --- TYPEWRITER LOGIC ---
  useEffect(() => {
    const defaultText = `Hey Siya… welcome to your mission.\n\nOut of all the agents you could choose… there's one who's been waiting just for you.\n\nNot the strongest… not the flashiest…\nbut definitely the one who'd always have your back.\n\nSo take your time… look carefully…\nand pick the one you think is yours.`;
    
    const displayText = text || defaultText;

    let index = 0;
    const interval = setInterval(() => {
      if (index < displayText.length) {
        setDisplayedText(displayText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className={`popup-overlay ${fade ? 'fade-out' : ''}`}>
      <div className={`ipad-container ${fade ? 'fade-out' : ''}`}>
        <div className="ipad-frame">
          <div className="notch"></div>
          
          <div className="screen">
            <div className="space-background">
              <div className="stars"></div>
              <div className="planet planet-1"></div>
              <div className="planet planet-2"></div>
              <div className="glow-element"></div>
            </div>

            <div className="modal-content">
              <div className="text-container">
                <p className="modal-text" style={{ whiteSpace: 'pre-wrap' }}>
                  {displayedText}
                </p>
              </div>
              
              {/* Audio indicator */}
              {audioPlaying && (
                <div className="audio-indicator">
                  <div className="pulse"></div>
                  <div className="pulse"></div>
                  <div className="pulse"></div>
                </div>
              )}
            </div>
          </div>
          <div className="home-indicator"></div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;