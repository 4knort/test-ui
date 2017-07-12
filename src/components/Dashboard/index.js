import React from "react";
import { withRouter } from "react-router";
import { HLayout, HLayoutItem } from "react-flexbox-layout";

import SimpleLeftBar from "components/Dashboard/LeftBar/";
import StudentSpotLight from "components/SpotLight/Student";
import ClassroomSpotLight from "components/SpotLight/Classroom";

class Dashboard extends React.Component {
  state = {
    spotlighted: false,
    classroom: null,
  }

  getSpotLightedItem() {
    let spotlight;
    let selectedStudentid;
    if (this.props.match.params && this.props.match.params.studentId) {
      selectedStudentid = this.props.match.params.studentId;
      const spotlightedStudent = this.props.items.find(
        student => student._id == selectedStudentid
      );
      return <StudentSpotLight student={spotlightedStudent} />;
    } else if (this.state.classroom) {
      return <ClassroomSpotLight classroom={this.state.classroom} />;
    }
  }
  render() {
    

    return (
      <HLayout width="100%" gutter={7}>
        <HLayoutItem flexGrow={1}>
          <SimpleLeftBar items={this.props.items} students={this.props.students} classrooms={this.props.classrooms} spotLightClassroom={this.getSpotlightedClassroom}/>
        </HLayoutItem>
        <HLayoutItem flexGrow={1}>
          { (this.state.spotlighted || this.props.match.params.studentId) &&
            <div style={spotLightContainerStyle}>
              {this.getSpotLightedItem()}
            </div>
          }
        </HLayoutItem>
      </HLayout>
    );
  }
  

  getSpotlightedClassroom = (classroom) => {
    this.setState({classroom: classroom, spotlighted: true});
  }

  
};

export default withRouter(Dashboard);

const spotLightContainerStyle = {
  paddingTop: "105px",
  boxSizing: "border-box",
  height: "400px",
  width: "460px",
  marginLeft: "auto",
  backgroundImage: "linear-gradient(288deg, rgb(235, 244, 244) 50%, rgb(251, 253, 253) 45%, rgb(255, 255, 255) 85%, rgb(255, 255, 255) 100%)",
};
