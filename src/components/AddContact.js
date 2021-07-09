import React, { Component } from 'react'

export class AddContact extends Component {

    state = {
        name:"",
        email:"",
    };

    add = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="ui main" style={{marginTop:"5%"}}>
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>

                    <div className="field">
                        <label>Name</label>
                        <input type="text"
                          name="name"
                          placeholder="Name"
                          value={this.state.name}
                          onChange = { (e) => this.setState({name:e.target.value}) }
                          />
                    </div>


                    <div className="field">
                        <label>Email</label>
                        <input type="text" 
                         name="email" 
                         placeholder="email"
                         value={this.state.email}
                         onChange = { (e) => this.setState({email:e.target.value}) }
                         
                         />
                    </div>

                    <button type="submit" className="ui button blue">Add</button>

                </form>
            </div>
        )
    }
}

export default AddContact
