
import React from "react";
import Clock from 'react-live-clock';
  
export default function Clocks() {
  return (
    <div>
      <h3>Digital Clock</h3>
      <Clock
          format={'h:mm:ssa'}
          style={{fontSize: '1.5em'}}
          ticking={true} />
    </div>
  );
}