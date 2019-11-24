import React, { Component } from "react"
import { Grid, Input, Dropdown } from "semantic-ui-react"
class URLInputComponent extends Component {
  options = [
    { key: "GET", text: "GET", value: "GET" },
    { key: "POST", text: "POST", value: "POST" },
    { key: "PUT", text: "PUT", value: "PUT" },
    { key: "PATCH", text: "PATCH", value: "PATCH" },
    { key: "DELETE", text: "DELETE", value: "DELETE" }
  ]
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Input
              label={<Dropdown search defaultValue="GET" options={this.options} />}
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
