import { SagaIterator } from "redux-saga";
import { call, fork, put, takeLatest } from "redux-saga/effects";
import Api from "../../../api";
import {
  createNoteError,
  createNoteSuccess,
  deleteNoteError,
  deleteNoteSuccess,
  getNoteError,
  getNotesError,
  getNotesSuccess,
  getNoteSuccess,
} from "./actions";
import { ActionTypes, CreateNoteAction, DeleteNoteAction, GetNoteAction } from "./types";

function* getNotes() {
  yield takeLatest(ActionTypes.GET_NOTES, function* handle() {
    try {
      const result = yield call(Api.notes.getNotes);
      yield put(getNotesSuccess(result));
    } catch (error) {
      console.log(error);
      yield put(getNotesError(error));
    }
  });
}

function* getNote() {
  yield takeLatest(ActionTypes.GET_NOTE, function* handle(action: GetNoteAction) {
    try {
      const id = action.payload;
      const result = yield call(Api.notes.getNote, id);
      yield put(getNoteSuccess(result));
    } catch (error) {
      console.log(error);
      yield put(getNoteError(error));
    }
  });
}

function* deleteNote() {
  yield takeLatest(ActionTypes.DELETE_NOTE, function* handle(action: DeleteNoteAction) {
    try {
      const id = action.payload;
      yield call(Api.notes.deleteNote, id);
      yield put(deleteNoteSuccess());
    } catch (error) {
      console.log(error);
      yield put(deleteNoteError(error));
    }
  });
}

function* createNote() {
  yield takeLatest(ActionTypes.CREATE_NOTE, function* handle(action: CreateNoteAction) {
    try {
      const text = action.payload;
      const result = yield call(Api.notes.createNote, text);
      yield put(createNoteSuccess(result));
    } catch (error) {
      console.log(error);
      yield put(createNoteError(error));
    }
  });
}

export default function* notesSagas(): SagaIterator {
  yield fork(getNotes);
  yield fork(getNote);
  yield fork(deleteNote);
  yield fork(createNote);
}
