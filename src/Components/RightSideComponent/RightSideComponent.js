import React, { Component } from "react"
import { Grid, Button, Dropdown } from "semantic-ui-react"
import URLInputComponent from "../URLInputComponent/URLInputComponent"
import ParameterComponent from "../ParameterComponent/ParameterComponent"
import ResponseComponent from "../ResponseComponent/ResponseComponent"
//import './RightSideComponent.css'
class RightSideComponent extends Component {
    options = [
        { key: 1, text: 'Choice 1', value: 1 },
        { key: 2, text: 'Choice 2', value: 2 },
        { key: 3, text: 'Choice 3', value: 3 },
      ]
  render() {
    return (
      <Grid>
        <Grid.Row>
            <Grid.Column width={4}>
            <Dropdown text='Dropdown' options={this.options} simple item />
            </Grid.Column>
          <Grid.Column color="grey" width={10}>
            <URLInputComponent />
          </Grid.Column>
          <Grid.Column width={2}>
              <Button color="green"> GET </Button>
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
export default RightSideComponent
