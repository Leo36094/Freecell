import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './style.module.scss';

const propTypes = {
  className: PropTypes.string,
  cardNumber: PropTypes.number
};

const cx = classnames.bind(styles);

function Card(props) {
  const { className, cardNumber } = props;
  return (
    <div className={cx('card', `card--${cardNumber}` , className)}></div>
  );
}

Card.propTypes = propTypes;
export default Card;
