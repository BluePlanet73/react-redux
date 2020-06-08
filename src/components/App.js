import * as React from 'karet';
import Atom, {holding, Molecule} from 'kefir.atom';
// import React, { useState, useEffect } from 'react';
import * as U from 'karet.util';
import * as L from 'partial.lenses';

const store = {
  form: {
    attr1: {min: 10, max: 100},
    attr2: {min: 10, max: 100}
  },
  priceSearch: {
    minPrice: 100,
    maxPrice: 200
  }
}
const global = U.atom(store);

function NumberInput3({number}) {
  return <input type="number" value={number} onChange={e => {
    U.set(number, e.target.value === "" ? undefined : +e.target.value)
    U.set(U.view(["form", "attr1", "min"], global), 7878787);
    console.log(global.get())

  }}/>
}

function NumberInput4() {

  return <NumberInput3/>
}

// function NumberInput2({min, max, value, type, g}) {
//   // console.log(min, max,value)
//   return (
//     <div>
//       <input type="number" value={value}
//         // U.set(number, e.target.value === "" ? undefined : +e.target.value)
//              onChange={e => {
//                const changeValue = e.target.value;
//                if (g) {
//                  U.set(value, Number(changeValue))
//                  return false
//                }
//                if (!type && max.get() >= changeValue) {
//                  U.set(value, Number(changeValue))
//                }
//                if (type && min.get() <= changeValue) {
//                  U.set(value, Number(changeValue))
//                }
//              }}/>
//     </div>
//   )
// }

function Range({min, max, g}) {
  // const check = U.combine([min, max], (min, max) => min + max)
  const molecule = new Molecule({min, max});
  // const dsada = U.atom({dsaadL:1,dsa:2});
  const lens = L.setter((v, d, i) => {
    const {min, max} = v;
    if (min <= max) {
      return v
    }
    return d;
  })

  const localMin = U.view([lens, "min", L.defaults("1")], molecule)
  const localMax = U.view([lens, "max", L.define("1111111")], molecule)


  return (
    <div>
      <NumberInput3 number={localMin}/>
      ~
      <NumberInput3 number={localMax}/>
    </div>
  )
}

function Form({form}) {
  const attr1Min = U.view(["attr1", "min"], form)
  const attr1Max = U.view(["attr1", "max"], form)
  const attr2Min = U.view(["attr2", "min"], form)
  const attr2Max = U.view(["attr2", "max"], form)

  return (
    <form action="">
      <div>
        <label htmlFor="">attr1</label>
        <Range min={attr1Min} max={attr1Max}/>
      </div>
      <div>
        <label htmlFor="">attr2</label>
        <Range min={attr2Min} max={attr2Max}/>
      </div>
    </form>
  )
}

function PriceSearch({priceSearch}) {
  const min = U.view(["minPrice"], priceSearch);
  const max = U.view(["maxPrice"], priceSearch);

  return (
    <div>
      price:
      <Range min={min} max={max} g={1}/>
      <button>search</button>
    </div>
  )
}

function App() {
  const form = U.view(["form"], global);
  const priceSearch = U.view(["priceSearch"], global);

  return (
    <div>
      <Form form={form}/>
      <PriceSearch priceSearch={priceSearch}/>
    </div>
  )
}

export default App;
