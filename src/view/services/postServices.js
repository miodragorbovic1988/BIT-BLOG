import React from 'react';
import POSTS_ENDPOINT from '../../shared/constants';
import { Post } from '../entities/Post';

const fetchPosts = () => {

    fetch(POSTS_ENDPOINT)
        .then((response) => {
            return response.json();
        })
        .then((rawPosts) => {
            const myPosts = rawPosts.map(({ userId, id, title, body }) => {
                return new Post(userId, id, title, body)
            });

            return myPosts;
        })
}


return fetchPosts;

export { fetchPosts };