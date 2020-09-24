import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID gXG2Wo0dFRDDMsvHJflecKNGzD7IivYosUjiWd7GYIo",
  },
});
