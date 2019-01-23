import React, { Component } from 'react';
import { Text, View, ListView, FlatList, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import _ from 'lodash';
import ListItem from './ListItem';



class EmployeeList extends Component {

    componentDidMount() {
        this.props.employeesFetch();

        // this.createDataSource(this.props);        

    }

    // // componentWillReceiveProps(nextProps) {
    // //     this.createDataSource(nextProps);
    // // }


    // createDataSource() {
    //     this.props.employeesFetch();

    // //     const ds = new ListView.DataSource({
    // //         rowHasChanged: (r1, r2) => r1 !== r2
    // //     })

    // //     this.dataSource = ds.cloneWithRows(employees);

    // }

    // renderRow(employee) {
    //     return <ListItem employee={employee} />;
    // }

    render() {
        // ToastAndroid.show(JSON.stringify(this.props.employees), ToastAndroid.LONG);

        return(
            <FlatList
                data={this.props.employees}
                renderItem={employee => <ListItem employee={employee.item} />}
                keyExtractor={employee => employee.uid} />
        );
    }
}

const mapStateToProps = state => {
    // ToastAndroid.show(state.employees, ToastAndroid.LONG);
    const employees = _.map(state.employees, (values, uid) => {
        return { ...values, uid };
    });
    

    return { employees };
    
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);