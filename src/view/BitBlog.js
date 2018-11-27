import React from 'react';

const BitBlog = () => {

    return (
        <div>
            <form>
                <label>Title
                    <input type="text" />
                </label>
                <label>Content
                            <textarea name="newPostContent">
                    </textarea>
                </label>
            </form>

            <input type="button" name="cancel" value="cancel" />
            <input type="button" name="save" value="save" />
        </div>
    )
}

export default { BitBlog }