import { ActionTypes, NotesActionTypes, NoteState } from "./types";

const initialState: NoteState = {
  notes: [],
  note: null,
  loading: false,
  error: null,
};

export default (state = initialState, action: NotesActionTypes) => {
  switch (action.type) {
    case ActionTypes.GET_NOTES:
      return { ...state, loading: true };
    case ActionTypes.GET_NOTES_SUCCESS:
      return { ...state, notes: action.payload, loading: false };
    case ActionTypes.GET_NOTES_ERROR:
      return { ...state, error: action.payload, loading: false };
    case ActionTypes.GET_NOTE:
      return { ...state, loading: true };
    case ActionTypes.GET_NOTE_SUCCESS:
      return { ...state, note: action.payload, loading: false };
    case ActionTypes.GET_NOTE_ERROR:
      return { ...state, error: action.payload, loading: false };
    case ActionTypes.DELETE_NOTE:
      return { ...state, loading: true };
    case ActionTypes.DELETE_NOTE_SUCCESS:
      return { ...state, loading: false };
    case ActionTypes.DELETE_NOTE_ERROR:
      return { ...state, error: action.payload, loading: false };
    case ActionTypes.CREATE_NOTE:
      // Intentionally not setting loading to true, to prevent (in this demo case unnecessary) loading
      return state;
    case ActionTypes.CREATE_NOTE_SUCCESS:
      return { ...state, loading: false, notes: [...state.notes, action.payload] };
    case ActionTypes.CREATE_NOTE_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
