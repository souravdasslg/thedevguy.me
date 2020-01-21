import React, { Component } from "react";
import ReactJson from "react-json-view";
import "./ResponseContent.css";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
class ResponseComponent extends Component {
  state = {
    predefinedResponse: {
      "/about/me": {
        name: "Sourav Das",
        designation: "Full Stack Developer",
        aboutMe: `I am a full-stack Web Application Developer and Software Developer.
        Currently living in Delhi, India.
        My primary focus and inspiration for my studies is Web Development.
        In my free time, I watch Kid Vs. Cat.
        I am both driven and self-motivated, and I am constantly experimenting with new technologies and techniques.
        I am very passionate about Web Development, and strive to better myself as a developer.`,
        workExperience: "2.5 Years"
      },
      "/projects": [
        {
          "React Based Snake Game": {
            technologies: ["React", "HTML5", "CANVAS API"],
            about: `My very first React based Application.HTML5 and Canvas plays major roles in this application.
          The game is playable using keyboard. I'll make this mobile compatible :)`,
            urlToVisit: "https://souravdasslg.github.io"
          }
        },
        {
          Talk2Me: {
            technologies: ["WebRTC", "React", "GraphQL", "Socket.io"],
            about: `A definitely brave attempt to make complete WebRTC based E2E video conferencing tool.
        It also supports file WebRTC based file sharing system.The project is unfortunately offline.`
          }
        }
      ],
      "/experience": [
        {
          position: "Backend Developer",
          organization: "edWisor.com",
          servingPeriod: "April 2019 – September 2019",
          contribution: [
            ". Making sure all engineering resources are on track to handle the growing business requirement. As a growing startup, we started to onboard thousands of users every day. I made sure, it is safe and stable.",
            "Mentoring teammates on application architecture design, resource management, leadership and so on."
          ]
        },

        {
          position: "Backend Developer",
          organization: "edWisor.com",
          servingPeriod: "Aug 2017 – Mar 2019",
          contribution: [
            "Maintain high-availability while architecture was busy serving 30 million+ requests per day",
            "Creating a blueprint of product architecture by understanding the business operation.",
            "Drafting a development plan for the team to meet quality within the given deadline with excellent resource planning.",
            "Developed E2E code building pipelines to save man-hours on testing and deployment.",
            "etting up state-of-art DevOps architecture with the latest tools and technology like Kubernetes, Helm, Gitlab CI."
          ]
        },
        {
          position: "Backend Developer (Intern)",
          organization: "edWisor.com",
          servingPeriod: "Jun 2017 - Aug 2017",
          contribution: [
            "Splitting up a giant monolithic architecture into node.js based microservices.",
            "Development of CRM for the inside sales team."
          ]
        }
      ],
      "/exp/edw/1": {
        position: "Backend Developer (Intern)",
        organization: "edWisor.com",
        servingPeriod: "Jun 2017 - Aug 2017",
        contribution: [
          "Splitting up a giant monolithic architecture into node.js based microservices.",
          "Development of CRM for the inside sales team."
        ]
      },
      "/exp/edw/2": {
        position: "Backend Developer",
        organization: "edWisor.com",
        servingPeriod: "Aug 2017 – Mar 2019",
        contribution: [
          "Maintain high-availability while architecture was busy serving 30 million+ requests per day",
          "Creating a blueprint of product architecture by understanding the business operation.",
          "Drafting a development plan for the team to meet quality within the given deadline with excellent resource planning.",
          "Developed E2E code building pipelines to save man-hours on testing and deployment.",
          "etting up state-of-art DevOps architecture with the latest tools and technology like Kubernetes, Helm, Gitlab CI."
        ]
      },
      "/exp/edw/3": {
        position: "Backend Developer",
        organization: "edWisor.com",
        servingPeriod: "April 2019 – September 2019",
        contribution: [
          ". Making sure all engineering resources are on track to handle the growing business requirement. As a growing startup, we started to onboard thousands of users every day. I made sure, it is safe and stable.",
          "Mentoring teammates on application architecture design, resource management, leadership and so on."
        ]
      },
      "/my/projects/snake": {
        "React Based Snake Game": {
          technologies: ["React", "HTML5", "CANVAS API"],
          about: `My very first React based Application.HTML5 and Canvas plays major roles in this application.
          The game is playable using keyboard. I'll make this mobile compatible :)`,
          urlToVisit: "https://souravdasslg.github.io"
        }
      }
    }
  };
  render() {
    const { predefinedResponse } = this.state;
    const { selectedUrl } = this.props;
    return (
      <Grid>
        <Grid.Row style={{ marginTop: "1px" }}>
          <Grid.Column>
            <ReactJson
              src={
                predefinedResponse[selectedUrl]
                  ? predefinedResponse[selectedUrl]
                  : {}
              }
              theme="hopscotch"
              style={{
                backgroundColor: "black",
                overflowY: "auto",
                maxHeight: "73vh",
                minHeight: "73vh",
                scrollbarColor: "light"
              }}
              displayDataTypes={false}
              displayObjectSize={false}
            ></ReactJson>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
const mapStateToProps = state => {
  return { selectedUrl: state.currentUrl };
};
export default connect(mapStateToProps)(ResponseComponent);
