import React, { useEffect, useState } from "react";
import axios from "axios";

const ComA = () => {
  const [num, setNum] = useState();
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res.data.name);
    }
    getData();
  });

  return (
    <div>
      <h1>You choose {num}</h1>
      <select value={num} onChange={(e) => setNum(e.target.value)}>
        <option value="1">1</option>
        <option value="25 ">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
};

export default ComA;
