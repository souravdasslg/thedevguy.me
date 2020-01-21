import React, { Component } from "react";
//import './LeftSideComponent.css'
import HistoryComponent from "../HistoryComponent/HistoryComponent";
import { Grid } from "semantic-ui-react";
import HistoryButtons from "../HistoryButtons/HistoryButtonComponent";
class LeftSideComponent extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row></Grid.Row>
        <Grid.Row>
          <Grid.Column
            width={16}
            color="black"
            style={{
              marginTop: ".1em"
            }}
          >
            <HistoryComponent />
            <HistoryButtons />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
export default LeftSideComponent;
