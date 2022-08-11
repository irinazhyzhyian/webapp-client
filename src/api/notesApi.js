import axios from "axios";
import { serialize } from "object-to-formdata";
import { CreateNoteRequestModel } from "../models/createNote/CreateNoteRequestModel";
import { NotesResponseModel } from "../models/getNotes/NotesResponseModel";

export async function getNotes(cancelToken) {
    const url = `${process.env.REACT_APP_URL}/notes`;
    const configs = {
        cancelToken: cancelToken.token,
    };
        
    const response = await axios.get(url, configs);
    return new NotesResponseModel(response);
}

export async function addNotes(cancelToken, apiDto) {
    const url = `${process.env.REACT_APP_URL}/notes`;
    const configs = {
        cancelToken: cancelToken.token,
    };
    const requestModel = new CreateNoteRequestModel(apiDto);
    const response = await axios.post(url, requestModel.data, configs);
    return response;
}

export async function deleteNotes(cancelToken, apiDto) {
    const url = `${process.env.REACT_APP_URL}/notes/${apiDto._id}`;
    const configs = {
        cancelToken: cancelToken.token,
    };
    const response = await axios.delete(url, configs);
    return response;
}