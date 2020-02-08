export enum ActionTypes {
  GET_NOTES = "GET_NOTES",
  GET_NOTES_SUCCESS = "GET_NOTES_SUCCESS",
  GET_NOTES_ERROR = "GET_NOTES_ERROR",
  GET_NOTE = "GET_NOTE",
  GET_NOTE_SUCCESS = "GET_NOTE_SUCCESS",
  GET_NOTE_ERROR = "GET_NOTE_ERROR",
  DELETE_NOTE = "DELETE_NOTE",
  DELETE_NOTE_SUCCESS = "DELETE_NOTE_SUCCESS",
  DELETE_NOTE_ERROR = "DELETE_NOTE_ERROR",
  CREATE_NOTE = "CREATE_NOTE",
  CREATE_NOTE_SUCCESS = "CREATE_NOTE_SUCCESS",
  CREATE_NOTE_ERROR = "CREATE_NOTE_ERROR",
}

export interface GetNotesAction {
  type: ActionTypes.GET_NOTES;
}

export interface GetNotesSuccessAction {
  type: ActionTypes.GET_NOTES_SUCCESS;
  payload: Note[];
}

export interface GetNotesErrorAction {
  type: ActionTypes.GET_NOTES_ERROR;
  payload: any;
}

export interface GetNoteAction {
  type: ActionTypes.GET_NOTE;
  payload: number;
}

export interface GetNoteSuccessAction {
  type: ActionTypes.GET_NOTE_SUCCESS;
  payload: Note;
}

export interface GetNoteErrorAction {
  type: ActionTypes.GET_NOTE_ERROR;
  payload: any;
}

export interface DeleteNoteAction {
  type: ActionTypes.DELETE_NOTE;
  payload: number;
}

export interface DeleteNoteSuccessAction {
  type: ActionTypes.DELETE_NOTE_SUCCESS;
}

export interface DeleteNoteErrorAction {
  type: ActionTypes.DELETE_NOTE_ERROR;
  payload: any;
}

export interface CreateNoteAction {
  type: ActionTypes.CREATE_NOTE;
  payload: string;
}

export interface CreateNoteSuccessAction {
  type: ActionTypes.CREATE_NOTE_SUCCESS;
  payload: Note;
}

export interface CreateNoteErrorAction {
  type: ActionTypes.CREATE_NOTE_ERROR;
  payload: any;
}

export interface Note {
  id: number;
  title: string;
}

export interface NoteState {
  notes: Note[];
  note: Note | null;
  loading: boolean;
  error: any;
}

export type NotesActionTypes =
  | GetNotesAction
  | GetNotesSuccessAction
  | GetNotesErrorAction
  | GetNoteAction
  | GetNoteSuccessAction
  | GetNoteErrorAction
  | DeleteNoteAction
  | DeleteNoteSuccessAction
  | DeleteNoteErrorAction
  | CreateNoteAction
  | CreateNoteSuccessAction
  | CreateNoteErrorAction;
