import React from "react";
import { InputElement } from "../InputElement";

class WorkInfos extends React.Component {
  render() {
    const { changeHandler, worksArray, addWork, deleteWork } = this.props;

    return (
      <div className="formSection">
        <div className="formSectionTitle">
          <h2>Experiencia</h2>
        </div>
        {worksArray.map((work, i) => {
          return (
            <div className="formSubsection" key={work.id}>
              <div className="formSubsectionTitle">
                <h3>Experiencia laboral {i + 1}</h3>
                <span
                  className="material-icons materialButton"
                  id="test"
                  onClick={deleteWork}
                  data-id={work.id}
                >
                  Limpiar
                </span>
              </div>
              <InputElement
                changeHandler={changeHandler}
                name="position"
                id={work.id}
                value="Cargo"
              />
              <InputElement
                changeHandler={changeHandler}
                name="company"
                id={work.id}
                value="Empresa"
              />
              <InputElement
                changeHandler={changeHandler}
                name="city"
                id={work.id}
                value="Ciudad"
              />
              <InputElement
                changeHandler={changeHandler}
                name="from"
                id={work.id}
                value="Año de inicio"
              />
              <InputElement
                changeHandler={changeHandler}
                name="to"
                id={work.id}
                value="Año de finalización"
              />
            </div>
          );
        })}
        <span className="material-icons materialButton" onClick={addWork}>
          Agregar
        </span>
      </div>
    );
  }
}

export default WorkInfos;
