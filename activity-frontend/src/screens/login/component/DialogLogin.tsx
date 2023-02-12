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

export const DialogLogin = () => {
  const {
    state: { openLoginEmail },
    closeDialogLogin,
  } = useApp();
  const [email, useEmail] = useState("");
  const [password, usePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const closeDialog =()=> {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEmail("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    usePassword("");
    closeDialogLogin();
  }

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
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} color="primary">
          Cancelar
        </Button>
        <Button onClick={closeDialog} color="primary">
          Ingresar
        </Button>
      </DialogActions>
    </Dialog>
  );
};