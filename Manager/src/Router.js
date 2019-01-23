import React from 'react';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeDetail from './components/EmployeeDetail';
import EmployeeCreate from './components/EmployeeCreate';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return(
        <Router>
            <Stack key='root' hideNavBar>
                <Scene key='auth'>
                    <Scene key='login'
                        component={LoginForm}
                        title='Please login'
                        inital />
                </Scene>

                <Stack key='main'>
                    {/* <Scene key='employeeList'
                        component={EmployeeList}
                        title='Employees' /> */}

                    <Scene key='employeeDetail'
                        component={EmployeeDetail}
                        title='Employee Detail'/>

                    <Scene key='employeeList'
                        component={EmployeeList}
                        title='Employees'
                        rightTitle='Add'
                        onRight={() => Actions.employeeCreate()}
                        initial />

                    <Scene key='employeeCreate' 
                        component={EmployeeCreate}
                        title='Create Employee' />

                    <Scene key='employeeEdit'
                        component={EmployeeEdit}
                        title='Edit Employee' />

                </Stack>                
            </Stack>
        </Router>
    );
};

export default RouterComponent;