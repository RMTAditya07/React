// DonationActivity.js
import React from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  SelectInput,
  DateInput,
  DeleteButton,
  EditButton,
} from "react-admin";

export const DonationActivityList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="title" label="Activity" />
      <NumberField source="amountNeeded" label="Amount Needed" />
      <TextField source="status" label="Status" />
      <DateField source="datePosted" label="Date Posted" />
      <TextField source="name" label="Donated by" />
      <EditButton basepath="/activities" />
      <DeleteButton basepath="/activities" />
    </Datagrid>
  </List>
);

export const DonationActivityCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" label="Activity" />
      <NumberInput source="amountNeeded" label="Amount Needed" />
      {/* <TextInput source="status" label="Status" /> */}
      <DateInput source="datePosted" label="Date Posted" />
    </SimpleForm>
  </Create>
);
