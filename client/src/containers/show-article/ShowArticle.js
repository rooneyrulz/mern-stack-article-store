import React, { Component } from 'react';
import { connect } from "react-redux";

import { getArticles, deleteArticle } from "../../actions/articleActions";
import "./ShowArticle.css";

class ShowArticle extends Component {

  componentDidMount() {
    this.props.getArticles();
  };

  onHandleDelete = (id) => {
    //console.log(`Clicked!`);
    this.props.deleteArticle(id);
  };

  render() {
    let { articles } = this.props.article;
    //console.log(articles);
    let articleList = articles.length ? (
      articles.map(article => {
        return (
          <div className="card bg-danger mb-3" key={ article._id }>
            <span onClick={this.onHandleDelete.bind(this, article._id)} className="card-close close">&times;</span>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Title</strong>
                  <span className="float-right">{article.title}</span>
                </li>
                <li className="list-group-item">
                  <strong>Body</strong>
                  <span className="float-right">{article.body}</span>
                </li>
                <li className="list-group-item">
                  <strong>Id</strong>
                  <span className="float-right">{article._id}</span>
                </li>
              </ul>
            </div>
          </div>
        );
      })
    ) : (
      <div className="card p-4">
        <h4>No Articles Found...</h4>
      </div>
    )
    return (
      <div className="Show-article">
        <div className="container mt-4">
          <h1 className="text-danger">Show Articles</h1>
          <br/><br/>
          <div className="row">
            <div className="col col-sm-12">
              { articleList }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    article: state.articleReducer
  };
};


export default connect( mapStateToProps, { getArticles, deleteArticle } ) (ShowArticle);