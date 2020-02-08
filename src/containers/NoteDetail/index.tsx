import CircularProgress from "@material-ui/core/CircularProgress";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { matchPath } from "react-router";
import { useSelector } from "../../store";
import { getNote } from "../../store/modules/notes/actions";
import { Routes } from "../../utils/routes";

export default () => {
  const { note, loading, error } = useSelector(state => state.notes);
  const {
    location: { pathname },
  } = useSelector(state => state.router);
  const dispatch = useDispatch();

  useEffect(() => {
    const match = matchPath(pathname, { path: Routes.NOTE_DETAIL });
    const params: any = match?.params;
    if (params.id) {
      dispatch(getNote(params.id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  if (error) {
    return <div>Error..</div>;
  }

  if (loading) {
    return <CircularProgress />;
  }
  return <div>{note?.title}</div>;
};
