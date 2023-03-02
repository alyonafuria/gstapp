import './App.css';
import React, {useState, createContext} from "react"
import Left from './components/Left';
import Center from './components/Center';
import Right from './components/Right';

function App() {
  const [login, setLogin] = useState(false);

  if (login) {
    return (
      <>
      <div className="grid h-screen w-screen grid-cols-3">
        <Left setLogin={setLogin} />
        <Center />
        <Right />
      </div>
      </>
    );
  } else {
    return (
      <>
      <div>
        <h2>Login with MetaMask</h2>
        <button className="border-2 border-black" onClick={() => setLogin(true)}>Login</button>
        <button className="border-2 border-black">Light theme</button>
      </div>
      </>
    );
  }
    
}

export default App;
