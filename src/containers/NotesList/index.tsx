import CircularProgress from "@material-ui/core/CircularProgress";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Note from "../../components/Note";
import { useSelector } from "../../store";
import { getNotes } from "../../store/modules/notes/actions";

export default () => {
  const { notes, loading, error } = useSelector(state => state.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  if (error) {
    return <div>Error..</div>;
  }

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div>
      {notes.map((note, index) => (
        <Note key={index} note={note} dispatch={dispatch} />
      ))}
    </div>
  );
};
