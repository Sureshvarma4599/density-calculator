import React, { Component } from 'react'
import Button from './button'
export default class Toolbar extends Component {
    render() {
        return (
            <div>
                <Button name="reset" buttonCallback={()=>this.props.hwv.view.resetCamera(750)}/>
            </div>
        )
    }
}
