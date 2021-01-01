import React, { useContext,useState } from "react";
import { SepetContext } from "../App";
export default function ListBar() {
  const data = useContext(SepetContext);
  const [active, setActive] = useState("")
  return (
    <section className="listbar">
      <ul>
        {kategoriler.map((kategori) => {
          return (
            <li key={kategori.id} className={ active === kategori.id ? "aktif_kategori" : null}>
              <p onClick={()=>{
                data.urunleriGetir(kategori.name)
                setActive(kategori.id)
                }}>{kategori.title}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

const kategoriler = [
  { id: 1, name: "temel-gida", title: "Temel Kahvaltı" },
  { id: 2, name: "kahvaltilik-sarkuteri", title: "Kahvaltı & Şarküteri" },
  { id: 3, name: "atistirmalik", title: "Atıştırmalık" },
  { id: 4, name: "icecek", title: "İçecek" },
  { id: 5, name: "temizlik", title: "Temizlik" },
  { id: 6, name: "kisisel-bakim", title: "Kişisel Bakım" },
  { id: 7, name: "bebek-urunleri", title: "Bebek Ürünleri" },
  { id: 8, name: "gida-disi", title: "Gıda Dışı" },
];
