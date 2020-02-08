import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { createNote } from "../../store/modules/notes/actions";
import setLanguage from "../../utils/setLanguage";
import NotesList from "../NotesList";
import { CsIcon, EnIcon, Error, Languages, StyledButton, Wrapper } from "./styled";

export default () => {
  const [newNote, setNewNote] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const createNewNote = () => {
    if (!newNote.length) {
      setError(t("error"));
    } else {
      dispatch(createNote(newNote));
    }
  };

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (error && event.target.value.length) {
      setError("");
    }
    setNewNote(event.target.value);
  };

  return (
    <Container>
      <Wrapper>
        <Typography variant="h3" component="h1" align="center">
          {t("welcome")}
        </Typography>
        <Languages>
          <EnIcon onClick={() => setLanguage("en")} />
          <CsIcon onClick={() => setLanguage("cs")} />
        </Languages>
        <div>
          <TextField onChange={handleTextFieldChange} />
          <StyledButton color="primary" variant="contained" onClick={() => createNewNote()}>
            {t("create")}
          </StyledButton>
        </div>
        {error && <Error>{error}</Error>}
        <NotesList />
      </Wrapper>
    </Container>
  );
};
