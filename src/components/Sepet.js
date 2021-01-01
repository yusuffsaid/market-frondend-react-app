import React, { useContext } from "react";
import { SepetContext } from "../App";

export default function Sepet() {
  const data = useContext(SepetContext);
let toplam =0
  data.sepet.map((urun)=>(
    toplam = toplam+(urun.price*urun.adet)
  ))
  return (

    <div className="sepet_container">
        <h3 style={{textAlign:"right",width:"100%"}}>Genel Toplam: {(toplam).toFixed(2)}</h3>

      {data.sepet.map((urun) => {
        return (
          <div className="sepet" key={urun.id}>
            <div
              className="sepet_img"
              style={{ backgroundImage: `url(${urun.img})` }}
            />
            <div className="sepet_orta">
              <h3>{urun.name}</h3>
              <h5>Birim Fiyat: {urun.price}</h5>
              <h5>Adet: {urun.adet}</h5>
            </div>
            <div className="sepet_sag">
              <div className="btn_grp">
                <button className="azalt" onClick={()=>data.azalt(urun)}>Azalt</button>
                <button className="kaldir" onClick={()=>data.sepettenKaldir(urun)}>Sepetten Kaldır</button>
                <button className="arttir"  onClick={()=>data.arttir(urun)}>Arttır</button>
              </div>
              <h5>Toplam: {(urun.price * urun.adet).toFixed(2)}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}
