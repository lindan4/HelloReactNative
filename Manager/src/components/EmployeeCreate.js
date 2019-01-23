import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions'
import { Card, CardSection, MyTextInput, MyButton } from './common';

class EmployeeCreate extends Component {
    onCreateButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        const { pickerLabelStyle } = styles;

        return(
            <Card>
                {/* <CardSection>
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
                    
                </CardSection> */}

                <EmployeeForm {...this.props} />

                <CardSection>
                    <MyButton onPress={this.onCreateButtonPress.bind(this)}>
                        Save
                    </MyButton>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 13.5,
    }
};

const mapStateToProps = state => {
    return {
        name: state.employeeForm.name,
        phone: state.employeeForm.phone,
        shift: state.employeeForm.shift
    };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);