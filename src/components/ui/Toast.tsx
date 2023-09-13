"use client";

import React from "react";
import localFont from "next/font/local";

const pixel = localFont({ src: "../../../public/fonts/PixeloidSans.ttf" });

import { ToastOptions, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastTypes extends ToastOptions {
  message: string;
}

export const SuccessToast = ({ type, message }: ToastTypes) => {
  toast.success(<span className={pixel.className}>{message}</span>, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  return <ToastContainer />;
};

export const ErrorToast = ({ type, message }: ToastTypes) => {
  toast.error(<span className={pixel.className}>{message}</span>, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  return <ToastContainer />;
};
