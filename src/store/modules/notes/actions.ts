import { ActionTypes, Note, NotesActionTypes } from "./types";

export const getNotes = (): NotesActionTypes => ({
  type: ActionTypes.GET_NOTES,
});

export const getNotesSuccess = (notes: Note[]): NotesActionTypes => ({
  type: ActionTypes.GET_NOTES_SUCCESS,
  payload: notes,
});

export const getNotesError = (error: any): NotesActionTypes => ({
  type: ActionTypes.GET_NOTES_SUCCESS,
  payload: error,
});

export const getNote = (id: number): NotesActionTypes => ({
  type: ActionTypes.GET_NOTE,
  payload: id,
});

export const getNoteSuccess = (note: Note): NotesActionTypes => ({
  type: ActionTypes.GET_NOTE_SUCCESS,
  payload: note,
});

export const getNoteError = (error: any): NotesActionTypes => ({
  type: ActionTypes.GET_NOTE_SUCCESS,
  payload: error,
});

export const deleteNote = (id: number): NotesActionTypes => ({
  type: ActionTypes.DELETE_NOTE,
  payload: id,
});

export const deleteNoteSuccess = (): NotesActionTypes => ({
  type: ActionTypes.DELETE_NOTE_SUCCESS,
});

export const deleteNoteError = (error: any): NotesActionTypes => ({
  type: ActionTypes.DELETE_NOTE_ERROR,
  payload: error,
});

export const createNote = (text: string): NotesActionTypes => ({
  type: ActionTypes.CREATE_NOTE,
  payload: text,
});

export const createNoteSuccess = (note: Note): NotesActionTypes => ({
  type: ActionTypes.CREATE_NOTE_SUCCESS,
  payload: note,
});

export const createNoteError = (error: any): NotesActionTypes => ({
  type: ActionTypes.CREATE_NOTE_ERROR,
  payload: error,
});
