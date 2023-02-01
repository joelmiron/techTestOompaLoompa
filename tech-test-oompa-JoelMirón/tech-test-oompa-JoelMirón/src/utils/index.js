import axios from "axios";
const moment = require("moment");


export const getContent = async (api) => {
  let response = await axios.get(api);
  return response;
};

export const removeDates = (type) => {
  localStorage.removeItem(type + "clearDate");
  localStorage.removeItem(type + "actualdate");
};

export const setDates = (type, actualDate, clearDate) => {
  window.localStorage.setItem(type + "actualDate", JSON.stringify(actualDate));
  window.localStorage.setItem(type + "clearDate", JSON.stringify(clearDate));
};

export const removeLocalStorageItems = (type) => {
  localStorage.removeItem(type + "storagedOompaLoompa");
  localStorage.removeItem("allstoragedOompaLoompas");
  localStorage.removeItem("nextPage");
};


export const getStoragedContent = (type) =>{
    let actualDateStorage = JSON.parse(window.localStorage.getItem(type + "actualDate"));
    let refreshingDateStorage = JSON.parse(window.localStorage.getItem(type + "clearDate"));
    let nextPage = JSON.parse(window.localStorage.getItem("nextPage")) ? JSON.parse(window.localStorage.getItem("nextPage")) : 1;
    let actualDate = moment().format("LLL");
    let clearDate = moment().add(1, "day").format("LLL");
    return [actualDateStorage,refreshingDateStorage,nextPage,actualDate,clearDate]
}