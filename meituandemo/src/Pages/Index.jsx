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
                    <Route path='/index/home' component={Home}></Route>
                    <Route path='/index/order' component={Order}></Route>
                    <Route path='/index/mime' component={Mime}></Route>
                </Switch>
                <footer>
                    <NavLink to='/index/home' activeClassName='select'>首页</NavLink>
                    <NavLink to='/index/order' activeClassName='select'>订单</NavLink>
                    <NavLink to='/index/mime' activeClassName='select'>我的</NavLink>
                </footer>
            </div>
        )
    }
}
