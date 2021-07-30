import React, { useState } from 'react'
import GridLayoutHome from '../layout/GridLayout';
import { Responsive, WidthProvider } from 'react-grid-layout';
import _ from "lodash";
import { useEffect } from 'react';

let idCounter = 100;

const getId = () => {
  idCounter++;

  return idCounter.toString();
};

const GridLayoutBasics = () => {
  const ResponsiveGridLayout = WidthProvider(Responsive);
  const layouts = [
    {i: 'header', x: 0, y: 0, w: 12, h: 0.5, static: true},
    {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
    {i: 'c', x: 4, y: 0, w: 1, h: 2},
    {i: 'footer', x: 0, y: 10, w: 12, h: 0.5, static: true}
  ];
  const [layout,setLayout] = useState(layouts)

  useEffect(()=>{
    console.log(layout);
  },[layout])

  const generateDOM=()=> {
    // const _this = this;
    return _.map(layout, function(l, i) {
      console.log(l);
      return (
        <div key={i} className={l.static ? "static" : ""}>
          {l.static ? (
            <span
              className="text"
              title="This item is static and cannot be removed or resized."
            >
              Static - {i}
            </span>
          ) : (
            <div className="text">{i}</div>
            // <div className="text">{i}<Icon name={i} color="red" onClick={this.setState(
            //   {...this.state,layouts:{lg: layouts.lg.filter(item => item.i !== "7") }}
            // )} className="span-right" name="trash"/></div>
          )}
        </div>
      );
    });
  }

  const addNewItem = () => {
    const newItem = { x: 0, y: 0, w: 2, h: 2, i: getId() };
    // console.log(layout[0].x);

    // layout.some(item => console.log(item))
    // if (layout.some(item => item.x === 0 && item.y === 0)) {
    //   setLayout(layout=> layout.map(item=>{
    //     if(item.x === 0) {
    //       return { y: item.y++, ...item};
    //     }
    //   }).concat([newItem]))
    // } else {
      setLayout(layout.concat([newItem]));
    // }
  };

  return (
    <GridLayoutHome title="Grid Layout">
      <button onClick={addNewItem}>Add item</button>
      <ResponsiveGridLayout className="layout" layout={layout}
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
        {/* {generateDOM} */}
        {layout.map((item,idx)=> (<div className={item.static ? "static" : "" } data-grid={{...item}} style={{cursor:"move"}} key={idx}>
          {item.static? `Static - ${item.i}` :item.i}
          </div>)
        )}
        {/* {layout.map((item,idx)=> console.log(item) */}

      </ResponsiveGridLayout>
    </GridLayoutHome>
  )
}

export default GridLayoutBasics
