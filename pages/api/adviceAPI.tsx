import axios from "axios";

export const getAdvice = async () => {
  return await axios.get(`https://api.adviceslip.com/advice`);
};
