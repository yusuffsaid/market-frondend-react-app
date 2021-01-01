import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

import { Route } from "react-router-dom";

import Header from "./components/Header";
import ListBar from "./components/ListBar";
import Urunler from "./components/Urunler";
import Sepet from "./components/Sepet";
import "./styles.css";

export default function App() {
  const [urunler, setUrunler] = useState([]);
  const [sepet, setSepet] = useState([]);
  useEffect(() => {
    urunleriGetir();
  }, []);

  let urunleriGetir = (kategori = "temel-gida") => {
    axios
      .get("http://localhost:3003/products", {
        params: {
          "category.name": kategori,
          _limit: 20,
        },
      })
      .then((response) => {
        setUrunler(response.data);
      });
  };

  let sepeteEkle = (urun) => {
    let tampon = [];

    sepet.find((eleman) => eleman.id === urun.id)
      ? sepet.map((eleman) =>
          eleman.id === urun.id
            ? tampon.push({ ...eleman, adet: eleman.adet + 1 })
            : tampon.push({ ...eleman })
        )
      : tampon.push(...sepet, { ...urun, adet: 1 });
    setSepet(tampon);
  };

  let azalt = (urun) => {
    let tampon = [];

    sepet.map((eleman) =>
      eleman.id === urun.id
        ? tampon.push({
            ...eleman,
            adet: eleman.adet <= 1 ? 1 : eleman.adet - 1,
          })
        : tampon.push({ ...eleman })
    );

    setSepet(tampon);
  };
  let arttir = (urun) => {
    let tampon = [];

    sepet.map((eleman) =>
      eleman.id === urun.id
        ? tampon.push({
            ...eleman,
            adet: eleman.adet + 1,
          })
        : tampon.push({ ...eleman })
    );

    setSepet(tampon);
  };

  let sepettenKaldir = (urun) => {
    let yeniSepet = sepet.filter((eleman) => eleman.id !== urun.id);

    setSepet(yeniSepet);
  };
  let urunAra = (deger) => {
    deger = deger.length <= 1 ? "" : deger
    axios
      .get("http://localhost:3003/products", {
        params: {
          q: deger,
          _limit:20
        },
      })
      .then((response) => {
        setUrunler(response.data);
      });
  };

  return (
    <SepetContext.Provider
      value={{
        urunler,
        urunleriGetir,
        sepeteEkle,
        sepet,
        azalt,
        arttir,
        sepettenKaldir,
        urunAra
      }}
    >
      <Header></Header>
      <div className="main_container">
        <Route
          path="/"
          exact
          render={() => (
            <React.Fragment>
              <ListBar></ListBar>
              <Urunler></Urunler>
            </React.Fragment>
          )}
        />
      </div>
      <Route path="/sepet" component={Sepet} />
    </SepetContext.Provider>
  );
}

export const SepetContext = createContext();
