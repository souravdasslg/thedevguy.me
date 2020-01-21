import React, { Component } from "react";
import "./MainComponent.css";
import LeftSideComponent from "../LeftSideComponent/LeftSideComponent";
import RightSideComponent from "../RightSideComponent/RightSideComponent";
import { Grid, Icon } from "semantic-ui-react";
class MainComponent extends Component {
  render() {
    return (
      <Grid padded stackable>
        <Grid.Row className="header-gradient">
          <Grid.Column width={16}>
            <h3> Sourav Das</h3>
            <span className="socialIcons">
              <Icon
                name="facebook f"
                color="orange"
                size="large"
                onClick={() =>
                  window.open("https://www.facebook.com/theThinkTanker")
                }
              />
              <Icon
                name="slack"
                color="orange"
                size="large"
                onClick={() => window.open("https://souravco.slack.com/")}
              />
              <Icon
                name="twitter"
                color="orange"
                size="large"
                onClick={() =>
                  window.open("https://twitter.com/theThinkTankerr")
                }
              />
              <Icon
                name="medium"
                color="orange"
                size="large"
                onClick={() => window.open("https://medium.com/@lifeographist")}
              />
            </span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column color="black" width={4} only="desktop">
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
