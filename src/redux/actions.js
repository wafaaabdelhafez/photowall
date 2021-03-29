import {database} from '../database/config'

export function startAddingPost(post) {
    return (dispatch) => {
        return database.ref('posts').update({[post.id]: post}).then(() => {
            dispatch(addPost(post))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startAddingComment(comment, postId) {
    return (dispatch) => {
        return database.ref(`comments/${postId}`).push(comment).then(() => {
            dispatch(addComment(comment, postId))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startLoadingPosts() {
    return (dispatch) => {
        return database.ref('posts').once('value').then((snapshot) => {
            let posts = []
            snapshot.forEach((child) => {
                posts.push(child.val())
            })
            dispatch(loadPosts(posts))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startLoadingComments(postId) {
    return (dispatch) => {
        return database.ref('comments').once('value').then((snapshot) => {
            let comments = {}
            snapshot.forEach((child) => {
                comments[child.key] = Object.values(child.val())
            })
            dispatch(loadComments(comments))
        })
    }
}

export function startRemovingPost(index, id) {
    return(dispatch) => {
        return database.ref(`posts/${id}`).remove().then(() => {
            dispatch(removePost(index))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function removePost(index) {
    return {
        type: "REMOVE_POST",
        index
    }
}

export function addPost(post) {
    return {
        type: "ADD_POST",
        post
    }
}

export function addComment(comment, postId) {
    return {
        type: "ADD_COMMENT",
        comment,
        postId
    }
}

export function loadPosts(posts) {
    return {
        type: "LOAD_POSTS",
        posts
    }
}

export function loadComments(comments) {
    return {
        type: "LOAD_COMMENTS",
        comments
    }
}