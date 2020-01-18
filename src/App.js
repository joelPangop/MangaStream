import React, {Component} from 'react';
import './App.css';
import {Header} from "./components";
import {Home} from "./routes";

class App extends Component {
    state = {
        loading: false,
        movies: [
            {
                backdrop_path: './images/Fast_large.jpg',
                id: 475557,
                overview: "Lorem ipsum dolor sit amet consectetur adipsicing elit. Perspiciatifs in quos impedit? Iure officils",
                poster_path: './images/Fast_small.jpg',
                title: "Fast and furious"
            },
            {
                backdrop_path: './images/Fast_large.jpg',
                id: 475558,
                overview: "Lorem ipsum dolor sit amet consectetur adipsicing elit. Perspiciatifs in quos impedit? Iure officils",
                poster_path: './images/Fast_small.jpg',
                title: "Fast and furious"
            },
            {
                backdrop_path: './images/Fast_large.jpg',
                id: 475559,
                overview: "Lorem ipsum dolor sit amet consectetur adipsicing elit. Perspiciatifs in quos impedit? Iure officils",
                poster_path: './images/Fast_small.jpg',
                title: "Fast and furious"
            },
            {
                backdrop_path: './images/Fast_large.jpg',
                id: 475554,
                overview: "Lorem ipsum dolor sit amet consectetur adipsicing elit. Perspiciatifs in quos impedit? Iure officils",
                poster_path: './images/Fast_small.jpg',
                title: "Fast and furious"
            }
        ],
        badge: 0,
        image: './images/Fast_large.jpg',
        mTitle: 'Fast and Furious',
        mDesc: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
        activePage: 0,
        totalPage: 0,
        searchText: ''
    };

    handleSearch = value =>{
    console.log("handleSearch", value);
    };

    loadMore = () =>{
        console.log("load More");
    }

    render() {
        return (
            <div className="App">
                <Header badge={15}/>
                <Home {...this.state}
                      onSearchClick={this.handleSearch}
                      onButtonClick={this.loadMore}/>
            </div>
        )
    }
}

export default App;
