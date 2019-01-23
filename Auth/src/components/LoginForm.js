import React, { Component } from 'react';
import firebase from '@firebase/app';
import '@firebase/auth';
import { View, TextInput, Text, ToastAndroid } from 'react-native';
import { MyButton, Card, CardSection, MyTextInput, MySpinner } from './common';

class LoginForm extends Component {

    state = { email: '', password: '', error: '', loading: false };

    onLoginSuccess() {
        this.setState({ email: '', password: '', error: '', loading: false });
    }

    onLoginFail() {
        this.setState({ error: 'Authentication failed', loading: false });
    }


    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password).then(this.onLoginSuccess.bind(this)).catch(() => {
            // ToastAndroid.show('Creating account', ToastAndroid.SHORT);
            firebase.auth().createUserWithEmailAndPassword(email, password).then(this.onLoginSuccess.bind(this)).catch(this.onLoginFail.bind(this));
        });

        //this.setState({ loading: false });
    }


    renderButton() {
        if (this.state.loading) {
            return (<MySpinner size="small" />);
        }
        else {
            return (<MyButton onPress={this.onButtonPress.bind(this)}>
                Login
            </MyButton>);
        }
    }

    render() {
        return(
            <Card>
                <CardSection>
                    <MyTextInput placeHolder="user@mail.com" label='Email' value={this.state.email} onChangeText={email => {this.setState({ email })} }/>
                </CardSection>

                <CardSection>
                    <MyTextInput secureTextEntry placeHolder="password" label="Password" value={this.state.password} onChangeText={password => {this.setState({ password, error: '' })} }/>
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {/* <MyButton onPress={this.onButtonPress.bind(this)}>
                        Login
                    </MyButton> */}
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
 
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    }
};

export default LoginForm;