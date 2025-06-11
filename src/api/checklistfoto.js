import axios from "axios";
import { ENV } from "../utils";
import { storageCrtl } from "./storage";


async function verChecklistFoto(id) {
    try {
      const url = `${ENV.API_URL}${ENV.ENDPOINTS.CHECKLISTFOTOS}&id=${id}`;
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

  async function crearChecklistFoto(id,nombre,foto) {

    const url = `${ENV.API_URL}${ENV.ENDPOINTS.CHECKLISTFOTOS}`;
    const token = await storageCrtl.getToken();
    try {
              
        const res = await axios.post(url, {
            id,
            nombre,
            foto
        },{
          headers: {
            Authorization: token, 
           "Content-Type": "application/x-www-form-urlencoded",
          }
        })

        return res.data

      } catch (error) {
        console.error(error);
      }
    
  }


  async function deleteChecklistFoto(id) {

    const url = `${ENV.API_URL}${ENV.ENDPOINTS.CHECKLISTFOTOS}&id=${id}`;
    const token = await storageCrtl.getToken();

    try {
              
        const res = await axios.delete(url,{
          headers: {
            Authorization: token, 
           "Content-Type": "application/x-www-form-urlencoded",
          }
        })

        return res.data

      } catch (error) {
        console.error(error);
      }
    
  }
  
  
  export const checklistfotoCtrl = {
    verChecklistFoto,
    crearChecklistFoto,
    deleteChecklistFoto,
  };
