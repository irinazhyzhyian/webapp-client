import axios from "axios";
import { serialize } from "object-to-formdata";
import { AccreditationMainDocs } from "../models/accreditation/AccreditationMainDocs";

export async function getAccreditationMainDocs(cancelToken, apiDto) {
    const url = `${process.env.REACT_APP_URL}/accreditation/mainDocs`;
    const configs = {
        cancelToken: cancelToken.token,
    };
        
    const response = await axios.post(url, serialize(apiDto), configs);
    return new AccreditationMainDocs(response);
}

export async function getChangesToAccreditation(cancelToken, apiDto) {
    const url = `${process.env.REACT_APP_URL}/accreditation/changes`;
    const configs = {
        cancelToken: cancelToken.token,
    };
        
    const response = await axios.post(url, serialize(apiDto), configs);
    return response;
}