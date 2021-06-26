import React from 'react';
import Details from './components/Details.js';
import Education from './components/Education.js';
import WorkExperience from './components/WorkExperience.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalDetails: { name: '', address: '', mobileNumber: '', email: '' },
      education: [],
      workExperience: [],
      editMode: true,
    };
  }

  setDetails = (name, address, mobileNumber, email) => {
    
    this.setState({
      personalDetails: { name, address, mobileNumber, email },
    });
  };

  setEducation=(arr)=>{
    this.setState({
      education:arr
    })
  }

  setWorkExperience=(arr)=>{
    this.setState({
      workExperience:arr
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    this.setState({
      editMode: false,
    });
    //process data
  };

  edit = (e) => {
    e.preventDefault();
    this.setState({
      editMode: true,
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="heading">CV Application</h1>
        </header>
        <form className="form">
          <h2 className="form-heading">Please Enter your Details Below</h2>
          <Details details={this.state.personalDetails} setDetails={this.setDetails} editMode={this.state.editMode} />
          <Education education={this.state.education} setEducation={this.setEducation} editMode={this.state.editMode}/>
          <WorkExperience workExperience={this.state.workExperience} setWorkExperience={this.setWorkExperience} editMode={this.state.editMode}/>
         
          {!this.state.editMode && (
            <button className="edit-button" onClick={this.edit}>
              Edit?
            </button>
          )}
          <button type="submit" onClick={this.submitForm}>
            Submit
          </button>
        </form>
        <footer className="footer">CopyRight C PrinceThind</footer>
      </div>
    );
  }
}

export default App;
