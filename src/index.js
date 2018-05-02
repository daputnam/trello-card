import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import "./index.css";

const TrelloItem = (props) => {
  return (
    <div>> {props.item}</div>
  );
};
TrelloItem.propTypes = {
  item: PropTypes.string
}

const TrelloCard = ({card}) => (
    <div className="trello-card">
    {card.title}
      {card.items.map(item => (
        <TrelloItem item={item}/>
      ))}
      Add Card...
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

