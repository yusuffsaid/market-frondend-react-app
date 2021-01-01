import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SepetContext } from "../App";

export default function Header() {
  const data = useContext(SepetContext);
  const [deger, setDeger] = useState("");
  return (
    <header>
      <input
        value={deger}
        onChange={(e) => {
              setDeger(e.target.value)
              data.urunAra(deger)
        }}
        placeholder="Aranacak Ürün..."
        name="arama"
      />
      <h5 style={{ cursor: "pointer" }}>
        <Link to="/">ANASAYFA</Link>
      </h5>
      <h5 style={{ cursor: "pointer" }}>
        <Link to="/sepet">SEPET({data.sepet.length})</Link>
      </h5>
    </header>
  );
}
