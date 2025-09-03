import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import LoadingBar from "react-top-loading-bar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export class App extends Component {
  pageSize = 15
  country = "us"
  apiKey = process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress : progress})

  }
  render() {
    return (
      <Router>
        <div>
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key="home" apiKey={this.apiKey} country={this.country} category="general" pageSize={this.pageSize} />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" apiKey={this.apiKey} country={this.country} category="science" pageSize={this.pageSize} />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" apiKey={this.apiKey} country={this.country} category="business" pageSize={this.pageSize} />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" apiKey={this.apiKey} country={this.country} category="entertainment" pageSize={this.pageSize} />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" apiKey={this.apiKey} country={this.country} category="general" pageSize={this.pageSize} />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" apiKey={this.apiKey} country={this.country} category="health" pageSize={this.pageSize} />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" apiKey={this.apiKey} country={this.country} category="sports" pageSize={this.pageSize} />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" apiKey={this.apiKey} country={this.country} category="technology" pageSize={this.pageSize} />} />
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App

