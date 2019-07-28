import React from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

const cx = classnames.bind(styles);

export const propTypes = {
  className: PropTypes.string,
  htmlType: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
};

export const defaultProps = {
  htmlType: 'button',
  type: 'default',
  size: 'xs'
}


function Button(props) {
  const { htmlType, type, size, className, ...restProps } = props

  return <button className={cx('button', className)} data-type={type} data-size={size} type={htmlType} {...restProps}  />;
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button;
