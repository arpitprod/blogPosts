import React, { Component } from 'react';
import axios from 'axios';
import ItemService from './ItemService';

class EditPost extends Component {
    constructor(props) {
        super(props);
        this.addItemService = new ItemService();
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {title: '', description: ''};
    }

    componentDidMount() {
        axios.get('http://localhost:4200/posts/edit/'+this.props.match.params.id)
        .then(response => {
            this.setState({title: response.title, description: response.description});
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    handleChange1(event) {
        this.setState({title: event.target.value});
    }

    handleChange2(event) {
        this.setState({description: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.addItemService.updateData(this.state, this.props.match.params.id);
        this.props.history.push('/index');
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <h2>Edit Post:</h2>
                        Title: <input type="text" value={this.state.title} onChange={this.handleChange1} className="form-control" />
                        Description: <input type="text" value={this.state.description} onChange={this.handleChange2} className="form-control" />
                    </label><br/>
                    <input type="submit" value="Update" className="btn btn-primary" />
                </form>
            </div>
        );
    }
}

export default EditPost;