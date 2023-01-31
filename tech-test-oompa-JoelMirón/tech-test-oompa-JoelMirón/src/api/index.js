import axios from "axios";

export const getContent = async (api) => {
    let response = await axios.get(api);
    return response
}