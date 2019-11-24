import React, { Component } from "react"
import ReactJson from "react-json-view"
import "./ResponseContent.css"
import { connect } from "react-redux"
import { Grid } from "semantic-ui-react"
class ResponseComponent extends Component {
  state = {
    predefinedResponse: {
      "/about/me": {
        name: "Sourav Das",
        designation: "Full Stack Developer",
        workExperience: "2.5 Years"
      },
      "/my/projects":{
        project1: {
          name: 'Snake Game',
          urlToVisit:'https://souravdasslg.github.io'
        }
      },
      "/experience":{
        experience1:"Sample Experience"
      },
      "/contact/me": {
        email:'souravdasslg95@gmail.com',
        linkedIn:`https://www.linkedin.com/in/souravdasslg`
      }
    }
  }
  render() {
    const { predefinedResponse } = this.state
    const { selectedUrl } = this.props
    return (
      <Grid>
        <Grid.Row style={{ border: "1px solid white", marginTop: "1px" }}>
          <Grid.Column>
            <ReactJson
              src={
                predefinedResponse[selectedUrl]
                  ? predefinedResponse[selectedUrl]
                  : {}
              }
              theme="hopscotch"
              style={{
                overflowY: "auto",
                maxHeight: "73vh",
                minHeight: "73vh",
                scrollbarColor: "light"
              }}
            ></ReactJson>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
const mapStateToProps = state => {
  return { selectedUrl: state.currentUrl }
}
export default connect(mapStateToProps)(ResponseComponent)
