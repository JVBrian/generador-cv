import "./form.css";
import React from "react";
import EducationInfos from "./inputElement/education/EducationInfos";
import GeneralInfos from "./inputElement/general/GeneralInfos";
import WorkInfos from "./inputElement/work/WorkInfos";

class Form extends React.Component {
  render() {
    const {
      generalInfoChangeHandler,
      educationsChange,
      educationsArray,
      addEducation,
      deleteEducation,
      worksArray,
      worksChange,
      deleteWork,
      addWork,
      addPhoto,
    } = this.props;

    return (
      <div className="mainElement form">
        <GeneralInfos
          changeHandler={generalInfoChangeHandler}
          addPhoto={addPhoto}
        />

        <EducationInfos
          changeHandler={educationsChange}
          educationsArray={educationsArray}
          addEducation={addEducation}
          deleteEducation={deleteEducation}
        />

        <WorkInfos
          changeHandler={worksChange}
          worksArray={worksArray}
          addWork={addWork}
          deleteWork={deleteWork}
        />
      </div>
    );
  }
}

export default Form;
