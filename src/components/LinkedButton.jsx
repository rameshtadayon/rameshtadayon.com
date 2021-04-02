import React from 'react';
import { useHistory } from 'react-router-dom';

export default ({to, text}) => {
  const history = useHistory();

  function handleClick() {
    window.open(to,'_blank');
  }

  return (
    <button type="button" onClick={handleClick} style={{fontFamily:'Quicksand', backgroundColor: 'transparent', color: 'white', textAlign: 'center', fontSize: '14px', padding:'14px 30px', margin:'10px', borderRadius: '18px', outline:'none'}}>
      {text}
    </button>
  );
}

