import category from "./category";
const API_URL = process.env.VUE_APP_API_URL;

var product = {
  async create({ title, category, item, imageUrl, desc }) {
    const res = await fetch("http://localhost:3001/product/create", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title, category, item, imageUrl, desc  }),
    });

    const result = await res.json();
    return result;
  },
  async all() {
    const res = await fetch("http://localhost:3001/product/all", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
        Origin: "http://localhost:3000",
      },
    });

    const result = await res.json();
    if (!result?.length) return [];

    return result;
  },
  
  async productByCatAndItem(category, item) {
    const res = await fetch(`http://localhost:3001/product/all/${category}/${item}`, {

      method: "GET",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
        Origin: "http://localhost:3000",
      },
    });

    const result = await res.json();
    if (!result?.length) return [];

    return result;
  }
}

export default product
