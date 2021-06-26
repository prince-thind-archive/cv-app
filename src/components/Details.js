import React from 'react';

class Details extends React.Component {
  // constructor(props){
  //   super(props);
  // }

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

  getDetails=()=>{
    if(this.props.editMode){
      return (<div className="Details">
      <h2>Personal Details</h2>
      <label htmlFor="name">
        Name: <input type="text" id="name" name="name" onChange={this.updateDetails} value={this.props.details.name} />
      </label>
      <label htmlFor="address">
        Address: <input type="text" id="address" name="address" onChange={this.updateDetails} value={this.props.details.address} />
      </label>
      <label htmlFor="mobileNumber">
        MobileNumber: <input type="text" id="mobileNumber" name="mobileNumber" onChange={this.updateDetails} value={this.props.details.mobileNumber} />
      </label>
      <label htmlFor="email">
        Email: <input type="text" id="email" name="email" onChange={this.updateDetails} value={this.props.details.email}/>
      </label>
    </div>)
    }
    return (<div className="Details">
    <h2>Personal Details</h2>
    <label htmlFor="name">
      Name: {this.props.details.name} 
    </label>
    <label htmlFor="address">
      Address: {this.props.details.address} 
    </label>
    <label htmlFor="mobileNumber">
      MobileNumber:{this.props.details.mobileNumber} 
    </label>
    <label htmlFor="email">
      Email: {this.props.details.email} 
    </label>
  </div>);


  }
  render() {
    let render=this.getDetails();
    return (
     render
    );
  }
}

export default Details;
