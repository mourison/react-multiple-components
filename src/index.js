import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
      <div className="ui container comments">
        <CommentDetail author="George" timeAgo="Today at 5:00PM" content="Nice blog from George" avatar ="https://source.unsplash.com/random"/>
        <CommentDetail author="Nikos" timeAgo="Today at 5:00PM" content="Nice blog from George" avatar ="https://source.unsplash.com/random"/>
      </div>
  );
};

ReactDom.render(<App/>, document.querySelector('#root'));