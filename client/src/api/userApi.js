// import axios, { setAuthToken } from "./Api";
// import { setUser, isAuth } from "../store/actions/authAction";

// export async function logOrRegisterCustomer(response) {
//   try {
//     axios
//       .post("/logingoogle", { tokenId: response.tokenId })
//       .then((response) => {
//         console.log("response from baze", response);
//       });
//   } catch (err) {
//     console.log(err.response.data);
//   }
// }

// export async function loginCustomer(info, dispatch) {
//   try {
//     await axios.post(`customers/login`, info).then((res) => {
//       //закинли токен если успешен в сторедж что бы потом его подлаживать под запросы
//       sessionStorage.setItem("token", res.data.token);
//       //запись токена в покупателя
//       dispatch(isAuth({ t: res.data.token }));
//       //запись в голову запросов
//       setAuthToken(res.data.token);
//     });
//     //юзера получили по токену
//     return await axios.get(`customers/customer`).then((res) => {
//       //докинули токен в обьект юзера
//       dispatch(isAuth(res.data));
//     });
//   } catch (e) {
//     console.log(e.response.data);
//   }
// }
