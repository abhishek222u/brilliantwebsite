import React from 'react'
import  { useState, useEffect } from 'react';
import ApiName from "C:/Users/abhishek/Desktop/brilliant website/brilliantwebsite/src/apiData/ApiName";
import Slider from 'react-slider';


const MIN = parseFloat(0);
const MAX = parseFloat(4);

const DIAMIN = 10000;
const DIAMAX = 100000;

const LabDiamonds = () => {
  const [values, setValues] = useState([MIN, MAX]);

  const [diamondprice, setDiamondPrice] = useState([DIAMIN, DIAMAX]);

  const [filtereddata, setFilteredData] = useState([]);

  const [search, setSearch] = useState('');

  function eventHandler(value) {
    setSearch(value);
  }

  const filterData = () => {
    const filtered = ApiName.filter(function (item) {
      if (item.shape.toLowerCase() === search.toLowerCase()) {
        if (item.carat >= values[0] && item.carat <= values[1]) {
          return item.price >= diamondprice[0] && item.price <= diamondprice[1];
        }
      }
    });
    setFilteredData(filtered);
  };

  useEffect(() => {
    filterData();
  }, [values, search, diamondprice]);

  return (
    <>
      <div className="main-content">
        <div className="container">
        <h1>This is the lab Diamonds page</h1>
          <div className="main-content-p">
            <p onClick={() => eventHandler("Round")}>Round</p>
            <p onClick={() => eventHandler("Oval")}>Oval</p>
            <p onClick={() => eventHandler("Cushion")}>Cushion</p>
            <p onClick={() => eventHandler("Pear")}>Pear</p>
            <p onClick={() => eventHandler("Princess")}>Princess</p>
            <p onClick={() => eventHandler("Emerald")}>Emerald</p>
            <p onClick={() => eventHandler("Marquise")}>Myarquise</p>
            <p onClick={() => eventHandler("Asscher")}>Asscher</p>
            <p onClick={() => eventHandler("Radient")}>Radient</p>
            <p onClick={() => eventHandler("Heart")}>Heart</p>
          </div>

          
          <h3>Price <span>Range</span></h3>
          <div className="values">${values[0]} - ${values[1]}</div>

          <label>Carat </label>
          <Slider
            className='slider'
            onChange={setValues}
            value={values}
            min={MIN}
            max={MAX}
          />

          <div className="values">${diamondprice[0]} - ${diamondprice[1]}</div>
          <label>Diamond Price</label>
          <Slider
            className='slider'
            onChange={setDiamondPrice}
            value={diamondprice}
            min={DIAMIN}
            max={DIAMAX}
          />

          <div className="resultdata">
            <table>
              <thead>
                <tr>
                  <th>Sno</th>
                  <th>Shape</th>
                  <th>Price</th>
                  <th>Carat</th>
                </tr>
              </thead>
              <tbody>
                {
                  filtereddata.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{item.shape}</td>
                        <td>{item.price}</td>
                        <td>{item.carat}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default LabDiamonds
