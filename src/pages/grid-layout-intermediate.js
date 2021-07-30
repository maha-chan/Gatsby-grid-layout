import React, { useState } from "react";
import GridLayoutHome from "../layout/GridLayout";
import ShowcaseLayout from "../components/ShowcaseLayout";

const GridLayoutIntermediate = ()=>{
  const [state,setState] = useState({layout:[]});

  const onLayoutChange=(layout)=> {
      setState({ layout: layout });
  }

  function stringifyLayout() {
    return state.layout.map(function(l) {
      return (
        <div className="layoutItem" key={l.i}>
          <b>{l.i}</b>: [{l.x}, {l.y}, {l.w}, {l.h}]
        </div>
      );
    });
  }
  
  return(
    <GridLayoutHome title="Grid Layout Intermediate">
      <div className="layoutJSON">
        Displayed as <code>[x, y, w, h]</code>:
        <div className="columns">{stringifyLayout()}</div>
      </div>
      <ShowcaseLayout onLayoutChange={onLayoutChange} />
    </GridLayoutHome>
  );
}
export default GridLayoutIntermediate
