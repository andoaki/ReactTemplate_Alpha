import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'
import classnames from 'classnames';
import FwMenuListItem from './FwMenuListItem'

const GOOGLE_URL =
  'http://www.google.co.jp'
const menuItems = [
  { text: '登録画面',           link: '/gamen1',  icon: 'fa fa-star' },
  { text: 'サーバアクセス画面', link: '/gamen2',  icon: 'fa fa-star' },
  { text: 'お絵かき画面',       link: '/gamen3',  icon: 'fa fa-dot-circle-o' },
  { text: '結果報告画面', link: '/gamen4',  icon: 'fa fa-star' },
  { text: 'Google',             link: GOOGLE_URL, icon: 'fa fa-github', isExternal: true },
  { text: 'ログアウト',         link: '/',        icon: 'fa fa-user' },
]

class Menu extends Component {
  render () {
    return (
        <div id="menu" ref="menu" className={this.props.activeClass}>
          <div className="pure-menu">
            <Link to="/top" className="pure-menu-heading">トップ画面</Link>
            <ul className="pure-menu-list">
              {menuItems.map((item, i) => <FwMenuListItem {...item} key={i} />)}
            </ul>
          </div>
        </div>
      
    )
  }
}


Menu.propTypes = {
    activeClass: PropTypes.string
};

export default Menu;