import React, { Component } from "react";
import Title from './Title'
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { Route } from "react-router-dom";


class Main extends Component {

    constructor() {
        super()
        this.state = {
            posts: [],
            screen: 'photos'
        }
        // update this instance to point to the main component instance 
        this.removePhoto = this.removePhoto.bind(this)
    }

    removePhoto(postRemoved) {
        console.log(postRemoved.description)
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    addPhoto(postSubmitted) {
        this.setState(state => ({
            posts: state.posts.concat([postSubmitted])
        }))
    }

    render() {
        return ( <div>
            <Route exact path='/' render={() => (
                <div>
                    <Title title = {'Photowall'}/>
                    <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto}/>
                </div>
            )}/>
            <Route path='/AddPhoto' render={({history}) => (
                <AddPhoto onAddPhoto={(addedPost)=> (
                    this.addPhoto(addedPost),
                    history.push('./')
                )}/>
            )}/>
        </div>
    )}

    componentDidMount() {
        const data = simulateFetchDataFromDB();
        this.setState({
            posts: data
        })
    }

}

function simulateFetchDataFromDB() {
    return [{
        id: 0,
        description: 'Beautiful landscape',
        image_link: 'https://i.pinimg.com/564x/89/9c/61/899c6181997271a0d39bfe611fdf7591.jpg'
    }, {
        id: 1,
        description: 'Aliens',
        image_link: 'https://i.pinimg.com/564x/89/9c/61/899c6181997271a0d39bfe611fdf7591.jpg'
    }, {
        id: 2,
        description: 'On a vacation',
        image_link: 'https://i.pinimg.com/564x/89/9c/61/899c6181997271a0d39bfe611fdf7591.jpg'
    }]
}

export default Main