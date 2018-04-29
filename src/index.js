import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import "./index.css";

const TrelloCard = () => (
    <div className="trello-card">
      Card Here
      {/* {files.map(file => (
        <FileListItem key={file.id} file={file}/>
      ))} */}
    </div>
);
TrelloCard.propTypes = {
  files: PropTypes.array
};


ReactDOM.render(<TrelloCard />, document.getElementById('root'));

