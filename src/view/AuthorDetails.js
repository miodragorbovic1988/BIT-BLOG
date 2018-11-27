import React from 'react';


const AuthorDetails = (props) => {

    return (

        <div>
            <img className="authorPicture" />
            <h2>`{props.post.nameOfAuthor} {props.post.surnameOfAuthor}`</h2>
            <p>`username: {props.post.usernameOfAuthor}`</p>
            <p>`email: {props.post.emailOfAuthor}`</p>
            <p>`phone: {props.post.phoneOfAuthor}`</p>
            <hr />
            <h2>Address</h2>
            <p>`street: {props.post.streetOfAuthor}`</p>
            <p>`city: {props.post.cityOfAuthor}`</p>
            <p>`zipcode: {props.post.zipcodeOfAuthor}`</p>
            <img className="imageOfAuthorLocation" />
            <hr />
            <h2>Company</h2>
            <p>`name: {props.post.authorCompanyName}`</p>
            <p>`slogan: {props.post.authorSlogan}`</p>
        </div>
    )

}


export default { AuthorDetails }