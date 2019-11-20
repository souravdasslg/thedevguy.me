import React, { Component} from 'react';
import { Grid } from 'semantic-ui-react';
import URLInputComponent from '../URLInputComponent/URLInputComponent'
import ParameterComponent from '../ParameterComponent/ParameterComponent';
import ResponseComponent from '../ResponseComponent/ResponseComponent';
//import './RightSideComponent.css'
class RightSideComponent extends Component {
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column color="grey">
                        <URLInputComponent />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column color="">
                            <ParameterComponent />
                        </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <ResponseComponent />
                                </Grid.Column>
                        </Grid.Row>
            </Grid>
        )
    }
}
export default RightSideComponent;