import React from 'react';
import Details from './components/Details.js';
import Education from './components/Education.js';
import Work from './components/Work.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalDetails: { name: '', address: '', mobileNumber: '', email: '' },
      education: [],
      work: [],
      editMode: true,
    };
  }

  setDetails = (name, address, mobileNumber, email) => {
    this.setState({
      personalDetails: { name, address, mobileNumber, email },
    });
  };

  setEducation = (arr) => {
    this.setState({
      education: arr,
    });
  };

  setWork = (arr) => {
    this.setState({
      work: arr,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    this.setState({
      editMode: false,
    });
    this.print();
  };

  print = () => {
    console.log(this.state);
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
        <form className="form">
          <h2 className="form-heading">Please Enter your Details Below</h2>
          <Details details={this.state.personalDetails} setDetails={this.setDetails} editMode={this.state.editMode} />
          <Education education={this.state.education} setEducation={this.setEducation} editMode={this.state.editMode} />
          <Work work={this.state.work} setWork={this.setWork} editMode={this.state.editMode} />

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
