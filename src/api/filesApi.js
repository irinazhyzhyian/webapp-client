import axios from "axios";
import { serialize } from "object-to-formdata";

export async function getDocumentByType(cancelToken, apiDto) {
    const url = `${process.env.REACT_APP_URL}/files/docsByType`;
    const configs = {
        cancelToken: cancelToken.token,
    };
        
    const response = await axios.post(url, serialize(apiDto), configs);
    return response;
}

export async function getDocumenType(cancelToken, apiDto) {
    const url = `${process.env.REACT_APP_URL}/general/documentType`;
    const configs = {
        cancelToken: cancelToken.token,
    };
        
    const response = await axios.get(url, serialize(apiDto), configs);
    return response;
}

export async function addDocumnet(cancelToken, apiDto) {
    const url = `${process.env.REACT_APP_URL}/files/docs`;
    const configs = {
        cancelToken: cancelToken.token,
    };
        
    const response = await axios.post(url, serialize(apiDto), configs);
    return response;
}

export async function deleteDocument(cancelToken, apiDto) {
    const url = `${process.env.REACT_APP_URL}/files/docs/${apiDto.id}`;
    const configs = {
        cancelToken: cancelToken.token,
    };
        
    const response = await axios.delete(url, configs);
    return response;
}