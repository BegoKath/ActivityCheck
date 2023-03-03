import { Api } from "./Api";

export class FacesService {
  static loadFaces = async (): Promise<any> => {
    const url = "http://localhost:29513/api/Face";
    return await Api.get(url);
  };
  static registerFace = async (props: {
    idTeacher: number;
    clfFace1: string;
    clfFace2: string;
    clfFace3: string;
  }): Promise<any> => {
    const { idTeacher, clfFace1, clfFace2, clfFace3 } = props;
    const url = "http://localhost:29513/api/Face";
    const body = {
      idTeacher,
      clfFace1,
      clfFace2,
      clfFace3,
    };
    return await Api.post(url, body);
  };
}
