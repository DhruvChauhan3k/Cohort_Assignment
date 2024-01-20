import { useState, useEffect } from "react";

function App() {
  const [red, setRed] = useState(false);

  useEffect(() => {
    if (red) {
      document.body.style.backgroundColor = "red";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, [red]);

  return (
    <div style={{ display: 'flex', minHeight: '100%',minWidth:'100%', justifyContent:'center',alignItems: 'center', }}>
      <button onClick={() => setRed(!red)} style={{ backgroundColor: 'red' }}>Red</button>
    </div>
  );
}

export default App;
