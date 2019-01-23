import React, { Component } from 'react';
import { Text, View, Picker, ToastAndroid } from 'react-native';
import { Card, CardSection, MyTextInput } from './common';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
    render() {
        const { pickerLabelStyle } = styles;

        return(
            <View>
                <CardSection>
                    <MyTextInput label='Name' 
                        placeHolder='e.g. John'
                        value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({ props: 'name', value: text })}/>

                </CardSection>

                <CardSection>
                    <MyTextInput label='Phone Number' 
                        placeHolder='e.g. 999-999-9999'
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({ props: 'phone', value: text })} />
                    
                </CardSection>

                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={pickerLabelStyle}>Shift:</Text>
                    <Picker selectedValue={this.props.shift} onValueChange={value => {this.props.employeeUpdate({props: 'shift', value: value})}}>
                        <Picker.Item label='Monday' value='Monday'/>
                        <Picker.Item label='Tuesday' value='Tuesday'/>
                        <Picker.Item label='Wednesday' value='Wednesday'/>
                        <Picker.Item label='Thursday' value='Thursday'/>
                        <Picker.Item label='Friday' value='Friday'/>
                        <Picker.Item label='Saturday' value='Saturday'/>
                        <Picker.Item label='Sunday' value='Sunday'/>
                    </Picker>
                    
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 13.5,
    }
};

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };

}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);