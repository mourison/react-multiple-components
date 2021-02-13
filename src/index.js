import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
  return (
      <div className="ui container comments">
        <div className="comment">
          <a href="/" className="avatar">
            <img alt="avatar" src='https://source.unsplash.com/random'/>
          </a>
          <div className="content">
            <a href="/" className="author">
              Sam
            </a>
            <div className="metadata">
              <span className="date">Today at 6:00PM</span>
            </div>
            <div className="text">Nice blog Post</div>
          </div>
        </div>
      </div>
  );
};

ReactDom.render(<App/>, document.querySelector('#root'));