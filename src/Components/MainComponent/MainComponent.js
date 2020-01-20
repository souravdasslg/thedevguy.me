import React, { Component } from "react";
import "./MainComponent.css";
import LeftSideComponent from "../LeftSideComponent/LeftSideComponent";
import RightSideComponent from "../RightSideComponent/RightSideComponent";
import { Grid } from "semantic-ui-react";
class MainComponent extends Component {
  render() {
    return (
      <Grid padded stackable>
        <Grid.Row className="header-gradient">
          <Grid.Column width={16}>
            <h1> Sourav Das</h1>
            <p> Full Stack Developer </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column color="black" width={4}>
            <LeftSideComponent />
          </Grid.Column>
          <Grid.Column color="black" width={12}>
            <RightSideComponent />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
export default MainComponent;
