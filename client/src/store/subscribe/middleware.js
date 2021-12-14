import axios from "axios";
import configData from "../../config/config.json";
import {message} from 'antd';

const BASE_ENDPOINT = `${configData.BASE_URL}`;

export const getHeaders = () => ({
    Autorization: localStorage.getItem('token'),
    'Content Type': 'application/json'
})

const createNewSubscribe = (credential) =>{
    axios.post(`${BASE_ENDPOINT} /subscribers`, credential)
    .then ((response) => {
        if(response.status === 200) {
            message.info('You have been subscribed to updates')
        }
    })
    .catch((error) => {
        const requestMessage = error.response.data.message
        if(requestMessage){
            message.warning(`${requestMessage}`)
        }
        else{
            message.warning('Somethink went wrong, please try again')
        }
    })
}

export const getSubscriber = (email) =>{
    const headers = getHeaders();
    const result = axios
        .get(`${BASE_ENDPOINT} /${email}`, {headers})
        .then((data) => data)
        .catch((err) => err.response)
        return result
}

export default createNewSubscribe;