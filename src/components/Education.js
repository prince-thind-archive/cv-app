import React from 'react';
import uniqid from 'uniqid';
import '../styles/Sections.css';

class Education extends React.Component {
  addSection = (event) => {
    event.preventDefault();
    const educationObj = {
      institueName: '',
      titleOfStudy: '',
      id: uniqid(),
    };

    const res = this.props.education.slice();
    res.push(educationObj);
    this.props.setEducation(res);
  };

  removeSection = (e) => {
    e.preventDefault();
    const res = this.props.education.slice();
    res.pop();
    this.props.setEducation(res);
  };

  updateSection = (e) => {
    const id = e.target.parentElement.parentElement.getAttribute('data-key');
    const sectionIndex = this.props.education.findIndex((e) => {
      return e.id === id;
    });

    let newObj = {};
    if (e.target.getAttribute('id') === 'instituteName') {
      newObj = {
        institueName: e.target.value,
        titleOfStudy: this.props.education[sectionIndex].titleOfStudy,
        id: this.props.education[sectionIndex].id,
      };
    } else {
      newObj = {
        institueName: this.props.education[sectionIndex].institueName,
        titleOfStudy: e.target.value,
        id: this.props.education[sectionIndex].id,
      };
    }

    let res = this.props.education.slice();
    res.splice(sectionIndex, 1, newObj);

    this.props.setEducation(res);
  };

  getSectionValue = (id, type) => {
    const section = this.props.education.find((e) => {
      return e.id === id;
    });

    if (type === 'name') {
      return section.institueName;
    } else {
      return section.titleOfStudy;
    }
  };

  renderEditable = () => {
    return this.props.education.map((section) => {
      return (
        <div key={section.id} data-key={section.id} className="input-fields-section">
          <label htmlFor="instituteName">
            Institute Name:{' '}
            <input
              type="text"
              id="instituteName"
              name="instituteName"
              onChange={this.updateSection}
              value={this.getSectionValue(section.id, 'name')}
            />
          </label>
          <label htmlFor="titleOfStudy">
            Title Of Study:{' '}
            <input
              type="text"
              id="titleOfStudy"
              name="titleOfStudy"
              onChange={this.updateSection}
              value={this.getSectionValue(section.id, 'title')}
            />
          </label>
        </div>
      );
    });
  };

  renderDisplay = () => {
    return this.props.education.map((section) => {
      return (
        <div key={section.id} data-key={section.id} className="display-fields-section">
          <label htmlFor="instituteName">Institute Name: {this.getSectionValue(section.id, 'name')}</label>
          <label htmlFor="titleOfStudy">Title Of Study: {this.getSectionValue(section.id, 'title')}</label>
        </div>
      );
    });
  };

  renderEducation = () => {
    if (this.props.editMode) {
      return this.renderEditable();
    } else {
      return this.renderDisplay();
    }
  };

  render() {
    return (
      <div className="section">
        <h3 className="section-heading">Academic Details</h3>
        {this.renderEducation()}

        {this.props.editMode && (
          <div className="buttons">
            <button className="add-section-button " onClick={this.addSection}>
              Add
            </button>
            <button className="remove-section-button " onClick={this.removeSection}>
              Remove
            </button>
          </div>
        )}
        
      </div>
    );
  }
}

export default Education;
