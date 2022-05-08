import "./header.css";
import React from "react";
import ReactToPrint from "react-to-print";

class Header extends React.Component {
  render() {
    const { reset, content } = this.props;

    return (
      <header>
        <h1>Generador - CV</h1>
        <div className="buttonContainer">
          <button onClick={reset}>Limpiar</button>
          <ReactToPrint
            trigger={() => {
              return <button>PDF</button>;
            }}
            documentTitle="CV"
            content={content}
            copyStyles="true"
          />
        </div>
      </header>
    );
  }
}

export default Header;
