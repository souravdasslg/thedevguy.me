import React, { Component } from "react"
import { Table, Input, Dropdown } from "semantic-ui-react";
import './ParameterComponent.css'
class ParameterComponent extends Component {
  options = [
    { key: "Query Parameter", text: "Query Parameter", value: "Query Parameter" },
    { key: "Body Parameter", text: "Body Parameter", value: "Body Parameter" }
  ]
  dropdown = (
    <Dropdown
      defaultValue="Query Parameter"
      options={this.options}
      fluid
    />
  )
  render() {
    return (
      // <Grid>
      //   <Grid.Row style={{ border: "1px solid white" }}>
      //     <Grid.Column>
            <Table celled inverted selectable compact="very" size="small" striped className="parameterTable">
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
                    <Input type="text" value="Key" fluid transparent className="parameterInput"/>
                  </Table.Cell>
                  <Table.Cell>
                  <Input type="text" value="Value" fluid transparent className="parameterInput"/>
                  </Table.Cell>
                  <Table.Cell>
                    {this.dropdown}
                  </Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    {/* <Input type="text" value="Key" fluid inverted /> */}
                    Hey
                  </Table.Cell>
                  <Table.Cell>
                    {/* <Input type="text" value="Value" fluid inverted /> */}
                    Hi
                  </Table.Cell>
                  <Table.Cell>
                    {this.dropdown}
                  </Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
      //     </Grid.Column>
      //   </Grid.Row>
      // </Grid>
    )
  }
}
export default ParameterComponent
