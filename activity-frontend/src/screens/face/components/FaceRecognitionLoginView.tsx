import { Spinner } from 'react-bootstrap';

import { useAuth } from '../../../hooks/useAuth';
import { SizedBox } from '../../../utils/SizedBox';

interface Props {
  neutralExpression: boolean;
}

export const FaceRecognitionLoginView = ({ neutralExpression }: Props) => {

  const { state: { loading: logging } } = useAuth();

  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-3'>
      <div>
        {
          logging
            ? 'Autenticando...'
            : neutralExpression
              ? 'Por favor sonría 😃'
              : 'Estamos verificando tu rostro...'
        }
      </div>
      <SizedBox size={20.0} />
      <Spinner animation="grow" variant="primary" />
      <SizedBox size={20.0} />
      
    </div>
  )
}

