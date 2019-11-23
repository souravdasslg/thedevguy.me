import React,{Component} from 'react';
//import './LeftSideComponent.css'
import HistoryComponent from '../HistoryComponent/HistoryComponent';
import { Grid } from 'semantic-ui-react';
class LeftSideComponent extends Component {
    render() {
        return (
            <Grid>
                <Grid.Row>
                    </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16} color="black" style={{border: 'solid 1px white',minHeight:'40vh'}}>
                        <HistoryComponent />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16} color="black" style={{border: 'solid 1px white',minHeight:'60vh',marginTop:'.1em'}}>
                        <HistoryComponent />
                            </Grid.Column>
                    </Grid.Row>
            </Grid>
        )
    }
}
export default LeftSideComponent