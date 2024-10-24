import './Css/App.css';
import './header.js';
import { HeadHeader } from './header';
import { useState } from 'react';
function App() {
  const [isChecked, setIsCheked]=useState(true);
  const handleCheckboxChange=()=>{
    setIsCheked(prev=> !prev);
  };
  const background=isChecked? 'App-light' : 'App';
  return (
    <div className={background}>
      <HeadHeader theme={isChecked} onCheckboxChange={handleCheckboxChange}/>
    </div>
  );
}

export default App;
