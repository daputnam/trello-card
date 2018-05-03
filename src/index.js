import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import "./index.css";

const TrelloItem = (props) => {
  return (
    <div className="item">{props.item}</div>
  );
};
TrelloItem.propTypes = {
  item: PropTypes.string
}

const TrelloCard = ({card}) => (
    <div className="trello-card">
    <h1>{card.title}</h1>
      {card.items.map(item => (
        <TrelloItem item={item}/>
      ))}
      <div className="add-button">Add Card...</div>
    </div>
);
TrelloCard.propTypes = {
  files: PropTypes.array
};

const card = {
    title: "Phone Features",
    items: [
      "subwoofer",
      "non-pourous",
      "Wings",
      "Seedless"
    ]
  }
// const cards = [
//   {
//     title: "Phone Features",
//     items: [
//       "subwoofer",
//       "non-pourous",
//       "Wings",
//       "Seedless"
//     ]
//   },
//   {
//     title: "Plane Features",
//     items: [
//       "Large",
//       "Passengers pourous",
//       "Many windows",
//       "sleek",
//       "Fast"
//     ]
//   }
// ];

ReactDOM.render(<TrelloCard card={card}/>, document.getElementById('root'));

