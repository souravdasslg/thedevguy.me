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
          <Grid.Column width={12} style={{ minHeight: "10px" }}></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={15}>
            <URLInputComponent />
          </Grid.Column>
          <Grid.Column width={1}>
            <Button color="orange"> GET </Button>
          </Grid.Column>
        </Grid.Row>
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
