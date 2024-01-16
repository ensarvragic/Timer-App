import { useRef, useState } from "react";

export default function Player() {
  const PlayerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  const handleClick = () => {
    setEnteredPlayerName(PlayerName.current.value);
    PlayerName.current.value = '';
  };

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown user'}</h2>
      <p>
        <input 
        type="text" 
        ref={PlayerName} 
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
