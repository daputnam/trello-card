import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import "./index.css";

const TrelloItem = ({item}) => {
  return (
    <div>item 1</div>
  );
};

const TrelloCard = () => (
    <div className="trello-card">
      Card Title
      Items
      <TrelloItem />
      Add Card...

      {/* {files.map(file => (
        <FileListItem key={file.id} file={file}/>
      ))} */}
    </div>
);
TrelloCard.propTypes = {
  files: PropTypes.array
};

const cards = [
  {
    title: "Phone Features",
    items: [
      "subwoofer",
      "non-pourous",
      "Wings",
      "Seedless"
    ]
  },
  {
    title: "Plane Features",
    items: [
      "Large",
      "Passengers pourous",
      "Many windows",
      "sleek",
      "Fast"
    ]
  }
];

ReactDOM.render(<TrelloCard />, document.getElementById('root'));

