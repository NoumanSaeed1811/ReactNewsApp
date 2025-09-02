import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
           <Routes>
            <Route exact path="/" element={<News key="general" country="us" category="general" pageSize={10} />} />
            <Route exact path="/science" element={<News key="science" country="us" category="science" pageSize={10} />} />
            <Route exact path="/business" element={<News key="business" country="us" category="business" pageSize={10} />} />
            <Route exact path="/entertainment" element={<News key="entertainment" country="us" category="entertainment" pageSize={10} />} />
            <Route exact path="/general" element={<News key="general" country="us" category="general" pageSize={10} />} />
            <Route exact path="/health" element={<News key="health" country="us" category="health" pageSize={10} />} />
            <Route exact path="/sports" element={<News key="sports" country="us" category="sports" pageSize={10} />} />
            <Route exact path="/technology" element={<News key="technology" country="us" category="technology" pageSize={10} />} />
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App

