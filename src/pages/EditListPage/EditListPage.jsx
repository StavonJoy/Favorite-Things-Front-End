import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class EditListPage extends Component {
  state = { 
    invalidForm: false,
    formData: this.props.location.state.lists
   }
   formRef = React.createRef();

   handleSubmit = e => {
       e.preventDefault();
       this.props.handleUpdateList(this.state.formData);
     };
 
   handleChange = e => {
       const formData = {...this.state.formData, [e.target.name]: e.target.value};
       this.setState({
       formData,
       invalidForm: !this.formRef.current.checkValidity()
       });
   };
 
   render() {
    return (
      <>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>List's Name (required)</label>
            <input
              className="form-control"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>List's Image URL(required)</label>
            <input
              className="form-control"
              name="image"
              value={this.state.formData.image}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>List Items 1:</label>
            <input
              className="form-control"
              name="item1"
              value={this.state.formData.item1}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>List Items 2:</label>
            <input
              className="form-control"
              name="item2"
              value={this.state.formData.item2}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>List Items 3:</label>
            <input
              className="form-control"
              name="item3"
              value={this.state.formData.item3}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn"
            disabled={this.state.invalidForm}
          >
            ADD LIST
          </button>
          <Link to='/'>CANCEL</Link>
        </form>
      </>
    );
  }
}

 
export default EditListPage;