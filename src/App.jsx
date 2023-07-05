import { useState, useRef, useEffect } from "react";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data";
function App() {
  const audioRefs = useRef([]);
  const [displayText, setDisplayText] = useState("No value");
  const handlePlay = (audioIndex) => {
    if (audioRefs.current[audioIndex]) {
      audioRefs.current[audioIndex].currentTime = 0;
      audioRefs.current[audioIndex].play();
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key.toUpperCase();
      console.log(key);
      const audioIndex = data.findIndex((item) => item.key === key);
      if (audioIndex !== -1 && audioRefs.current[audioIndex]) {
        audioRefs.current[audioIndex].currentTime = 0;
        audioRefs.current[audioIndex].play();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <main>
      <div id="drum-machine">
        <h2 className="underline">Drum Machine</h2>
        <table>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.id}
                onClick={() => {
                  handlePlay(index);
                  setDisplayText(item.displayText);
                }}
              >
                <td className="drum-pad" id={item.displayText}>
                  {item.key}
                  <audio
                    className="clip"
                    id={item.key}
                    ref={(ref) => (audioRefs.current[index] = ref)}
                    src={item.audioSrc}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 id="display">{displayText}</h3>
      </div>
      <Footer />
    </main>
  );
}

export default App;
