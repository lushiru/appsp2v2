import axios from "axios";
import { ENV } from "../utils";
import { storageCrtl } from "./storage";


async function verRecibidos() {
    try {
      const url = `${ENV.API_URL}${ENV.ENDPOINTS.MENSAJERIA}&recibidos=ok`;
      const token = await storageCrtl.getToken();
  
      const paramsTemp = {      
        headers: {
          Authorization: token,          
          },
      };
  
      const response = await axios.get(url,paramsTemp);
  
      if (response.status !== 200) throw response;
  
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async function crearMensaje(usuarios,mensaje) {

    const url = `${ENV.API_URL}${ENV.ENDPOINTS.MENSAJERIA}`;
    const token = await storageCrtl.getToken();

    const bodyFormData = new FormData();
    bodyFormData.append("users","ok");
    let i=0;
    usuarios.forEach((user) => {
        bodyFormData.append('usuarios['+i+']', user);
        bodyFormData.append('mensaje['+i+']', mensaje);
        i++;
    });

    try {
              
        const res = await axios.post(url,bodyFormData,{
          headers: {
            Authorization: token,
            'Content-Type': 'multipart/form-data'
          }
        })

        return res.data

      } catch (error) {
        console.error(error);
      }
    
  }

  async function crearMensaje2(usuarios,mensaje) {

    const url = `${ENV.API_URL}${ENV.ENDPOINTS.MENSAJERIA}`;
    const token = await storageCrtl.getToken();

    const bodyFormData = new FormData();
    bodyFormData.append("trabajadores","ok");
    let i=0;
    usuarios.forEach((user) => {
        bodyFormData.append('usuarios['+i+']', user);
        bodyFormData.append('mensaje['+i+']', mensaje);
        i++;
    });

    try {
              
        const res = await axios.post(url,bodyFormData,{
          headers: {
            Authorization: token,
            'Content-Type': 'multipart/form-data'
          }
        })

        return res.data

      } catch (error) {
        console.error(error);
      }
    
  }

  async function verEnviados() {
    try {
      const url = `${ENV.API_URL}${ENV.ENDPOINTS.MENSAJERIA}&enviados=ok`;
      const token = await storageCrtl.getToken();
  
      const paramsTemp = {      
        headers: {
          Authorization: token,          
          },
      };
  
      const response = await axios.get(url,paramsTemp);
  
      if (response.status !== 200) throw response;
  
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async function leerUsuarios() {
    try {
      const url = `${ENV.API_URL}${ENV.ENDPOINTS.MENSAJERIA}`;
      const token = await storageCrtl.getToken();
  
      const paramsTemp = {      
        headers: {
          Authorization: token,          
          },
      };
  
      const response = await axios.get(url,paramsTemp);
  
      if (response.status !== 200) throw response;
  
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  
  export const mensajeriaCtrl = {
    verRecibidos,
    crearMensaje,
    crearMensaje2,
    verEnviados,
    leerUsuarios,
  };
