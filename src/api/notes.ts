import axios from "axios";

const getNotes = async () => {
  try {
    const result = await axios.get("http://private-9aad-note10.apiary-mock.com/notes");
    return result.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getNote = async (id: number) => {
  try {
    const result = await axios.get(`http://private-9aad-note10.apiary-mock.com/notes/${id}`);
    return result.data;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteNote = async (id: number) => {
  try {
    const result = await axios.delete(`http://private-9aad-note10.apiary-mock.com/notes/${id}`);
    return result.data;
  } catch (error) {
    throw new Error(error);
  }
};

const createNote = async (text: string) => {
  try {
    const result = await axios.post("http://private-9aad-note10.apiary-mock.com/notes", { text });
    return result.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default {
  getNotes,
  getNote,
  deleteNote,
  createNote,
};
