import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Chessboard from "chessboardjsx";



class Chess extends Component{
  render(){
    return(
      <div style={boardsContainer}>
            <Chessboard position="start"
              width={700}
              boardStyle={boardStyle}
              orientation="white"
            />
          )}
      </div>
    );
  }
}
export default Chess

const boardsContainer = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
};
const boardStyle = {
  borderRadius: "5px",
  boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`
};
