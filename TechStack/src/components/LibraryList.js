import React, { Component } from 'react';
import { Text, View, ToastAndroid, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    renderItem(library) {
    return(<ListItem library={library}/>);
    }

    render() {
        // ToastAndroid.show(JSON.stringify(this.props), ToastAndroid.LONG);
        return( <FlatList data={this.props.libraries}
            renderItem={this.renderItem}
            keyExtractor={library => library.id.toString()}/>
        );
    }
}

const mapStateToProps = state => {
    // ToastAndroid.show(state, ToastAndroid.LONG);
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);