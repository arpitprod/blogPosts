import axios from 'axios';

class ItemService {
    sendData(title, description, author) {
        axios.post('http://localhost:4200/posts/add/post', {
            title: title,
            description: description,
            author: author
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    updateData(data, id) {
        axios.post('http://localhost:4200/posts/update/'+id, {
            title: data.title,
            description: data.description
        })
        .then(res => this.setState({ posts: res.data}))
        .catch(err => console.log(err))
    }

    deleteData(id) {
        axios.get('http://localhost:4200/posts/delete/'+id)
        .then(console.log('Deleted'))
        .catch(err => console.log(err));
    }

}

export default ItemService;