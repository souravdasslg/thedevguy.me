import React, { Component} from 'react';
//import './RightSideComponent.css'
class RightSideComponent extends Component {
    render() {
        return (<div id="right-side">
            {this.props.children}
        </div>)
    }
}
export default RightSideComponent;