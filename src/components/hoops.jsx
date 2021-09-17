import React, { Component } from 'react'
import ViewerManager from '../viewerManager';
import Toolbar from './Toolbar';
export default class Hoops extends Component {
    constructor() {
        super();
        this.state = {
            hwvInstantiated: false
        }
        this._hwv = undefined;
        this._viewerManager = new ViewerManager();

    }
    componentDidMount() {
        this._hwv = this._viewerManager.createViewer("canvas");
        this.setState({
            hwvInstantiated: true
        })
    }
    render() {
        let viewerDependentTools;
        if(this.state.hwvInstantiated){
            viewerDependentTools =
            <div id="vdt">
                   <Toolbar hwv={this._hwv}/>
            </div>
        }
        return (
            <div id="hoops-container">
                 <div id="canvas">
                    {viewerDependentTools}
                 </div>
            </div>
        )
    }
}
