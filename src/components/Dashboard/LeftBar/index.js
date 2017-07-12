import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { HLayout, HLayoutItem, VLayout, VLayoutItem } from 'react-flexbox-layout';

import { fullName } from 'utils/name';
import { getStudentAvatar } from 'utils/studentAvatar';
import { getClassroomAvatar } from 'utils/classroomAvatar';

class DashboardLeftBar extends React.Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  render() {
    const items = this.props.items;

    if (this.props.students) {
      return (
        <div>
          <h3 style={titleStyle}>Students</h3>
          {items.map(this._renderStudent)}
        </div>
      ) 
    } else {
      return (
        <div>
          <h3 style={titleStyle}>Students</h3>
          {items.map(classroom => {
            return (
                <HLayout style={classroomStyle} key={classroom._id} alignItems="middle" gutter={7} onClick={() => {
                  this.props.spotLightClassroom(classroom)
                }}>
                  <div
                    style={{
                      ...studentAvatarStyle,
                      backgroundImage: `url(${getClassroomAvatar(classroom)})`,
                    }}
                  />
                  <HLayoutItem flexGrow style={studentNameStyle}>
                    <span>{classroom.name}</span>
                  </HLayoutItem>
                </HLayout>
            );
          })}
        </div>
      ) 
    }
  }

  _renderStudent(student) {
    const label = "";
    return (
      <NavLink
        key={student._id}
        to={`/students/${student._id}`}
        style={entryStyle}
        activeStyle={selectedEntryStyle}
      >
        <HLayout key={student._id} height="100%" alignItems="middle" gutter={7}>
          <div
            style={{
              ...studentAvatarStyle,
              backgroundImage: `url(${getStudentAvatar(student)})`,
            }}
          />
          <HLayoutItem flexGrow style={studentNameStyle}>
            <span>{fullName(student)}</span>
          </HLayoutItem>
          <span>{label}</span>
        </HLayout>
      </NavLink>
    );
  }  

  _renderClassroom(classroom) {
    return (
        <HLayout style={classroomStyle} key={classroom._id} alignItems="middle" gutter={7} onClick={() => this.props.spotLightClassroom(classroom)}>
          <div
            style={{
              ...studentAvatarStyle,
              backgroundImage: `url(${getClassroomAvatar(classroom)})`,
            }}
          />
          <HLayoutItem flexGrow style={studentNameStyle}>
            <span>{classroom.name}</span>
          </HLayoutItem>
        </HLayout>
    );
  }
}

const BORDER = '1px solid #e3e9e8';

const classroomStyle = {
  cursor: "pointer",
  marginBottom: "10px",
}
const titleStyle = {
  fontWeight: "normal",
  fontSize: "17px",
  marginLeft: "1.1rem",
  color: "#8d8d8d",
};

const entryStyle = {
  borderBottom: BORDER,
  padding: "0.3rem 0.5rem",
  height: "4rem",
  fontSize: "1.1rem",
  display: "block",
  backgroundColor: "white",
  textDecoration: "none",
  color: "black",
};

const selectedEntryStyle = {
  backgroundColor: "#f6fafb",
  backgroundImage: "linear-gradient(108deg, rgb(235, 244, 244) 50%, rgb(251, 253, 253) 45%, rgb(255, 255, 255) 85%, rgb(255, 255, 255) 100%)",
  cursor: "default",
};

const studentNameStyle = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

const studentAvatarStyle = {
  height: "3rem",
  width: "3rem",
  margin: "0 0.6rem",
  borderRadius: "50%",
  backgroundSize: "cover",
};

export default DashboardLeftBar;
