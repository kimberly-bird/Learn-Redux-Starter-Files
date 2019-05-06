import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
    render() {
        const { postId } = this.props.params;
        // index of post
        const i = this.props.posts.findIndex((post) => post.code === postId);
        // get post
        const post = this.props.posts[i];
        // can loop over nothing, or then push the comment onto the empty array
        const postComments = this.props.comments[postId] || [];

        return (
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props} />
                <Comments postComments={postComments} {...this.props}/>
            </div>
        )
    }
});

export default Single;