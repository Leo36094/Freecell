import React from 'react'
import PropTypes from 'prop-types'

import { useDrag } from 'react-dnd'

import classnames from 'classnames/bind'
import styles from './style.module.scss'

const propTypes = {
  className: PropTypes.string,
  cardNumber: PropTypes.number,
}

const cx = classnames.bind(styles)

const getCardType = (cardNumber) => {
  if (cardNumber <= 13) {
    return 'club'
  } else if (cardNumber > 13 && cardNumber <= 26) {
    return 'diamond'
  } else if (cardNumber > 26 && cardNumber <= 39) {
    return 'heart'
  } else return 'spade'
}

function Card(props) {
  const { className, cardNumber } = props
  const [{ opacity }, drag] = useDrag({
    item: {
      id: cardNumber,
      type: 'card',
      name: getCardType(cardNumber),
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  })
  return (
    <div
      style={{ opacity }}
      className={cx('card', `card--${cardNumber}`, className)}
      ref={drag}
    />
  )
}

Card.propTypes = propTypes
export default Card
