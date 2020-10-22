import * as React from "react";
import { List, Datagrid, TextField, NumberField } from 'react-admin';
import { Create, Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

export const EmployeeList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <NumberField source="costPerDay" />
    </Datagrid>
  </List>
);

export const EmployeeEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <NumberInput source="costPerDay" />
    </SimpleForm>
  </Edit>
);

export const EmployeeCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <NumberInput source="costPerDay" />
    </SimpleForm>
  </Create>
);