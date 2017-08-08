import React, { Component } from 'react';
import ItemService from './ItemService';
import axios from 'axios';
import TableRow from './TableRow';

class IndexPost extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', item: ''};
        this.addItemService = new ItemService();
    }
    componentDidMount() {
        axios.get('http://localhost:4200/posts')
        .then(response => {
            this.setState({ posts: response.data });
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    tabRow() {
        if (this.state.posts instanceof Array) {
            return this.state.posts.map(function(object, _id) {
                return <TableRow obj={object} key={_id} />
            })
        }
    }

    render() {
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Title</td>
                            <td>Description</td>
                            <td>Author</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default IndexPost;