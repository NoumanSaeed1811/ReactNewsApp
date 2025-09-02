import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title,desc,imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div className="container my-3">
        <div className="card" style={{width:"18rem"}}>
          <img src={imageUrl} className="card-img-top" alt="/" style={{height: "150px", objectFit: "cover" }}  />
          <div className="card-body">
            <h5 className="card-title">{title}...
               <span class="badge badge-secondary">{source}</span>
            </h5>
            <p className="card-text">{desc}...
            </p>
            <p class="card-text"><small className="text-muted">By {author?author:"unknown"} at {new Date (date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
      
    );
  }
}

export default NewsItem;
