import React, { Component } from "react";
import { Row, Col, Tabs, Tab } from "react-bootstrap";
import { connect } from "react-redux";
import { history } from "../../../store";
import Utilities from "../../../Utilities";
import addfiles from "./../../../Static/images/360cvm/AddFilesIcon.svg";
import {
  GrooveTabComponent,
  GrooveIconSvg,
  GrooveInput,
  GrooveSelectMenuBasic,
  GrooveDateCalendarPicker,
  GrooveButton,
  GrooveRadioButton,
  GrooveTextBox,
} from "tfo-groove";
import CVMTable from "../../Shared/CVMTable/CVMTable";
import CVMModal from "../../Shared/CVMModal/CVMModal";

import "./ProjectDetails.css";
const ProjectDetails = (function() {
  class ProjectDetailsPresentational extends Component {
    render() {
      return (
        <div className="client-config-container">
          <CVMModal
            title={"Add Project to Program 1"}
            show={this.props.show}
            onCloseModal={this.props.onCloseModal}
            size={this.props.size}
            content={
              <ModalContent
                modalActiveKey={this.props.modalActiveKey}
                onChangeModalTab={this.props.onChangeModalTab}
                options={this.props.options}
                onCloseModal={this.props.onCloseModal}
              />
            }
          />
          <div className="stepper-tab-left-section">
            <div className="tab-section-header header18-semibold-midnight">
              Programs (04)
            </div>
            <div className="subtab-list">
              <ul className="bodytext16-medium-midnight">
                <li className="active">Program 01</li>
                <li>Program 02</li>
                <li>Program 03</li>
                <li>Program 04</li>
              </ul>
            </div>
          </div>
          <div className="stepper-tab-right-section">
            <div className="tab-section-header bodytext18-medium-midnight">
              Program 1 Projects
              <GrooveButton
                id="primry-btn-1"
                name="Solid Button Primary-Ops"
                isDisabled={false}
                hasIcon={true}
                type="solid"
                colorClass="stat-alternate"
                size="auto"
                text="Add New Project"
                iconAlignment="right"
                iconSize="small"
                iconName="plus"
                iconStyle="solid"
                iconId="btn-icon-01"
                callbackFunction={this.props.onCloseModal}
                customClassName={"add-button-right"}
              />
            </div>
            <div className="added-program-container">
              {/* if programs were empty */}
              <div className="empty-program-container bodytext18-regular-slate">
                <img src={addfiles} alt="select client" />
                <span className="bodytext24-medium-slate">
                  No Project Added
                </span>
                Please add project(s) to this program by using the 'Add New
                Project' button above.
              </div>
            </div>
            <div className="added-program-table-container">
              <CVMTable tableProperties={this.props.tableProperties} />
            </div>
            <div className="add-program-buttons">
              <GrooveButton
                id="primry-btn-1"
                name="Solid Button Primary-Ops"
                isDisabled={false}
                hasIcon={false}
                type="outline"
                colorClass="stat-alternate"
                size="auto"
                text="Save as Draft"
                // callbackFunction={action('clicked')}
              />

              <GrooveButton
                id="primry-btn-1"
                name="Solid Button Primary-Ops"
                isDisabled={false}
                hasIcon={false}
                type="solid"
                colorClass="stat-alternate"
                size="auto"
                text="Send for Approval"
                // callbackFunction={action('clicked')}
              />
            </div>
          </div>
        </div>
      );
    }
  }

  class ModalContent extends Component {
    render() {
      return (
        <div className="add-project-modal">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <GrooveInput
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                isAutocomplete="false"
                customClassName="dimension-input"
                // callbackFunction={this.callbackFunction}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <GrooveTextBox
                id="description"
                name="description"
                minLength={20}
                type="text"
                placeholder="Description"
                // callbackFunction={this.callbackFunction}
              />
            </Col>
          </Row>
          <Row>
          <Col lg={12} md={12} sm={12}>
              <GrooveSelectMenuBasic
                name="location"
                isDisabled={false}
                placeholder="Location"
                list={this.props.options}
                id="location"
                // callbackFunction={this.callbackFunction}
              />
            </Col>
          </Row>
          <div className="add-button">
            <GrooveButton
              id="primry-btn-1"
              name="Solid Button Primary-Ops"
              isDisabled={false}
              hasIcon={false}
              type="outline"
              colorClass="stat-alternate"
              size="auto"
              text="Cancel"
              callbackFunction={this.props.onCloseModal}
            />

            <GrooveButton
              id="primry-btn-1"
              name="Solid Button Primary-Ops"
              isDisabled={false}
              hasIcon={false}
              type="solid"
              colorClass="stat-alternate"
              size="auto"
              text="Add Person"
              // callbackFunction={action('clicked')}
            />
          </div>
        </div>
      );
    }
  }

  class PersonDetailsContainer extends Component {
    constructor() {
      super();
      this.state = {
        options: [
          { value: "1", label: "Option1", text: "Option1" },
          { value: "2", label: "Option2", text: "Option2" },
          { value: "3", label: "Option3", text: "Option3" },
        ],
        size: "md",
        show: false,
        tableProperties: {
          columns: [
            { field: "name", headerName: "Name" },
            { field: "description", headerName: "Description" },
            { field: "location", headerName: "Location" },
          ],
          data: [
            {
                name: "testname",
                description: "testdesc",
            },
          ],
        },
      };
    }

    onCloseModal = () => {
      this.setState({
        ...this.state,
        show: !this.state.show,
      });
    };

    render() {
      return (
        <PersonDetailsPresentational
          tableProperties={this.state.tableProperties}
          options={this.state.options}
          show={this.state.show}
          size={this.state.size}
          onCloseModal={this.onCloseModal}
        />
      );
    }
  }

  return PersonDetailsContainer;
})();

export default PersonDetails;
