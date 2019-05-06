// increment a "like"
export function increment(index) {
    // actions are just objects that return 2 things (type and payload (in this case, index)) - want to send as little along as needed, so just the incrementing number 
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

// add comment
export function addComment(postId, author, comment) {
    console.log("dispatched new comment");
    
    return {
        type: 'ADD_COMMENT', 
        postId,
        author,
        comment
    }
}

// remove comment
// function is the "action creator"
export function removeComment(postId, i) {
    return {
        type: 'REMOVE_COMMENT', 
        i,
        postId
    }
}