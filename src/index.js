import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail author="George" timeAgo="Today at 5:00PM" content="Nice blog from George" avatar ="https://source.unsplash.com/random"/>
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail author="Nikos" timeAgo="Today at 5:00PM" content="Nice blog from George" avatar ="https://source.unsplash.com/random"/>
        </ApprovalCard>
        <ApprovalCard>
            <div>
                <h4>Warning!</h4>
                Are you sure that you want to do this?
            </div>
        </ApprovalCard>
      </div>
  );
};

ReactDom.render(<App/>, document.querySelector('#root'));