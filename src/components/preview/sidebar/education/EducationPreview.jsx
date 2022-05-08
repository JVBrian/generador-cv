import React from "react";

class EducationPreview extends React.Component {
  render() {
    const { data } = this.props;
    if (!data) return <div></div>;
    return (
      <div className="educationsContainerPreview">
        <div className="previewHeader">
          <h3>Educación</h3>
        </div>
        {data.map((education) => {
          const { university, degree, subject, from, to, id } = education;
          return (
            <div key={id} className="mainExperienceCard">
              <div className="mainExperienceTitle">
                <p>{degree}</p>
                <p>
                  {from} - {to}
                </p>
              </div>
              <p>
                {subject} - {university}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default EducationPreview;
