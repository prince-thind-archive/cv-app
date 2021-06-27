import React from 'react';
import uniqid from 'uniqid';

class Work extends React.Component {
  addSection = (event) => {
    event.preventDefault();
    const workObj = {
      companyName: '',
      jobTitle: '',
      id: uniqid(),
    };

    const res = this.props.work.slice();
    res.push(workObj);
    this.props.setWork(res);
  };

  removeSection = (e) => {
    e.preventDefault();
    const res = this.props.work.slice();
    res.pop();
    this.props.setWork(res);
  };

  updateSection = (e) => {
    const id = e.target.parentElement.parentElement.getAttribute('data-key');
    const sectionIndex = this.props.work.findIndex((e) => {
      return e.id === id;
    });

    let newObj = {};
    if (e.target.getAttribute('id') === 'companyName') {
      newObj = {
        companyName: e.target.value,
        jobTitle: this.props.work[sectionIndex].jobTitle,
        id: this.props.work[sectionIndex].id,
      };
    } else {
      newObj = {
        companyName: this.props.work[sectionIndex].companyName,
        jobTitle: e.target.value,
        id: this.props.work[sectionIndex].id,
      };
    }

    let res = this.props.work.slice();
    res.splice(sectionIndex, 1, newObj);

    this.props.setWork(res);
  };

  getSectionValue = (id, type) => {
    const section = this.props.work.find((e) => {
      return e.id === id;
    });

    if (type === 'name') {
      return section.companyName;
    } else {
      return section.jobTitle;
    }
  };

  renderEditable = () => {
    return this.props.work.map((section) => {
      return (
        <div key={section.id} data-key={section.id} className="input-fields-section">
          <label htmlFor="companyName">
            Company Name:{' '}
            <input
              type="text"
              id="companyName"
              name="companyName"
              onChange={this.updateSection}
              value={this.getSectionValue(section.id, 'name')}
            />
          </label>
          <label htmlFor="jobTitle">
            Job Title:{' '}
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              onChange={this.updateSection}
              value={this.getSectionValue(section.id, 'title')}
            />
          </label>
        </div>
      );
    });
  };

  renderDisplay = () => {
    return this.props.work.map((section) => {
      return (
        <div key={section.id} data-key={section.id} className="display-fields-section">
          <label htmlFor="companyName">Institute Name: {this.getSectionValue(section.id, 'name')}</label>
          <label htmlFor="jobTitle">Title Of Study: {this.getSectionValue(section.id, 'title')}</label>
        </div>
      );
    });
  };

  renderWork = () => {
    if (this.props.editMode) {
      return this.renderEditable();
    } else {
      return this.renderDisplay();
    }
  };

  render() {
    return (
      <div className="section">
        <h3 className="section-heading">Work Experience Details</h3>
        {this.renderWork()}

        {this.props.editMode && (
          <div className="buttons">
            <button className="add-section-button" onClick={this.addSection}>
              Add
            </button>
            <button className="remove-section-button" onClick={this.removeSection}>
              Remove
            </button>
          </div>
        )}

      </div>
    );
  }
}

export default Work;
