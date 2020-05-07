import React from 'react';
import Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd';

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
      <DndProvider backend={Backend}>
        <Header className={cx('home__header')}/>
        <Content />
        <Footer />
      </DndProvider>
    </div>
  );
}

export default Home;
