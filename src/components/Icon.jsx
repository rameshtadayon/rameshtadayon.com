import React from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router-dom';

const Icon = ({to}) => {
  const history = useHistory();

  function handleClick() {
    history.push(to);
  }

  return (
    <div onClick={handleClick} style={{ textAlign:'right', justifyContent: 'right' , backgroundColor: 'black', paddingBottom: '7px', paddingTop: '7px', paddingLeft: '25px', paddingRight: '25px'}}>
      <FontAwesomeIcon icon={faHome} inverse className='Icon'/>
    </div>
  );
}

export default Icon;