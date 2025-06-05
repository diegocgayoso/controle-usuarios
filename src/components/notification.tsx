"use client"
import { toast, ToastContainer } from "react-toastify";

export default function Toastify() {
//   const notify = () => toast("woow so easy !");

  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
}

export {toast};
