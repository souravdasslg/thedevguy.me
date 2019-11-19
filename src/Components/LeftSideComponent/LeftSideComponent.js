import React,{Component} from 'react';
//import './LeftSideComponent.css'
import HistoryComponent from '../HistoryComponent/HistoryComponent';
class LeftSideComponent extends Component {
    render() {
        return (
            <div id="left-side">
                {this.props.children}
                </div>
        )
    }
}
export default LeftSideComponent