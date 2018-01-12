import React from 'react';
import {connect} from "react-redux";
import './reset.css';
import './style.css';

const cn = require('bem-cn')('main-layout');

class Main extends React.Component {
  render() {
    return <div className={`${cn}`}>
        <div className={`${cn('bar')}`}>
          <h1 className={`${cn('bar-title')}`}><span className={`${cn('bar-title--bold')}`}>Test</span> you skill</h1>
        </div>
        {this.props.children}
    </div>
  }
}

export default connect(state => ({state}))(Main)
