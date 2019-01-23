import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
    state = { albums: [] };


    componentWillMount() {
        // console.log('Component will mount in album list');
        Axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => {
            this.setState({
                albums: response.data
            });
        }).catch(error => console.log(error));
    }

    renderAlbums() {
        return this.state.albums.map(album => {
            return <AlbumDetail key={album.title} album={album} />;
        });
    }

    render() {
        console.log(this.state);
        
        return (
            <ScrollView>
                { this.renderAlbums() }
            </ScrollView>
            
        );
    }

}

export default AlbumList;