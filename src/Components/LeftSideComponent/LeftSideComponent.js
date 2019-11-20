import React,{Component} from 'react';
//import './LeftSideComponent.css'
import HistoryComponent from '../HistoryComponent/HistoryComponent';
import { Grid } from 'semantic-ui-react';
class LeftSideComponent extends Component {
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={16} color="pink">
                        <HistoryComponent />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                        <HistoryComponent />
                            </Grid.Column>
                    </Grid.Row>
            </Grid>
        )
    }
}
export default LeftSideComponent