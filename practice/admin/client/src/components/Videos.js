// Video.js
import React from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  Show,
  SimpleShowLayout,
  ShowButton,
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  ArrayInput,
  SimpleFormIterator,
  Edit,
  EditButton,
  ReferenceInput,
  SelectInput,
  DateField,
} from "react-admin";

export const VideoList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="title" label="Title" />
      <NumberField source="likes" label="Likes" />
      <ShowButton label="Show" />
      <EditButton label="Edit" />
    </Datagrid>
  </List>
);

export const VideoShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="title" label="Title" />
      <NumberField source="likes" label="Likes" />
      <TextField source="caption" label="Caption" />
      <ArrayInput source="comments" label="Comments">
        <SimpleFormIterator>
          <TextField source="text" label="Comment" />
          <ReferenceInput source="userId" label="User" reference="users">
            <SelectInput optionText="username" />
          </ReferenceInput>
        </SimpleFormIterator>
      </ArrayInput>
      <DateField source="createdAt" label="Created At" />
    </SimpleShowLayout>
  </Show>
);

export const VideoCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" label="Title" />
      <TextInput source="videoUrl" label="YouTube Video Link" />
      <TextInput source="caption" label="Caption" />
      <ArrayInput source="comments" label="Comments">
        {/* ...comment input */}
      </ArrayInput>
      <NumberInput source="likes" label="Likes" />
    </SimpleForm>
  </Create>
);

export const VideoEdit = (props) => (
  <Edit title="Edit post" {...props}>
    <SimpleForm>
      <TextInput source="title" label="Title" />
      <TextInput source="videoUrl" label="YouTube Video Link" />
      <TextInput source="caption" label="Caption" />
      <ArrayInput source="comments" label="Comments">
        1.comments{" "}
      </ArrayInput>
      <NumberInput source="likes" label="Likes" />
    </SimpleForm>
  </Edit>
);
