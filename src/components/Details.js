import React from 'react';
import '../styles/Details.css';

class Details extends React.Component {
  updateDetails = (e) => {
    const obj = this.props.details;
    const type = e.target.getAttribute('id');

    switch (type) {
      case 'name':
        this.props.setDetails(e.target.value, obj.address, obj.mobileNumber, obj.email);
        break;
      case 'address':
        this.props.setDetails(obj.name, e.target.value, obj.mobileNumber, obj.email);
        break;
      case 'mobileNumber':
        this.props.setDetails(obj.name, obj.address, e.target.value, obj.email);
        break;
      case 'email':
        this.props.setDetails(obj.name, obj.address, obj.mobileNumber, e.target.value);
        break;
      default:
        break;
    }
  };

  renderEditable = () => {
    const details = ['name', 'address', 'mobileNumber', 'email'];
    return (
      <div className="input-fields-details">
        {details.map((detail,index) => {
          return (
            <label htmlFor={detail} key={index}>
              {detail[0].toUpperCase() + detail.slice(1) + ' :'}
              <input
                type="text"
                id={detail}
                name={detail}
                onChange={this.updateDetails}
                value={this.props.details[detail]}
              />
            </label>
          );
        })}
      </div>
    );
  };

  renderDisplay = () => {
    return (
      <div className="display-fields-details">
        <label htmlFor="name">Name: {this.props.details.name}</label>
        <label htmlFor="address">Address: {this.props.details.address}</label>
        <label htmlFor="mobileNumber">MobileNumber: {this.props.details.mobileNumber}</label>
        <label htmlFor="email">Email: {this.props.details.email}</label>
      </div>
    );
  };

  renderDetails = () => {
    if (this.props.editMode) return this.renderEditable();
    return this.renderDisplay();
  };

  render() {
    return (
      <div className="details">
        <h2 className="details-heading"> Personal Details</h2>
        {this.renderDetails()}
      </div>
    );
  }
}

export default Details;
