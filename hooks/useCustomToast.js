import { useContext } from "react";
import { ToastContext } from "../constants/index";

export function useCustomToast() {
  const customToast = useContext(ToastContext);
  return customToast.openDialog;
}
