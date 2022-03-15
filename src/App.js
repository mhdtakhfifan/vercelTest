import React from 'react';
import './mhd.scss';
import logo from './logo.svg';

function App() {
  let xxx = process.env.React_App_Root

  return (
   <React.Fragment>
     {console.log("xxx",xxx)}
     <h1 style={{ marginLeft:'10px' }}>{xxx}</h1>
   </React.Fragment>
  );
}

export default App;
