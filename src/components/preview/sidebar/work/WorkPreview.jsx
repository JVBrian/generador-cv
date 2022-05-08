import React from "react";

class WorkPreview extends React.Component {
  render() {
    const { data } = this.props;
    if (!data) return <div></div>;
    return (
      <div className="educationsContainerPreview">
        <div className="previewHeader">
          <h3>Experiencia</h3>
        </div>
        {data.map((education) => {
          const { position, company, city, from, to, id } = education;
          return (
            <div key={id} className="mainExperienceCard">
              <div className="mainExperienceTitle">
                <p>{position}</p>
                <p>
                  {from} - {to}
                </p>
              </div>
              <p>
                {company}, {city}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default WorkPreview;
