import React from "react";
import { SidebarListElement } from "./SideBarListElement";
import placeHolder from "../../../assets/imgs/man.png";

class SideBarPreview extends React.Component {
  render() {
    const { telephone, address, email, photoURL } = this.props.data;
    console.log(photoURL || "#");
    return (
      <div className="sideBarPreview">
        <div className="image">
          <img src={photoURL || placeHolder} alt=""></img>
        </div>
        <div className="contacts">
          <div className="previewHeader">
            <h3>Contacto</h3>
          </div>
          <SidebarListElement text={address} icon="Dirección: " />
          <SidebarListElement text={telephone} icon="Teléfono: " />
          <SidebarListElement text={email} icon="Correo: " />
        </div>
      </div>
    );
  }
}

export default SideBarPreview;
