import React from 'react';
import { Admin, Resource } from 'react-admin';
import { FirebaseDataProvider } from 'react-admin-firebase';
import { EmployeeList, EmployeeEdit, EmployeeCreate } from './resources/employees';

const config = {
  apiKey: "AIzaSyBXAUqze595xy-waOLnGW-VzxKJEYnZQfc",
  authDomain: "uira-app.firebaseapp.com",
  databaseURL: "https://uira-app.firebaseio.com",
  projectId: "uira-app",
  storageBucket: "uira-app.appspot.com",
  messagingSenderId: "19225788389",
  appId: "1:19225788389:web:a212ff946e1c1507aa790c",
  measurementId: "G-R2J39G0X2B"
};
const options = {}
const dataProvider = FirebaseDataProvider(config, options);

const App = () => (
  <Admin dataProvider={dataProvider} >
    <Resource name="employees" list={EmployeeList} edit={EmployeeEdit} create={EmployeeCreate} />
  </Admin>
);

export default App;
