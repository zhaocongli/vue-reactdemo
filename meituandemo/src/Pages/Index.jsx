import React, { Component } from 'react'
import {Switch,Route,NavLink} from 'react-router-dom'
import '../static/css/index.css';

import Home from './Home'
import Order from './Order'
import Mime from './Mime'
export default class Index extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/order' component={Order}></Route>
                    <Route path='/mime' component={Mime}></Route>
                </Switch>
                <footer>
                    <NavLink to='/home' activeClassName='select'>首页</NavLink>
                    <NavLink to='/order' activeClassName='select'>订单</NavLink>
                    <NavLink to='/mime' activeClassName='select'>我的</NavLink>
                </footer>
            </div>
        )
    }
}
