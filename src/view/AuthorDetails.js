import React, { Component } from 'react';
import { fetchAuthor } from './services/authorServices';


class AuthorDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: {}
        }
    }

    componentDidMount() {
        fetchAuthor().then((myAuthor) => {
            this.setState({
                author: myAuthor
            })
        })
    }
    return(

        <div>
    <img className="authorPicture" />
    <h2>{this.state.author.name}</h2>
    <p>`username: {this.state.author.username}`</p>
    <p>`email: {this.state.author.email}`</p>
    <p>`phone: {this.state.author.phone}`</p>
    <hr />
    <h2>Address</h2>
    <p>`street: {this.state.author.address.street}`</p>
    <p>`city: {this.state.author.address.city}`</p>
    <p>`zipcode: {this.state.author.address.zipcode}`</p>
    <img className="imageOfAuthorLocation" />
    <hr />
    <h2>Company</h2>
    <p>`name: {props.post.authorCompanyName}`</p>
    <p>`slogan: {props.post.authorSlogan}`</p>
    </div >
    )
    }
}


export default { AuthorDetail }
