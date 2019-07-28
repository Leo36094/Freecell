import React from 'react'
import classnames from 'classnames/bind'
import styles from './style.module.scss'

import Button from '../../../../components/Button'

const cx = classnames.bind(styles)

function Footer (props) {
  return (
    <div className={cx("footer")}>
      <div className={cx("footer__left")}>
        <div className={cx("footer__icon")}>
          <img src={require('../../../../assets/info.svg')} width='20' height='20' alt="icon"/>
        </div>
        <span className={cx("footer__text")}>TIME: 00:00</span>
        <span className={cx("footer__text")}>SCORE: 0</span>
      </div>
      <div className={cx("footer__right")}>
        <Button className={cx('footer__button')}>NEW GAME</Button>
        <Button className={cx('footer__button')}>RESTART</Button>
        <Button className={cx('footer__button')}>HINT</Button>
        <Button className={cx('footer__button')}>UNDO</Button>
      </div>
    </div>
  )
}

export default Footer