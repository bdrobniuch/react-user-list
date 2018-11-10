import React, {Component} from "react";
class UserForm extends Component {

    constructor(props) {
        super(); // or super(props) ?
  
        this.state = {
            isDisabled: true
        }  
    }


    handleSubmit = (e) => {
        e.preventDefault();

        console.log('test');
        console.log('first name:', this.fullName.value);
       
       this.props.addName(this.fullName.value);
       this.fullName.value = '';
 
       this.setState({ isDisabled: this.fullName.value== "" });
      }

     

      handleNameChange = (evt) => {
        this.setState({ isDisabled: this.fullName.value== "" });
        
      }

render() {
    return(<div className="user-form">
        <form onSubmit={this.handleSubmit}>

        <input placeholder="Name" type="text" ref={input => this.fullName = input} onChange={this.handleNameChange}/>
          <input type="submit" value="Submit"  disabled={this.state.isDisabled}/>
        </form>
    </div>)
}



}


export default UserForm;