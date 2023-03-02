import { Button } from "@mui/material";
import { SizedBox } from "../../../utils/SizedBox";


interface Props {
  error: string;
  loadModels: () => void,
}

export const ErrorOptions = ({ error, loadModels }: Props) => {
  return (
    <div className='d-flex flex-column align-items-center'>
      {error}      
      <SizedBox size={20.0} />
      <Button
        disableElevation
        onClick={loadModels}
      >
        Volver a intentar
      </Button>
    </div>
  )
}
