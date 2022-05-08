import "./preview.css";
import React from "react";
import EducationPreview from "./sidebar/education/EducationPreview";
import WorkPreview from "./sidebar/work/WorkPreview";
import SideBarPreview from "./sidebar/SideBarPreview";
import HeaderPreview from "./sidebar/header/HeaderPreview";

class Preview extends React.Component {
  render() {
    const { generalInfos, works, educations } = this.props;

    return (
      <div className="preview mainElement">
        <HeaderPreview data={generalInfos} />
        <SideBarPreview data={generalInfos} />
        <div className="mainPreview">
          <EducationPreview data={educations} />
          <WorkPreview data={works} />
        </div>
      </div>
    );
  }
}

export default Preview;
