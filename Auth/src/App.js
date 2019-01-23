import firebase from '@firebase/app';
import '@firebase/auth';
import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Header, MyButton, MySpinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    
    state = { loggedIn: null };
    
    componentWillMount() {
        // let config = {
        //     apiKey: "AIzaSyDAda4eCLvn0fjYKEpp9_KyuGoq66ZB0eg",
        //     authDomain: "helloreactnativeauth.firebaseapp.com",
        //     databaseURL: "https://helloreactnativeauth.firebaseio.com",
        //     projectId: "helloreactnativeauth",
        //     storageBucket: "helloreactnativeauth.appspot.com",
        //     messagingSenderId: "398406139766"
        // };

        firebase.initializeApp({
            apiKey: 'AIzaSyDAda4eCLvn0fjYKEpp9_KyuGoq66ZB0eg',
            authDomain: 'helloreactnativeauth.firebaseapp.com',
            databaseURL: 'https://helloreactnativeauth.firebaseio.com',
            projectId: 'helloreactnativeauth',
            storageBucket: 'helloreactnativeauth.appspot.com',
            messagingSenderId: '398406139766'
        });

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ loggedIn: true });
            }
            else {
                this.setState({ loggedIn: false });
            }
        });

    
        // this.initializeFirebase();
     }

    renderContent() {
    //     if (this.state.loggedIn) {
    //         return(<MyButton>Log Out</MyButton>);
    //     }
    //     else {
    //         return (<LoginForm />);
    //    }

        switch (this.state.loggedIn) {
            case true:
                return(
                    <MyButton onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </MyButton>
                );
            case false:
                return <LoginForm />
            default:
                return <MySpinner size="large"/>        
            }

    }
    render() {
        return(
            <View style={styles.viewStyle}>
                <Header headerText='Authentication' />
                {this.renderContent()}  
            </View>
            // <Text>Hello</Text>
        );
    }
}

const styles ={
    viewStyle: {
        flexDirection: 'column',
    },
};

export default App;

