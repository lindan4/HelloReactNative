import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View, ToastAndroid } from 'react-native';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { connect } from 'react-redux';
import { Card, CardSection, MyButton, ConfirmModal } from './common';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {

    state = {
        showModal: false
    };

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ props: prop, value: value });
        });

    }

    // componentWillMount() {
    //     _.each(this.props.navigation.getParam('employee'), (value, prop) => {
    //         this.props.employeeUpdate({ prop, value });
    //     });
    // }

    onSaveButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });

    }

    onTextPress() {
        const { phone, shift } = this.props;
        
        Communications.text(phone, `Your upcoming shift is on ${shift}`);

    }

    onAccept() {
        this.props.employeeDelete({ uid: this.props.employee.uid });

    }

    onDecline() {
           this.setState({ showModal: false });
    }


    render() {
        return(
            <Card>
                <EmployeeForm { ...this.props } />
                <CardSection>
                    <MyButton onPress={this.onSaveButtonPress.bind(this)}>
                        Save Changes
                    </MyButton>
                    {/* <Text>{JSON.stringify(this.props.employee)}</Text> */}
                </CardSection>
                <CardSection>
                    <MyButton onPress={this.onTextPress.bind(this)}>
                            Text Schedule
                    </MyButton>
                </CardSection>
                <CardSection>
                    <MyButton onPress={() => this.setState({ showModal: !this.state.showModal })}>
                            Fire Employee
                    </MyButton>
                </CardSection>

                <ConfirmModal visible={this.state.showModal} onAccept={this.onAccept.bind(this)} onDecline={this.onDecline.bind(this)}>
                    Are you sure you want to delete this?
                </ConfirmModal>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);