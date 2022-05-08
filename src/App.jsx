import React from "react";
import Form from "./components/form/Form";
import Header from "./components/Header/Header";
import Preview from "./components/Preview/Preview";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfos: {
        name: "",
        surname: "",
        qualification: "",
        telephone: "",
        address: "",
        email: "",
        photoURL: null,
      },
      works: [],
      educations: [],
    };

    this.generalInfosChange = this.generalInfosChange.bind(this);
    this.educationsChange = this.educationsChange.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.worksChange = this.worksChange.bind(this);
    this.addWork = this.addWork.bind(this);
    this.deleteWork = this.deleteWork.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.addPhoto = this.addPhoto.bind(this);
  }

  //GENERAL INFOS HANDLERS**************************************************
  generalInfosChange(e) {
    this.setState({
      generalInfos: {
        ...this.state.generalInfos,
        [e.target.name]: e.target.value,
      },
    });
  }
  addPhoto(e) {
    const imageFile = e.target.files[0];
    console.log(imageFile);
    const imageURL = window.URL.createObjectURL(imageFile);
    this.setState({
      generalInfos: {
        ...this.state.generalInfos,
        photoURL: imageURL,
      },
    });
  }

  //EDUCATION EVENT HANDLERS************************************************
  educationsChange(e) {
    this.setState({
      educations: this.state.educations.map((educ) => {
        if (educ.id === e.target.dataset.id) {
          return {
            ...educ,
            [e.target.name]: e.target.value,
          };
        }
        return educ;
      }),
    });
  }

  addEducation() {
    this.setState({
      educations: [
        ...this.state.educations,
        {
          university: "",
          degree: "",
          subject: "",
          from: "",
          to: "",
          id: "educID" + Math.floor(Math.random() * 99999).toString(),
        },
      ],
    });
  }

  deleteEducation(e) {
    this.setState({
      educations: this.state.educations.filter((educ) => {
        return educ.id !== e.target.dataset.id;
      }),
    });
  }

  //WORKS EVENT HANDLERS************************************************
  addWork() {
    this.setState({
      works: [
        ...this.state.works,
        {
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
          id: "workID" + Math.floor(Math.random() * 99999).toString(),
        },
      ],
    });
  }

  deleteWork(e) {
    this.setState({
      works: this.state.works.filter((work) => {
        return work.id !== e.target.dataset.id;
      }),
    });
  }

  worksChange(e) {
    this.setState({
      works: this.state.works.map((work) => {
        if (work.id === e.target.dataset.id) {
          return {
            ...work,
            [e.target.name]: e.target.value,
          };
        }
        return work;
      }),
    });
  }

  //HEADERS HANDLERS*****************************************

  resetForm() {
    const inputs = document.querySelectorAll("input");

    this.setState({
      generalInfos: {
        name: "",
        surname: "",
        qualification: "",
        telephone: "",
        address: "",
        email: "",
      },
      works: [],
      educations: [],
    });

    inputs.forEach((input) => {
      input.value = "";
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header reset={this.resetForm} content={() => this.previewRef} />
        <main>
          <Form
            generalInfoChangeHandler={this.generalInfosChange}
            addPhoto={this.addPhoto}
            educationsChange={this.educationsChange}
            educationsArray={this.state.educations}
            addEducation={this.addEducation}
            deleteEducation={this.deleteEducation}
            worksArray={this.state.works}
            worksChange={this.worksChange}
            addWork={this.addWork}
            deleteWork={this.deleteWork}
          />
          <Preview
            ref={(el) => (this.previewRef = el)}
            generalInfos={this.state.generalInfos}
            educations={this.state.educations}
            works={this.state.works}
          />
        </main>
        
    
    
      </div>
    );
  }
}

export default App;
