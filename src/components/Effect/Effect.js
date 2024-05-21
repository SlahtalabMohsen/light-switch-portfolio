import React, { useState } from 'react';
import './Effect.css';

// function Effect() {
//   const [isDimmed, setIsDimmed] = useState(true);

//   const toggleDimmed = () => {
//     setIsDimmed();

//   }
//   return (
//     <div className={isDimmed ? "dimmed" : ""}>
//       <span className='btn-float wave' onClick={toggleDimmed}>
//         <span className="name-animate-red">💡</span>
//         <span>Click here to turn the ligh on </span>
//         <span className="name-animate-red">💡</span>
//         </span>
//     </div>
//   );
// }

function Effect() {
  const [isDimmed, setIsDimmed] = useState(true);

  const toggleDimmed = () => {
    setIsDimmed(false);
  }
  
  return (
    <>
      {isDimmed && (
        <div className="dimmed">
          <span className='btn-float wave' onClick={toggleDimmed}>
            <span className="name-animate-red">💡</span>
            <span>Click here to turn the light on </span>
            <span className="name-animate-red">💡</span>
          </span>
        </div>
      )}
    </>
  );
}

export default Effect