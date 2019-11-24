import React, { Component } from "react"
import { Table, Grid, Input, Dropdown } from "semantic-ui-react"
class ParameterComponent extends Component {
  options = [
    { key: ".com", text: ".com", value: ".com" },
    { key: ".net", text: ".net", value: ".net" },
    { key: ".org", text: ".org", value: ".org" }
  ]
  dropdown = (
    <Dropdown
      defaultValue=".com"
      options={this.options}
      fluid
    />
  )
  render() {
    return (
      <Grid>
        <Grid.Row style={{ border: "1px solid white" }}>
          <Grid.Column>
            <Table celled inverted selectable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Key</Table.HeaderCell>
                  <Table.HeaderCell>Value</Table.HeaderCell>
                  <Table.HeaderCell>Type</Table.HeaderCell>
                  <Table.HeaderCell>Description</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Input type="text" value="Key" fluid inverted />
                  </Table.Cell>
                  <Table.Cell>
                    <Input type="text" value="Value" fluid inverted />
                  </Table.Cell>
                  <Table.Cell>
                    {this.dropdown}
                  </Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
export default ParameterComponent
