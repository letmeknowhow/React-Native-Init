/**
 *  Class: Drawer
 *  Author: Niu Xiaoyu
 *  Date: 16/5/31.
 *  Description:
 */
import React, { Component } from 'react';

import Sidemenu from 'react-native-side-menu';
import {DefaultRenderer} from 'react-native-router-flux';
import MenuContent from './ConfigMenu';
import {observer} from 'mobx-react/native';

@observer
export default class Drawer extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
    this.updateMenuState.bind(this);
  }

  render() {
    const store = this.props.sceneStore.sidemenu;
    const children = this.props.navigationState.children;
    return (
      <Sidemenu
        menu={<MenuContent />}
        isOpen={store.isOpen}
        menuPosition="right"
        onChange={(isOpen) => {this.updateMenuState(isOpen);}}>
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Sidemenu>
    );
  }

  updateMenuState(isOpen) {
    this.props.sceneStore.sidemenu.switchSidemenu(isOpen);
  }
}