import React, { useContext } from "react";
import { SepetContext } from "../App";
export default function Urunler() {
  const data = useContext(SepetContext);
  return (
    <section className="urunler_container">
      {data.urunler.map((urun) => {
        return (
          <div className="urun" key={urun.id}>
            <div className="urun_img" style={{backgroundImage:`url(${urun.img})`}}></div>
            <h4 className="urun_adi">{urun.name}</h4>
            <h4 className="urun_fiyat">{urun.price}</h4>
            <button onClick={()=>{data.sepeteEkle(urun)}}>Sepete Ekle</button>
          </div>
        );
      })}
    </section>
  );
}
