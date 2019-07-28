import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.module.scss';

// components
import Card from '../../../../components/Card';

const cx = classnames.bind(styles);

// variables / functions
const allCards = [...new Array(52)].map((_, index) => index + 1);
// Create 8 columns with array to preserve space for cards.
const columns = [];
for (let i = 0; i < 8; i++) {
  columns.push([]);
}

const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const shuffledCards = shuffle(allCards);

const columnWithCards = columns.map((column, index) => {
  if (index < 4) {
    column = [...column, ...shuffledCards.slice(7 * index, 7 * (index + 1))];
  } else
    column = [...column, ...shuffledCards.slice(6 * index, 6 * (index + 1))];
  return column;
});

// * Function below is testing for shuffledCards

// const hashTable = {}
// shuffledCards.forEach(item => {
//   if(!hashTable[item]) hashTable[item] = 0
//   hashTable[item] ++
// })
// console.log(hashTable)

function Content(props) {
  return (
    <div className={cx('content')}>
      {columnWithCards.map((column, index) => (
        <div className={cx('content__columns')} key={`${column}column`}>
          {column.map((card, index) => (
            <Card
              className={cx('content__cards')}
              key={card}
              cardNumber={card}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Content;
