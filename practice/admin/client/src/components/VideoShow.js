// Video.js
import React from "react";
import {
  // ...other imports
  Show,
  TextField,
  SimpleShowLayout,
  ShowButton,
  ArrayField,
  NumberField,
  DateField,
} from "react-admin";
import BackButton from "./Backbutton";

export const VideoShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="title" label="Title" />
      <NumberField source="likes" label="Likes" />
      <TextField source="caption" label="Caption" />
      <ArrayField source="comments" label="Comments">
        {/* ...comment display */}
      </ArrayField>
      <DateField source="createdAt" label="Created At" />
      <TextField
        source="videoUrl"
        label="YouTube Video Link"
        cellClassName="video-cell"
      />
    {/* <BackButton /> */}
    </SimpleShowLayout>
  </Show>
);
