import axios from "axios";

const SHOES_ENDPOINT = import.meta.env.VITE_SHOES_ENDPOINT;

const fetchShoesData = async () => {
  try {
    const res = await axios.get(SHOES_ENDPOINT);
    return res.data;
  } catch (err) {
    console.log("Error fetching shoes: ", err);
  }
};

export default fetchShoesData;
