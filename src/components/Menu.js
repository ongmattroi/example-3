/** @format */

import React, { Component } from 'react';
import menu from './../menuTitle';
import { withTranslation } from '../../i18n';
import NextI18NextInstance from '../../i18n';
class Menu extends React.Component {
  render() {
    console.log(menu.Inbound.title);
    console.log(NextI18NextInstance);
    return (
      <div>
        <br />
        <span onClick={() => NextI18NextInstance.i18n.changeLanguage('vi')}>
          VI
        </span>
        <br />
        <span onClick={() => NextI18NextInstance.i18n.changeLanguage('en')}>
          EN
        </span>
        <br />
        <span>{this.props.t(menu.Inbound.title)}</span>
      </div>
    );
  }
}

export default withTranslation('menu')(Menu);
