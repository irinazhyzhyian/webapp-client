import axios from 'axios';
import SnackbarUtils from "../components/shared/SnackbarUtils";

export async function loginUser(credentials, saveToken) {
    axios.post(
        `${process.env.REACT_APP_URL}/auth/login`,
        credentials,
    )
        .then(({data}) => {
            if (data.error) {
                console.log(data);
            } else if (data.token) {
                saveToken(data);
            } else {
                console.log(data);
                SnackbarUtils.error(data.message)
            }
        })
        .catch((error) => console.log(error));
}

export async function registrateUser(credentials, saveToken) {
    axios.post(
        `${process.env.REACT_APP_URL}/auth/registration`,
        credentials,
    )
    .then(({data}) => {
        if (data.error) {
            console.log(data);
            SnackbarUtils.error(data.message)
        } else if (data.token) {
            saveToken(data);
            SnackbarUtils.success(data.message);
        } else {
            console.log(data);
            SnackbarUtils.error(data.message)
        }
    })
        .catch((error) => console.log(error));
}
