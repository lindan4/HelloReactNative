import React from 'react';
import { Text, TextInput, View } from 'react-native';



const MyTextInput = ({ placeHolder, label, value, onChangeText, secureTextEntry }) => {
    //Define the const below within the component declaration
    const { labelStyle, textInputStyle, containerStyle } = styles;

    return(
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput secureTextEntry={secureTextEntry} placeHolder={placeHolder} autoCorrect={false} style={textInputStyle} value={value} onChangeText={onChangeText} />
        </View>

    );
};

const styles = {
    textInputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};


export { MyTextInput };