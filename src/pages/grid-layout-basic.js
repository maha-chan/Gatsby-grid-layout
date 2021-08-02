import React, { useState,useCallback } from 'react'
import GridLayoutHome from '../layout/GridLayout';
import { Responsive, WidthProvider } from 'react-grid-layout';
// import _ from "lodash";
import TemplateHeader from '../components/TemplateHeader';
import TemplateFooter from '../components/TemplateFooter';
import TemplateImage from '../components/TemplateImage';

let idCounter = 100;

const getId = () => {
  idCounter++;

  return idCounter.toString();
};

const GridLayoutBasics = () => {
  const ResponsiveGridLayout = WidthProvider(Responsive);
  // const [loadedValue,setLoadedValue] = useState([]);

  const dragging = useCallback(
    (e) => {
      // setLoadedValue(e);
      console.log(e);
    },
    [],
  )

  const layouts = [
    {i: 'header', x: 0, y: 0, w: 12, h: 0.5, static: true,c:<TemplateHeader />},
    // {i: <TemplateHeader />, x: 0, y: 0, w: 12, h: 0.5, static: true},
    {i: 'b', x: 3, y: 0, w: 3, h: 2, minW:3,minH:2,c: <TemplateImage />},
    {i: 'c', x: 6, y: 0.5, w: 1, h: 2},
    {i: 'footer', x: 0, y: 6, w: 12, h: 0.5,isResizable:false, c:<TemplateFooter />}
  ];
  const [layout,setLayout] = useState(layouts)

  const addNewItem = () => {
    const newItem = [{ x: 0, y: 0.5, w: 2, h: 2, i: getId() }];
      // setLayout(layout.concat([newItem]));
      setLayout(newItem.concat(layout));
      // setLayout(loadedValue.concat([newItem]));
  };

  return (
    <GridLayoutHome title="Grid Layout">
      <button onClick={addNewItem}>Add item</button>
      <ResponsiveGridLayout className="layout" layout={layout}
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}} onLayoutChange={dragging}
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
        {layout.map((item,idx)=> 
        (<div className={item.static ? "static" : "" }
         data-grid={{...item}} style={{cursor:"move"}} key={idx}>
          {item.c ? item.c : (item.static ? `static  - ${item.i}`: item.i)}
          </div>)
        )}
      </ResponsiveGridLayout>
    </GridLayoutHome>
  )
}

export default GridLayoutBasics
