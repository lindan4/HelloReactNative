import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { connect } from 'react-redux';
import { Card, CardSection, MyTextInput, MyButton, MySpinner } from './common';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }
    
    renderError() {
        const { errorTextStyle } = styles;
        if (this.props.error) {
            return(
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <MySpinner size='large' />;
        }
        else {
            return (
                <MyButton onPress={this.onButtonPress.bind(this)}>
                        Login
                </MyButton>
            )
        }
    }

    render() {
        return(
            <Card>
                <CardSection>
                    <MyTextInput 
                        label='Email' 
                        placeHolder='email@gmail.com' 
                        onChangeText={this.onEmailChange.bind(this)} 
                        value={this.props.email}></MyTextInput>
                </CardSection>

                <CardSection>
                    <MyTextInput 
                        label='Password' 
                        secureTextEntry 
                        placeHolder='Password'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}></MyTextInput>

                </CardSection>

                {this.renderError()}

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

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}



export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);