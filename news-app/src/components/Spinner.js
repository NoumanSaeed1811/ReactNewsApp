import React, { Component } from 'react'
import loadingSpinner from './loadingSpinner.gif'

export class Spinner extends Component {
  render() {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}>
        <img src={loadingSpinner} alt="loading" />
      </div>
    )
  }
}

export default Spinner
