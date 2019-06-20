import React, { Component } from 'react'


export default class Layout extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <ul>
                            <li><a href="/">Главная</a></li>
                            <li><a href="/about">о нас</a></li>
                            <li><a href="/contacts">Контакты</a></li>
                        </ul>
                    </div>
                    <div className="col-8">
                        подключаемый компонент 
                    </div>
                </div>    
            </div>
            
        )
    }
}
