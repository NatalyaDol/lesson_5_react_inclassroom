import React, { Component } from 'react'

export default class Contacts extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Контакты</h1>
                <p>email: sldfjsj@lxjdfl.ru</p>
                <p>telephone: +7 989 666 66 66</p>
                <p>Номер офиса: {this.props.params.number}</p>
            </div>
        )
    }
}
