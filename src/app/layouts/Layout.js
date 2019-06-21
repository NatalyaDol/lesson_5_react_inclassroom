import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Layout extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <ul>
                            <li><Link to="/">Главная</Link></li>
                            <li><Link to="/about">о нас</Link></li>
                            <li><Link to="/contacts">Контакты</Link></li>
                            <li><Link to="/contacts/5">Контакты number 5</Link></li>
                            <li><Link to="/contajhkhkjhcts">No page</Link></li>
                        </ul>
                    </div>
                    <div className="col-8">
                        {this.props.children}
                    </div>
                </div>    
            </div>
            
        )
    }
}
