import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useApp } from "../../../hooks/useApp";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import { useAuth } from "../../../hooks/useAuth";
import { Alert } from "../../../utils/Alert";
import { useNavigate } from "react-router-dom";

export const DialogLogin = () => {
  const {
    state: { openLoginEmail },
    closeDialogLogin,
  } = useApp();
  const { loginWithEmail } = useAuth();
  const [email, useEmail] = useState("");
  const [password, usePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  var CryptoJS = require("crypto-js");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const closeDialog = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEmail("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    usePassword("");
    closeDialogLogin();
  };

  const handleChange =
    (value: string) => (event: ChangeEvent<HTMLInputElement>) => {
      if (value === "email") {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEmail(event.target.value);
      }
      if (value === "password")
        // eslint-disable-next-line react-hooks/rules-of-hooks
        usePassword(event.target.value);
    };

  const login = async () => {
    var encrypted = CryptoJS.AES.encrypt(email, "Egresados");

    const res = await loginWithEmail(email, password);

    if (res === "OK") {
      closeDialog();
      await Alert.showSuccess({ message: "Inicio de sesión con exito" });
      navigate("/teacher");
    } else {
      if (res === "PASSWORD") {
        closeDialog();
        await Alert.showError("Contraseña incorrecta. Vuelva a intentar.");
      } else if (res === "ERROR") {
        closeDialog();
        await Alert.showError(
          "El correo electrónico que ingresaste no está conectado a una cuenta. Registrate e inicia sesión."
        );
      } else if (res === "ADMIN") {
        closeDialog();
        navigate(`/admin?code=${encrypted.toString()}`);
        await Alert.showSuccess({
          message: "Inicio de sesiòn como administrador.",
        });
      } else {
        closeDialog();
        await Alert.showError("Error: 404");
      }
    }
  };
  return (
    <Dialog open={openLoginEmail} onClose={closeDialog}>
      <DialogTitle style={{ textAlign: "center" }}>Iniciar Sesión</DialogTitle>
      <DialogContent>
        <TextField
          required
          style={{ width: "90%", margin: "20px" }}
          label={"Correo Institucional"}
          value={email}
          variant="standard"
          type="email"
          onChange={handleChange("email")}
          InputProps={{
            style: { fontSize: 20, fontFamily: "'Quattrocento', 'serif'" },
          }} // font size of input text
          InputLabelProps={{
            style: { fontSize: 20, fontFamily: "'Quattrocento', 'serif'" },
          }}
        />
        <TextField
          required
          style={{ width: "90%", margin: "20px" }}
          label={"Contraseña"}
          value={password}
          variant="standard"
          type={showPassword ? "text" : "password"}
          onChange={handleChange("password")}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
            style: { fontSize: 20, fontFamily: "'Quattrocento', 'serif'" },
          }} // font size of input text
          InputLabelProps={{
            style: { fontSize: 20, fontFamily: "'Quattrocento', 'serif'" },
          }}
        />
        {}
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} color="primary">
          Cancelar
        </Button>
        <Button onClick={login} color="primary">
          Ingresar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
