import React, { Component } from "react";
import { Table, Input } from "semantic-ui-react";
import "./ParameterComponent.css";
import { connect } from "react-redux";
import * as actionsTypes from "../../store/actions";
class ParameterComponent extends Component {
  options = {
    "/about/me": [
      {
        key: "email",
        value: (
          <a
            href="mailto:souravdasslg95@gmail.com?Subject=Hey Sourav"
            target="_top"
          >
            souravdasslg95@gmail.com
          </a>
        ),
        internalUrl: "/about/me"
      },
      {
        key: "LinkedIn",
        value: (
          <a
            href="https://www.linkedin.com/in/souravdasslg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/souravdasslg/
          </a>
        ),
        internalUrl: "/about/me"
      }
    ],
    "/my/projects": [
      {
        key: "Snake Game",
        value: (
          <a
            href="https://souravdasslg.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://souravdasslg.github.io
          </a>
        ),
        internalUrl: "/my/projects/snake"
      },
      {
        key: "Renovate (Open Source)",
        value: (
          <a
            href="https://github.com/renovatebot/renovate"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/renovatebot/renovate
          </a>
        ),
        internalUrl: "/my/projects/renovate"
      }
    ],
    "/my/projects/snake": [
      {
        key: "Snake Game",
        value: (
          <a
            href="https://souravdasslg.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://souravdasslg.github.io
          </a>
        ),
        internalUrl: "/my/projects/snake"
      },
      {
        key: "Renovate (Open Source)",
        value: (
          <a
            href="https://github.com/renovatebot/renovate"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/renovatebot/renovate
          </a>
        ),
        internalUrl: "/my/projects/renovate"
      }
    ],
    "/my/projects/renovate": [
      {
        key: "Snake Game",
        value: (
          <a
            href="https://souravdasslg.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://souravdasslg.github.io
          </a>
        ),
        internalUrl: "/my/projects/snake"
      },
      {
        key: "Renovate (Open Source)",
        value: (
          <a
            href="https://github.com/renovatebot/renovate"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/renovatebot/renovate
          </a>
        ),
        internalUrl: "/my/projects/renovate"
      }
    ],
    "/experience": [
      {
        key: "edwisor.com (Jun 2017-Aug 2017)",
        value: "Intern Backend Developer",
        internalUrl: "/exp/edw/1"
      },
      {
        key: "edwisor.com (Aug 2017 - March 2019)",
        value: "Backend Developer",
        internalUrl: "/exp/edw/2"
      },
      {
        key: "edwisor.com (April 2019 - September 2019)",
        value: "Senior Backend Developer",
        internalUrl: "/exp/edw/3"
      }
    ],
    "/exp/edw/1": [
      {
        key: "edwisor.com (Jun 2017-Aug 2017)",
        value: "Intern Backend Developer",
        internalUrl: "/exp/edw/1"
      },
      {
        key: "edwisor.com (Aug 2017 - March 2019)",
        value: "Backend Developer",
        internalUrl: "/exp/edw/2"
      },
      {
        key: "edwisor.com (April 2019 - September 2019)",
        value: "Senior Backend Developer",
        internalUrl: "/exp/edw/3"
      }
    ],
    "/exp/edw/2": [
      {
        key: "edwisor.com (Jun 2017-Aug 2017)",
        value: "Intern Backend Developer",
        internalUrl: "/exp/edw/1"
      },
      {
        key: "edwisor.com (Aug 2017 - March 2019)",
        value: "Backend Developer",
        internalUrl: "/exp/edw/2"
      },
      {
        key: "edwisor.com (April 2019 - September 2019)",
        value: "Senior Backend Developer",
        internalUrl: "/exp/edw/3"
      }
    ],
    "/exp/edw/3": [
      {
        key: "edwisor.com (Jun 2017-Aug 2017)",
        value: "Intern Backend Developer",
        internalUrl: "/exp/edw/1"
      },
      {
        key: "edwisor.com (Aug 2017 - March 2019)",
        value: "Backend Developer",
        internalUrl: "/exp/edw/2"
      },
      {
        key: "edwisor.com (April 2019 - September 2019)",
        value: "Senior Backend Developer",
        internalUrl: "/exp/edw/3"
      }
    ]
  };

  render() {
    const { selectedUrl, onParameterItemClick } = this.props;
    const selectedOptions = this.options[selectedUrl] || [];
    const getParams = option => {
      return (
        <>
          <Table.Cell onClick={() => onParameterItemClick(option.internalUrl)}>
            {option.key}
          </Table.Cell>
          <Table.Cell onClick={() => onParameterItemClick(option.internalUrl)}>
            {option.value}
          </Table.Cell>
        </>
      );
    };

    return (
      // <Grid>
      //   <Grid.Row style={{ border: "1px solid white" }}>
      //     <Grid.Column>
      <Table
        celled
        inverted
        selectable
        compact="very"
        size="small"
        striped
        className="parameterTable"
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Key</Table.HeaderCell>
            <Table.HeaderCell>Value</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {selectedOptions.map(selectedOption => {
            return <Table.Row>{getParams(selectedOption)}</Table.Row>;
          })}
        </Table.Body>
      </Table>
      //     </Grid.Column>
      //   </Grid.Row>
      // </Grid>
    );
  }
}
const mapStateToProps = state => {
  return { selectedUrl: state.currentUrl };
};
const mapDispatchToProps = dispatch => {
  return {
    onParameterItemClick: url =>
      dispatch({ type: actionsTypes.HISTORY_ITEM_CLICKED, payload: url })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ParameterComponent);
