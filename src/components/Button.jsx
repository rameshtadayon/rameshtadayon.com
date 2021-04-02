import React from 'react';
import { useHistory } from 'react-router-dom';

export default ({to, text}) => {
  const history = useHistory();

  function handleClick() {
    history.push(to);
  }

  return (
    <button type="button" onClick={handleClick} style={{fontFamily:'Quicksand', backgroundColor: 'transparent', color: 'white', textAlign: 'center', fontSize: '16px', padding:'14px 30px', margin:'10px', borderRadius: '18px', outline:'none'}}>
      {text}
    </button>
  );
}

