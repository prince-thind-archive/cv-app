import React from 'react';
import uniqid from 'uniqid';

class WorkExperience extends React.Component {
  addSection = (event) => {
    event.preventDefault();
    const workExperienceObj = {
      companyName: '',
      titleOfJob: '',
      id: uniqid(),
    };

    const res = this.props.workExperience.slice();
    res.push(workExperienceObj);
    this.props.setWorkExperience(res);
  };

  removeSection = (e) => {
    e.preventDefault();
    const res = this.props.workExperience.slice();
    res.pop();
    this.props.setWorkExperience(res);
  };

  updateSection = (e) => {
    const id = e.target.parentElement.parentElement.getAttribute('data-key');
    const sectionIndex = this.props.workExperience.findIndex((e) => {
      return e.id === id;
    });
    let newObj = {};
    if (e.target.getAttribute('id') === 'instituteName') {
      newObj = {
        companyName: e.target.value,
        titleOfJob: this.props.workExperience[sectionIndex].titleOfJob,
        id: this.props.workExperience[sectionIndex].id,
      };
    } else {
      newObj = {
        companyName: this.props.workExperience[sectionIndex].companyName,
        titleOfJob: e.target.value,
        id: this.props.workExperience[sectionIndex].id,
      };
    }
    let res = this.props.workExperience.slice();
    res.splice(sectionIndex, 1, newObj);

    this.props.setWorkExperience(res);
  };
  getSectionValue = (id, type) => {
    const section = this.props.workExperience.find((e) => {
      return e.id === id;
    });

    if (type === 'name') {
      return section.companyName;
    } else {
      return section.titleOfJob;
    }
  };

  getRender = () => {
    if (this.props.editMode) {
      return this.props.workExperience.map((section) => {
        return (
          <div key={section.id} data-key={section.id}>
            <label htmlFor="instituteName">
              Company Name:{' '}
              <input
                type="text"
                id="instituteName"
                name="instituteName"
                onChange={this.updateSection}
                value={this.getSectionValue(section.id, 'name')}
              />
            </label>
            <label htmlFor="titleOfJob">
              Title Of Job:{' '}
              <input
                type="text"
                id="titleOfJob"
                name="titleOfJob"
                onChange={this.updateSection}
                value={this.getSectionValue(section.id, 'title')}
              />
            </label>
          </div>
        );
      });
    }

    return this.props.workExperience.map((section) => {
      return (
        <div key={section.id} data-key={section.id}>
          <label htmlFor="instituteName">
            Company Name:{this.getSectionValue(section.id, 'name')}
          </label>
          <label htmlFor="titleOfJob">
            Title Of Job:{this.getSectionValue(section.id, 'title')}
          </label>
        </div>
      );
    });
  };

  render() {
    const render = this.getRender();
    return (
      <div className="WorkExperience">
      <h3>Work Experience Details</h3>
        {render}
        <button className="add-workExperience" onClick={this.addSection}>
          Add
        </button>
        <button className="remove-workExperience" onClick={this.removeSection}>
          Remove
        </button>
      </div>
    );
  }
}

export default WorkExperience;
