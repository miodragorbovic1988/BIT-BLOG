import React from 'react';
import AUTHOR_ENDPOINT from '../../shared/constants';
import { Author } from '../etities/Authors';

const fetchAuthor = () => {

    fetch(AUTHOR_ENDPOINT)
        .then((response) => {
            return response.json();
        })
        .then((rawAuthor) => {
            const myAuthor = rawAutor.map(({ name, username, email, company, phone, address }) => {
                const { street, city, zipcode } = address;
                const { name, catchPhrase } = company;


                return new Author(name, username, email, company, phone, address)
            });
            return myAuthor;
        })

}

export { fetchAuthor };
