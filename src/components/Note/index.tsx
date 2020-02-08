import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { push } from "connected-react-router";
import React from "react";
import { Dispatch } from "redux";
import { deleteNote } from "../../store/modules/notes/actions";
import { Note } from "../../store/modules/notes/types";
import { StyledPaper } from "./styled";

interface Props {
  note: Note;
  dispatch: Dispatch<any>;
}

export default ({ note, dispatch }: Props) => (
  <StyledPaper>
    {note.title}
    <div>
      <EditIcon onClick={() => dispatch(push(`/note/${note.id}`))} />
      <DeleteIcon onClick={() => dispatch(deleteNote(note.id))} />
    </div>
  </StyledPaper>
);
