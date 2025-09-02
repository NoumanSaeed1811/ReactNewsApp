import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export class App extends Component {
  pageSize = 15
  country = "us"
  render() {
    return (
      <Router>
        <div>
          <NavBar />
           <Routes>
            <Route exact path="/" element={<News key="general" country={this.country} category="general" pageSize={this.pageSize} />} />
            <Route exact path="/science" element={<News key="science" country={this.country} category="science" pageSize={this.pageSize} />} />
            <Route exact path="/business" element={<News key="business" country={this.country} category="business" pageSize={this.pageSize} />} />
            <Route exact path="/entertainment" element={<News key="entertainment" country={this.country} category="entertainment" pageSize={this.pageSize} />} />
            <Route exact path="/general" element={<News key="general" country={this.country} category="general" pageSize={this.pageSize} />} />
            <Route exact path="/health" element={<News key="health" country={this.country} category="health" pageSize={this.pageSize} />} />
            <Route exact path="/sports" element={<News key="sports" country={this.country} category="sports" pageSize={this.pageSize} />} />
            <Route exact path="/technology" element={<News key="technology" country={this.country} category="technology" pageSize={this.pageSize} />} />
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App

