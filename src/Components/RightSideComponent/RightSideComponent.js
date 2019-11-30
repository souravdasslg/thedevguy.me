import React, { Component } from "react"
import { Grid, Button } from "semantic-ui-react"
import URLInputComponent from "../URLInputComponent/URLInputComponent"
import ParameterComponent from "../ParameterComponent/ParameterComponent"
import ResponseComponent from "../ResponseComponent/ResponseComponent"
//import './RightSideComponent.css'
class RightSideComponent extends Component {
  render() {
    return (
      <Grid> 
        <Grid.Row>
          <Grid.Column width={16} style={{ minHeight: "10px" }}></Grid.Column>
        </Grid.Row>
        {/* <Grid.Row>
          <Grid.Column mobile={16} widescreen={16} largeScreen={16} tablet={16} computer={16}>
            <URLInputComponent />
          </Grid.Column>
          <Grid.Column mobile={4} widescreen={1} largeScreen={1} tablet={3} computer={3}>
            <Button color="orange">SEND</Button>
          </Grid.Column>
        </Grid.Row> */}
        <Grid.Row>
          <Grid.Column>
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
export default RightSideComponent
