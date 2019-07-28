import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classNames.bind(styles);

export const propTypes = {
  className: PropTypes.string,
}

function Header(props) {
  const {className} = props
  return (
    <div className={cx('header', className)}>
      <div className={cx('header__left')}>
        <div className={cx('header__card', 'header__card--empty')} />
        <div className={cx('header__card', 'header__card--empty')} />
        <div className={cx('header__card', 'header__card--empty')} />
        <div className={cx('header__card', 'header__card--empty')} />
      </div>
      <div className={cx('header__icon')}>
        <img
          src={require('../../../../assets/king_happy.png')}
          alt="king-icon"
        />
        <span>FREECELL</span>
      </div>

      <div className={cx('header__right')}>
        <div className={cx('header__card')}>
          <img
            className={cx('header__card--icon')}
            src={require('../../../../assets/S.png')}
            alt="spade"
          />
        </div>

        <div className={cx('header__card')}>
          <img
            className={cx('header__card--icon')}
            src={require('../../../../assets/H.png')}
            alt="heart"
          />
        </div>

        <div className={cx('header__card')}>
          <img
            className={cx('header__card--icon')}
            src={require('../../../../assets/D.png')}
            alt="diamond"
          />
        </div>

        <div className={cx('header__card')}>
          <img
            className={cx('header__card--icon')}
            src={require('../../../../assets/C.png')}
            alt="club"
          />
        </div>
      </div>
    </div>
  );
}

Header.propTypes = propTypes

export default Header;
