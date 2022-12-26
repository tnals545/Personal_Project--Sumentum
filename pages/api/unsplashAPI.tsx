import axios from "axios";

export const getImgAPI = async () => {
  return await axios.get(
    `https://api.unsplash.com/photos/random/?query=nature&?orientation=landscape&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_KEY}`
  );
};
