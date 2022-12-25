import axios from "axios";

export const getAdviceAPI = async () => {
  return await axios.get(`https://api.adviceslip.com/advice`);
};
