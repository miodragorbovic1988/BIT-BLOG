import React from 'react';

const Authors = (props) => {

    return (
        <div>
            <h2>`AUTHORS({props.post.numOfAllAuthors})`</h2>
            <ul><li>`{props.post.nameOfAuthor} {props.post.surnameOfAuthor}`</li></ul>
        </div>

    )

}

export default { Authors }