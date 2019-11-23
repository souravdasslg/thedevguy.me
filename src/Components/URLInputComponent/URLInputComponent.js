import React, { Component } from "react"
import { Grid, Input, Dropdown } from "semantic-ui-react"
class URLInputComponent extends Component {
  options = [
    { key: ".com", text: ".com", value: ".com" },
    { key: ".net", text: ".net", value: ".net" },
    { key: ".org", text: ".org", value: ".org" }
  ]
  dropdown = <Dropdown defaultValue=".com" options={this.options} style={{background: "black",color: "white",border: "1px solid white"}}/>
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Input
              label={this.dropdown}
              labelPosition="left"
              placeholder="thedevguy.me"
              fluid
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
export default URLInputComponent
