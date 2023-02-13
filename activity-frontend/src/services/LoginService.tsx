import { Api } from "./Api";

export class LoginService {
  static loginWithEmail = async (email:string,password:string): Promise<any> => {
    const url = "http://localhost:29513/api/login/email";
    const body = {
      email: email,
      password: password,
    };
    return Api.post(url, body);
  };
}
