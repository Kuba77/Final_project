import { message } from "antd";
import "antd/dist/antd.css";


export const successMassage = () => message.success("Thanks for subscribe");
export const warningMessage = () => message.warning("Something wrong, try again latter");
export const errorMessage = () => message.error("Something wrong");

export const successLogin = () => message.success("Welcome home");
