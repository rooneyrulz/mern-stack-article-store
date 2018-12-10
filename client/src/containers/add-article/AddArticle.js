import React, { Component } from 'react';
import { connect } from "react-redux";

import { addArticle } from "../../actions/articleActions";

class AddArticle extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      title: "",
      body: ""
    };
  };

  onHandleChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    const newArticle = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.addArticle(newArticle);
    this.props.history.push('/show-article');
  };

  render() {
    return (
      <div className="Add-article">
        <div className="container mt-4">
          <h1>Add Article</h1>
          <div className="card mt-5 p-4">
            <div className="card-body">
              <form onSubmit={this.onHandleSubmit.bind(this)} >
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input id="title" onChange={this.onHandleChange.bind(this)} type="text" className="form-control" name="title" placeholder="Enter Article Title.."/>
                </div>
                <div className="form-group">
                  <label htmlFor="body">Body</label>
                  <input id="body" onChange={this.onHandleChange.bind(this)} type="text" className="form-control" name="body" placeholder="Enter Article Body.."/>
                </div>
                <button type="submit" className="btn btn-primary">ADD ARTICLE</button>
              </form>
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

export default connect(mapStateToProps, { addArticle }) (AddArticle);