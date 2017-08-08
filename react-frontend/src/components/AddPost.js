import React, { Component } from 'react';
import ItemService from './ItemService';

class AddPost extends Component {

    constructor(props) {
        super(props);
        this.state = {title: '', description: '', author: ''};
        this.addItemService = new ItemService();

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange1(event) {
        this.setState({title: event.target.value});
    }

    handleChange2(event) {
        this.setState({description: event.target.value});
    }
    
    handleChange3(event) {
        this.setState({author: event.target.value});
    }    

    handleSubmit(event) {
        event.preventDefault();
        this.addItemService.sendData(this.state.title, this.state.description, this.state.author);
        this.setState({title: '', description: '', author: ''});
        // this.props.history.push('/index');
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} >
                    <label>
                        <h2>Add Post:</h2>
                        Title: <input type='text' value={this.state.title} onChange={this.handleChange1} className='form-control' />
                        Description: <input type='text' value={this.state.description} onChange={this.handleChange2} className='form-control' />
                        Author: <input type='text' value={this.state.author} onChange={this.handleChange3} className='form-control' />
                    </label><br/>
                    <input type='submit' value='Submit' className='btn btn-primary' />
                </form>
            </div>
        );
    }
}

export default AddPost;
