import axios from "axios";

export const API = "https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas"


export const getContent = async (api) =>{
    let response = await axios.get(api);
   
   return response 
}