import React from 'react';
import fetchPosts from './services/postServices';

const PostPage = (props) => {

    return (
        <div>
            <link>{props.post.oneStepBack}</link>
            {<h2>{props.post.title}</h2>}
            {<link><h3>{props.post.authorName}</h3></link>}
            {<p>{props.post.postSummary}</p>}
            {<h3>{props.post.sumOfAuthorsPosts}</h3>}
            <ul><li><link>{props.post.relatedArticle}</link></li></ul>
        </div>

    )


}

export default { PostPage }