import React, { Component } from 'react';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';


class BlogPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        // fetchPosts()
    }

    render() {
        return (
            <div>
                <h1>Posts</h1>
                <h2>{this.props.post.title}</h2>
                <p>{this.props.post.postSummary}</p>

                {/* <PostItem /> */}
                {/* <PostItem /> */}
                {/* <PostItem /> */}
                {/* <PostItem /> */}
                {/* <PostItem /> */}
            </div>
        )
    }
};


export { BlogPage }