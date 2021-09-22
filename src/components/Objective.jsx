import React from 'react';
import LinkedButton from './LinkedButton';

const Objective = ({title,body,links}) => {

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "black",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              paddingBottom: "50px",
            }}
          >
            <div
              style={{
                border: "1px solid lightgrey",
                borderRadius: "18px",
                width: "70%",
              }}
            >
              <h2
                style={{
                  margin: "5px",
                  textAlign: "center",
                  fontSize: "18px",
                  fontFamily: "Quicksand",
                  color: "white",
                  padding: "20px",
                }}
              >
                Objective : {title}
              </h2>
              <p
                style={{
                  alignContent: "center",
                  fontSize: "16px",
                  color: "white",
                  textAlign: "justify",
                  margin: "20px",
                  paddingBottom: "5px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  fontFamily: "Quicksand",
                }}
              >
                {body}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  fontFamily: "Quicksand",
                  fontSize: "16px",
                  paddingBottom: "10px",
                }}
              >
                {
                    links.map(link => {
                        return ( <LinkedButton to={link.url} text={link.label} /> )
                    })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Objective;
