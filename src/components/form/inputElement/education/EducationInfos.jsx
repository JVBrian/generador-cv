import React from "react";
import { InputElement } from "../InputElement";

class EducationInfos extends React.Component {
  render() {
    const { changeHandler, educationsArray, addEducation, deleteEducation } =
      this.props;

    return (
      <div className="formSection">
        <div className="formSectionTitle">
          <h2>Educación</h2>
        </div>
        {educationsArray.map((educ, i) => {
          return (
            <div className="formSubsection" key={educ.id}>
              <div className="formSubsectionTitle">
                <h3>Educación {i + 1}</h3>
                <span
                  className="material-icons materialButton"
                  onClick={deleteEducation}
                  data-id={educ.id}
                >
                  Limpiar
                </span>
              </div>
              <InputElement
                changeHandler={changeHandler}
                name="university"
                id={educ.id}
                value="Institución"
              />
              <InputElement
                changeHandler={changeHandler}
                name="degree"
                id={educ.id}
                value="Título"
              />
              <InputElement
                changeHandler={changeHandler}
                name="subject"
                id={educ.id}
                value="Descripción"
              />
              <InputElement
                changeHandler={changeHandler}
                name="from"
                id={educ.id}
                value="Año de inicio"
              />
              <InputElement
                changeHandler={changeHandler}
                name="to"
                id={educ.id}
                value="Año de finalización"
              />
            </div>
          );
        })}
        <span className="material-icons materialButton" onClick={addEducation}>
          Agregar
        </span>
      </div>
    );
  }
}

export default EducationInfos;
