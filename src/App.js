import React from 'react';
import './App.css';
import Button from './components/Button';
import LinkedButton from './components/LinkedButton';
import Icon from './components/Icon';
import PersonalPhoto from './photos/bannerImage.jpeg'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const homeIcon = <Icon to='/'/> 
  const hobbyButton = <Button to='/hobbies' text='Cakes and Bakes'/> 
  const aboutButton = <Button to='/aboutme' text='About Me'/> 
  const projectsButton = <Button to='/projects' text='Projects'/> 

  const banner = (
    <div style={{display: 'flex', alignItems: 'center', justifyContent:'space-between', backgroundColor: 'black', height: '100%', width: '100%', backgroundImage: `url("https://images.unsplash.com/photo-1545231097-cbd796f1d95f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2572&q=80")`, backgroundSize: '300px 200px'}}>
      <h1 style={{display: 'table-caption',fontFamily:'Quicksand' ,fontSize: '20px', paddingBottom: '5px', paddingTop: '5px', paddingLeft: '25px', paddingRight: '25px', color: 'white', backgroundColor: 'black'}}>
      All are welcome here.
      </h1>
      {homeIcon}
    </div>
  )

  const header = (
    <div style= {{fontFamily:'Quicksand', backgroundColor: 'black', fontWeight: 'bold', color: 'white', textAlign: 'center', fontSize: '50px', paddingBottom: '15px', paddingTop: '20px'}}>
    Ramesh Tadayon
    </div>
  )

  const buttons = (
    <div style= {{display: 'flex', justifyContent: 'center' , backgroundColor: 'black', paddingBottom: '25px', paddingTop:'10px'}}>
      {aboutButton}
      {projectsButton}
      {hobbyButton}
</div>
  )

  const body = (
    <div style= {{backgroundColor: 'black', display: 'flex', alignItems: 'stretch', justifyContent: 'center', paddingBottom: '25px'}}>
    <div style = {{backgroundColor: 'black', margin: '30px', fontSize: '16px', color: 'white', textAlign: 'center', fontFamily: 'Homemade Apple'}}>
    Hello! Welcome to my personal website. This website has been created and maintained by me in order to document my progress in becoming a front-end developer, organize my projects and hobbies, and practice using create react app!
    </div> 
    <div>
    </div>
</div>
  )

  return (
    <Router>
      <div>
        {banner}
        {header}
        {buttons}
        {body}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/hobbies">
            <Hobbies />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path= "/aboutme">
            <About />
          </Route>
        </Switch>
      </div>
   </Router>
  );
} 

function Home() {
  const objective1Resource1 = <LinkedButton to='https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/3-terrarium/1-intro-to-html/README.md' text='Intro to HTML' />
  const objective1Resource2 = <LinkedButton to='https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/3-terrarium/2-intro-to-css/README.md' text='Intro to CSS'/>
  const objective1Resource3 = <LinkedButton to='https://css-tricks.com/snippets/css/a-guide-to-flexbox/' text='About Flex Box' />

  return (
    <div style={{display: 'flex', flexDirection:'column', backgroundColor:'black'}}>
      <div style={{display:'flex',flexDirection:'column'}}>
        <h1 style={{paddingLeft:'205px', textAlign:'left', fontSize: '20px', fontFamily: 'Quicksand', color:'lightgrey'}}>
              Here's the Latest:
        </h1>
        <div style={{backgroundColor:'black', display: 'flex', flexDirection:'row', justifyContent: 'center', paddingBottom:'50px'}}>
            <div style={{border:'1px solid lightgrey', borderRadius:'18px', width:'70%'}}>
              <h2 style={{ margin:'5px', textAlign:'center', fontSize:'18px', fontFamily: 'Quicksand', color:'white', paddingTop:'20px'}}>
                Objective 1 : Bulid Out Content and Styling on Personal Website in Create React App.
              </h2>
              <p style={{alignContent:'center', fontSize:'16px',color:'white', textAlign:'justify', margin:'20px', paddingBottom:'5px', paddingLeft:'20px', paddingRight:'20px', fontFamily:'Quicksand'}}>
                If you're reading this, it's likely that I've successfully completed this obejctive! 
                As a programmer, I started this project with some very basic knowledge of java, html and css. 
                Luckily for me, there is an abundance of tools, tutorials and resources that have allowed me to 
                reach this goal. Not to mention, the invaluable guidance of a professional front-end developer who
                just happens to be my beloved partner in life. At the bottom of each update, I'll provide a few 
                links to the resources that I thought were most intuitive and integral to acheiving the respective 
                objective. (Try out the ones below!)
              </p>
              <div style={{display:'flex', justifyContent:'space-evenly', fontFamily:'Quicksand', fontSize:'16px', paddingBottom:'10px'}}>
                {objective1Resource1}
                {objective1Resource2}
                {objective1Resource3}
              </div>
            </div>
        </div>
      </div>  
    </div>
  );
}

function About() {
  return (
    <div style={{display:'flex', flexDirection:'column',backgroundColor:'black'}}>
      <div style={{display:'flex', flexDirection:'row', justifyContent:'center', paddingBottom:'20px'}}>
        <div style={{display:'flex', flexDirection:'column', color:'white', backgroundColor:'black', border:'1px solid white', borderRadius:'18px', width:'70%'}}>
          <h1 style={{fontFamily:'Quicksand',fontSize:'22px', color:'white', paddingTop:'10px', textAlign:'center'}}>
            In a Nutshell...
          </h1>
          <div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', margin:'10px', paddingLeft:'20px', paddingRight:'20px', paddingBottom:'20px'}}>
            <p style={{alignContent:'left', paddingRight:'40px',fontSize:'18px',fontFamily:'Quicksand', justifyContent:'flex-start'}}>
              I was born in Iran in 1993 and have since lived in Louisianna, Florida, Utah and 
              most recently Arizona! I have a bachelors and masters degree in Biomedical Engineering from ASU. In
              my free time, I play video games like world of warcraft, overwatch, and rocket league. I also love to 
              bake cakes and sweets for family and friends. 
            </p>
            <img className='turkeyIMG' src={PersonalPhoto} alt='Personal Photo of Self and Partner' style={{justifyContent:'right', border:'1px solid white', borderRadius:'18px'}}/>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
    </div>
  );
}

function Hobbies() {
  return (
    <div>
      <h2>Cakse and Bakes</h2>
    </div>
  );
}

export default App;


// I moved to Arizona when I was accepted at ASU for my undergraduate degree in 
//               Biomedical Engineering. During that time, I learned about a research center on campus called the 
//               Center for Cognitive Ubiquitous Computing where Computer Scientists worked along Biomedical Engineers
//               to research and develop assistive technologies for people with disabilities. The engineers in that 
//               center heavily inspired my honors thesis - "Portable Heart Rate Monitor and iOS Application for Anxiety Therapy"