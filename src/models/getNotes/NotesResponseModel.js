import dayjs from "dayjs";

export class NotesResponseModel {
    constructor(response) {
        this.setNotes(response);
    }

    setNotes(response) {
        if (!response) {
            this.plans = [];
            return;
        }
        const getDate = (item) => {
            if (item.date)
                return dayjs(item.date).format("YYYY-MM-DD HH:mm");
            if (item.birthday)
                return dayjs(item.birthday).format("YYYY-MM-DD HH:mm");
            return "";
        }
        this.plans = response.data.map(item => ({
            date: getDate(item),
            note: item.note,
            _id: item._id
        }));
    }
}