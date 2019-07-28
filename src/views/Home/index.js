import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.module.scss';

// components
import Header from './components/Header';
import Content from './components/Content'
import Footer from './components/Footer'

const cx = classnames.bind(styles);

function Home(props) {
  return (
    <div className={cx('home')}>
      <Header className={cx('home__header')}/>
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
