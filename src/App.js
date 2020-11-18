import React, {useState, useEffect} from "react";
import {createGlobalStyle} from 'styled-components';
import {createCalendar} from './helpers'

function App() {
  const [hatches, setHatches] = useState(createCalendar());
  console.log(hatches);

  return (
    <>
      Advent Calendar
    </>
  );
}

export default App;
