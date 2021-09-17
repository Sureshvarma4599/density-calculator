import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <div>
                <button id={`${this.props.name}-button`} onClick={this.props.buttonCallback}>
                    {this.props.name}
                </button>
            </div>
        )
    }
}
