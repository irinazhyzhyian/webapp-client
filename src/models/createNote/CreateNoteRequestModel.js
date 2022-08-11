import { serialize } from "object-to-formdata";

export class CreateNoteRequestModel {
    constructor(apiDto) {
        const body = {
            note: apiDto.note,
            date: apiDto.date
        };
        
        this.data = serialize(body);
    }
}