import React from "react";
import "./App.css";
import Button from "./components/Button";
import Objective from "./components/Objective";
import Icon from "./components/Icon";
import PersonalPhoto from "./photos/bannerImage.jpeg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BakeTile from "./components/Card";
import tileData from "./components/tileData";

function App() {
  const homeIcon = <Icon to="/" />;
  const hobbyButton = <Button to="/hobbies" text="Cakes and Bakes" />;
  const aboutButton = <Button to="/aboutme" text="About Me" />;
  const projectsButton = <Button to="/projects" text="Programming Projects" />;

  const banner = (
    <div className="bannerDiv">
      <h1
        style={{
          display: "table-caption",
          fontFamily: "Quicksand",
          fontSize: "20px",
          padding: "5px 25px",
          color: "white",
        }}
      >
        All are welcome here.
      </h1>
      {homeIcon}
    </div>
  );

  const buttons = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingBottom: "25px",
        paddingTop: "10px",
      }}
    >
      {aboutButton}
      {projectsButton}
      {hobbyButton}
    </div>
  );

  const header = (
    <div className="headerDiv">
      {banner}
      <div
        style={{
          fontFamily: "Quicksand",
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          fontSize: "50px",
          paddingBottom: "15px",
          paddingTop: "20px",
        }}
      >
        Ramesh Tadayon
      </div>
      {buttons}
    </div>
  );

  const body = (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        alignItems: "stretch",
        justifyContent: "center",
        paddingBottom: "25px",
      }}
    >
      <div
        style={{
          backgroundColor: "black",
          margin: "30px",
          fontSize: "16px",
          color: "white",
          textAlign: "center",
          fontFamily: "Homemade Apple",
        }}
      >
        Hello! Welcome to my personal website. This website has been created and
        maintained by me in order to document my progress in becoming a
        front-end developer, organize my projects and hobbies, and practice
        using create react app!
      </div>
    </div>
  );

  return (
    <Router>
      <div className="App">
        {header}
        {body}
        <div className="Content">
          <Switch>
            <Route exact path="/">
              <Objectives />
            </Route>
            <Route path="/hobbies">
              <Hobbies />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/aboutme">
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

function Objectives() {
  const objective1Resource1 = {
    url: "https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/3-terrarium/1-intro-to-html/README.md",
    label: "Intro to HTML",
  };
  const objective1Resource2 = {
    url: "https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/3-terrarium/2-intro-to-css/README.md",
    label: "Intro to CSS",
  };
  const objective1Resource3 = {
    url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
    label: "About Flex Box",
  };

  const objective1Title =
    "Build First-Draft of Content and Styling on Personal Website in Create React App";
  const objective1Body = `If you're reading this, it's likely that I've successfully
  completed this obejctive! As a programmer, I started this project
  with some very basic knowledge of java, html and css. Luckily for
  me, there is an abundance of tools, tutorials and resources that
  have allowed me to reach this goal. Not to mention, the invaluable
  guidance of a professional front-end developer who just happens to
  be my beloved partner in life. At the bottom of each update, I'll
  provide a few links to the resources that I thought were most
  intuitive and integral to acheiving the respective objective. (Try
  out the ones below!)`;
  const objective1Links = [
    objective1Resource1,
    objective1Resource2,
    objective1Resource3,
  ];

  return (
    <Objective
      title={objective1Title}
      body={objective1Body}
      links={objective1Links}
    />
  );
}

function About() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            backgroundColor: "black",
            border: "1px solid white",
            borderRadius: "18px",
            width: "70%",
          }}
        >
          <h1
            style={{
              fontFamily: "Quicksand",
              fontSize: "22px",
              color: "white",
              paddingTop: "10px",
              textAlign: "center",
            }}
          >
            In a Nutshell...
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              margin: "10px",
              paddingLeft: "20px",
              paddingRight: "20px",
              paddingBottom: "20px",
            }}
          >
            <p
              style={{
                alignContent: "left",
                paddingRight: "40px",
                fontSize: "18px",
                fontFamily: "Quicksand",
                justifyContent: "flex-start",
              }}
            >
              Hello there! I'm thrilled you've come to learn more about me. I
              love to spend time with my family, friends and precious pups. I
              spend most of my free time baking sweet treats for loved ones,
              playing competitive video games with my partner, reading thriller
              novels and programming little creative projects.
            </p>
            <img
              className="turkeyIMG"
              src={PersonalPhoto}
              alt="Me and my partner, Jake"
              style={{
                marginTop: "40px",
                justifyContent: "right",
                border: "1px solid white",
                borderRadius: "18px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "black",
        height: "100vh",
      }}
    >
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "50px",
          backgroundColor: "black",
          color: "white",
          fontFamily: "Quicksand",
        }}
      >
        Work In Progress, Check in at a Later Date for More
      </h1>
    </div>
  );
}

function Hobbies() {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "black",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {tileData.map((tile) => (
        <BakeTile img={tile.img} title={tile.title} />
      ))}
    </div>
  );
}

export default App;
