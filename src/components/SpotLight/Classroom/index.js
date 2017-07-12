import React from "react";

import { getClassroomAvatar } from "utils/classroomAvatar";

import SpotLight from "..";

export default props =>
  <SpotLight
    imgUrl={getClassroomAvatar(props.classroom)}
    label={props.classroom.name}
  />;
