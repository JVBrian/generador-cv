import React from "react";
import { InputElement } from "../InputElement";

class GeneralInfos extends React.Component {
  bindClick() {
    const inputElement = document.querySelector(".photoButton");
    inputElement.click();
  }

  render() {
    const { changeHandler, addPhoto } = this.props;

    return (
      <div className="formSection">
        <div className="formSectionTitle">
          <h2>Información general</h2>
          <input
            type="file"
            className="photoButton"
            onChange={addPhoto}
            accept=".jpg, .jpeg, .png"
          ></input>
          <button onClick={this.bindClick}>Agregar foto</button>
        </div>
        <div className="formSubsection">
          <InputElement changeHandler={changeHandler} name="name" value="Nombre" />
          <InputElement changeHandler={changeHandler} name="surname" value="Apellidos"/>
          <InputElement changeHandler={changeHandler} name="qualification" value="Profesión"/>
          <InputElement changeHandler={changeHandler} name="address" value="Dirección" />
          <InputElement changeHandler={changeHandler} name="email" value="Correo" />
          <InputElement changeHandler={changeHandler} name="telephone" value="Teléfono"/>
        </div>
      </div>
    );
  }
}

export default GeneralInfos;
