import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Home from '../component/Home.js'
class Index extends Component {
    render() {
        return (
            <div className="RouterName">
                <BrowserRouter>
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Redirect from='/' to='/home' />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
export default Index