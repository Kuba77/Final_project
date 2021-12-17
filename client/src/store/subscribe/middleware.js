import axios from "axios";
import {message} from 'antd';
import configData from "../../config/config.json";

const BASE_URL = configData.SUBSCRIBERS;

const createNewSubscribe = (credentials) =>{
    console.log(credentials);
    axios.post(BASE_URL, credentials)
    .then ((response) => {
        if(response.status === 200) {
            message.info('Thanks for subscribed')
        }
    })
    .catch((error) => {
            const requestMessage = error.response.data.message;
            if(requestMessage){
                message.warning(`${requestMessage}`)
            }
            else{
                message.warning('Somethink wrong') 
            }
        })




}
    
// export const getHeaders = () => ({
//     Autorization: localStorage.getItem('token'),
//     'Content Type': 'application/json'
// })

// export const getSubscriber = (email) =>{
//     const headers = getHeaders();
//     const result = axios
//         .get(`${BASE_URL} /${email}`, {headers})
//         .then((data) => data)
//         .catch((err) => err.response)
//         return result
// }


export default createNewSubscribe;










// export default createNewSubscriber;