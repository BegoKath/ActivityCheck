import axios from "axios";

export class Api {
  private static service = axios.create({
    timeout: 10 * 1000,
  });
  static post = async (
    url: string,
    body?: any,
    token?: string
  ): Promise<any> => {
    try {
      const res = await this.service.post(url, body, {
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
      });
      if (!res.data) {
        return res;
      }
      return res.data;
    } catch (error) {
      return "Error";
    }
  };
  static get = async (url: string): Promise<any> => {
    try {
      const res = await this.service.get(url, {
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
      });
      if (!res.data) {
        return res;
      }
      const data = res.data;
      return data;
    } catch (error) {
      return error;
    }
  };
  static delete = async (url: string): Promise<any> => {
    try {
      const res= await this.service.delete(url,{
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
      });
      if (!res.data) {
        return res;
      }
      const data = res.data;
      return data;
    } catch (error) {
      return error;
    }
  };
  static put = async (url: string): Promise<any> => {
    try {
      const res= await this.service.put(url,{
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
      });
      if (!res.data) {
        return res;
      }
      const data = res.data;
      return data;
    } catch (error) {
      return error;
    }
  };
}
