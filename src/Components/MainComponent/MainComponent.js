import React,{Component,Fragment} from 'react';
//import './MainComponent.css';
import LeftSideComponent from '../LeftSideComponent/LeftSideComponent';
import RightSideComponent from '../RightSideComponent/RightSideComponent'
import { Grid } from 'semantic-ui-react';
class MainComponent extends Component {
    render() {
        return (
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column color="blue" width={4}>
                        <LeftSideComponent />
                    </Grid.Column>
                    <Grid.Column color="green" width={12}>
                        <RightSideComponent />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
export default MainComponent;