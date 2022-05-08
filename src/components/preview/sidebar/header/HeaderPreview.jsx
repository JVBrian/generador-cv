import React from "react";

class HeaderPreview extends React.Component {
  render() {
    const { name, surname, qualification } = this.props.data;
    return (
      <div className="headerPreview">
        <h2>
          {name.toUpperCase()} <br />
        </h2>
        <h3>{surname.toUpperCase()}</h3>
        <h4>{qualification}</h4>
      </div>
    );
  }
}

export default HeaderPreview;
