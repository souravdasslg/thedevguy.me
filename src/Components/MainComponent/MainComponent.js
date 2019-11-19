import React,{Component,Fragment} from 'react';
//import './MainComponent.css';
import LeftSideComponent from '../LeftSideComponent/LeftSideComponent';
import RightSideComponent from '../RightSideComponent/RightSideComponent'
class MainComponent extends Component {
    render() {
        return (
            <Fragment>
            <LeftSideComponent>
                <div id="bookmarked-request">
                    Bookmarked Requests
                </div>
                <div id="request-history">
                    Requested History
                </div>
            </LeftSideComponent>
            <RightSideComponent>
                <div id="method-button">
                    Method Button
                    </div>
                <div id="url">
                    URL Div
                    </div>
                <div id="get-response-button">
                    Response Button
                </div>
                <div id="parameter-container">
                    Parameter Container
                </div>
                <div id="response-container">
                    Response Container
                    </div>
                </RightSideComponent>
            </Fragment>
        )
    }
}
export default MainComponent;