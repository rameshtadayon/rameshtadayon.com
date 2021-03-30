import React from 'react';
import './App.css';
import sunflowers from './sunflowers.jpeg';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faHome} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faHome)

function App() {
  return (
    <div>
      <div style={{display: 'flex', alignItems: 'center', backgroundColor: 'black', height: '100%', width: '100%'}}>
          {/* <div style={{backgroundColor: 'black'}}>
          </div> */}
          <h1 style={{display: 'table-caption', fontSize: '25px', paddingLeft: '25px', paddingRight: '25px', backgroundColor: 'orange', backgroundImage: `url("https://images.unsplash.com/photo-1455659817273-f96807779a8a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80")`}}>
          All Are Welcome Here
          </h1>
          <div style={{backgroundColor: 'black'}}>
          
          </div>
      </div>
      <div style= {{backgroundColor: 'orange', fontWeight: 'bold', color: 'black', textAlign: 'center', fontSize: '45px', paddingBottom: '15px'}}>
      Ramesh Tadayon
      </div>
      <div style= {{display: 'flex', justifyContent: 'center' , alignItems: 'center', backgroundColor: 'orange'}}>
         <button style={{backgroundColor: 'black', color: 'white', textAlign: 'center', fontSize: '16px', padding:'14px 30px', margin:'10px', borderRadius: '18px'}}>
           My Journey
         </button>
         <button style={{backgroundColor: 'black', color: 'white', textAlign: 'center', fontSize: '16px', padding:'14px 30px', margin:'10px', borderRadius: '18px'}}>
           Projects and Tinkering
         </button>
         <button style={{backgroundColor: 'black', color: 'white', textAlign: 'center', fontSize: '16px', padding:'14px 30px', margin:'10px', borderRadius: '18px'}}>
           Cakes and Bakes
         </button>
      </div>
    </div>
  );

}




export default App;
