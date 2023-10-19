import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export class Alert {
  static mySwal = withReactContent(Swal);

  static showError = async (
    message: string,
    opts?: { title?: string; timer?: number }
  ) => {
    await this.mySwal.fire({
      icon: "error",
      title: opts?.title ?? "Ups!",
      text: message,
      timer: opts?.timer ? opts?.timer * 1000 : undefined,
    });
  };
  static showWarning = async (
    message: string,
    opts?: { title?: string; timer?: number }
  ) => {
    await this.mySwal.fire({
      icon: "warning",
      title: opts?.title ?? "",
      text: message,
      timer: opts?.timer ? opts?.timer * 1000 : undefined,
    });
  };

  static showSuccess = async (params: {
    message: string;
    title?: string;
    timer?: number;
    showConfirmButton?: boolean;
  }) => {
    const { title, message, timer, showConfirmButton } = params;
    await this.mySwal.fire({
      icon: "success",
      title: title ?? "Genial",
      text: message,
      timer: timer,
      showConfirmButton: showConfirmButton ?? true,
    });
  };
}



