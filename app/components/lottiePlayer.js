import { useEffect, useRef, useState } from "react";

// Global flag to track script loading
let lottieScriptLoaded = false;

const LottiePlayer = ({ src, style, autoplay = true, loop = false }) => {
  const lottieRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Load script only once globally
    if (!lottieScriptLoaded) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/@lottiefiles/lottie-player";
      script.async = true;
      
      script.onload = () => {
        lottieScriptLoaded = true;
        setIsReady(true);
      };

      document.body.appendChild(script);

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    } else {
      setIsReady(true);
    }
  }, []);

  useEffect(() => {
    const lottieElement = lottieRef.current;

    if (isReady && lottieElement) {
      // Manage autoplay
      if (autoplay) {
        lottieElement.setAttribute("autoplay", "");
      } else {
        lottieElement.removeAttribute("autoplay");
      }

      // Manage loop
      if (loop) {
        lottieElement.setAttribute("loop", "");
      } else {
        lottieElement.removeAttribute("loop");
      }
    }
  }, [isReady, autoplay, loop]);

  return (
    <div style={{ ...style, overflow: "hidden" }}>
      {isReady && (
        <lottie-player
          ref={lottieRef}
          mode="normal"
          src={src}
          style={{ width: "100%", height: "100%" }}
        ></lottie-player>
      )}
    </div>
  );
};

export default LottiePlayer;