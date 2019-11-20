import React,{Component} from 'react';
import { Grid, Input } from 'semantic-ui-react';
class URLInputComponent extends Component {
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Input fluid/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        )
    }
}
export default URLInputComponent