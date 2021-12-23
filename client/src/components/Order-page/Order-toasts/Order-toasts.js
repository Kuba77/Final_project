import { toast } from "react-toastify";

export const successOrderNotification = (orderNumber) => {
  toast.success(`Your order ${orderNumber} is success`, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 8000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
