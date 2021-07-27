import React, { useState } from "react";
import ReactDOM from "react-dom";
import GridLayoutHome from "../layout/GridLayout";
import ShowcaseLayout from "../components/ShowcaseLayout";

const GridLayoutIntermediate = (props)=>{
  const [state,setState] = useState({layout:[]});
  // console.log(props);

  const onLayoutChange=(layout)=> {
      setState({ layout: layout });
  }

  function stringifyLayout() {
    return state.layout.map(function(l) {
      // console.log("inside state.layout",l);
      return (
        <div className="layoutItem" key={l.i}>
          <b>{l.i}</b>: [{l.x}, {l.y}, {l.w}, {l.h}]
        </div>
      );
    });
  }
  // const stringifyLayout=()=> {
  //   return state.layout.map(function(l) {
  //     return (
  //       <div className="layoutItem" key={l.i}>
  //         console.log(l)
  //         <b>{l.i}</b>: [{l.x}, {l.y}, {l.w}, {l.h}]
  //       </div>
  //     );
  //   })
  //   // return state.layout.map((item,key)=>(
  //   //   <div className="layoutItem" key={key}>
  //   //     <b>{item.i}</b>: [{item.x}, {item.y}, {item.w}, {item.h}]
  //   //   </div>
  //   // ))
  //   // );
  // }

  // const stringifyLayout =()=> state.layout.map((item,key)=>{
  //   console.log(item);
  //   return(
  //     <div className="layoutItem" key={key}>
  //       <b>{item.i}</b>: [{item.x}, {item.y}, {item.w}, {item.h}]
  //     </div>
  //   )});
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

// // const contentDiv = document.getElementById("root");
// // const gridProps = window.gridProps || {};
// // ReactDOM.render(React.createElement(ExampleLayout, gridProps), contentDiv);

// import React from "react";
// // import ShowcaseLayout from "./ShowcaseLayout";

// export default class ExampleLayout extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { layout: [] };
//     this.onLayoutChange = this.onLayoutChange.bind(this);
//     this.stringifyLayout = this.stringifyLayout.bind(this);
//   }

//   onLayoutChange(layout) {
//     this.setState({ layout: layout });
//   }

//   stringifyLayout() {
//     return this.state.layout.map(function(l) {
//       console.log(l);
//       return (
//         <div className="layoutItem" key={l.i}>
//           <b>{l.i}</b>: [{l.x}, {l.y}, {l.w}, {l.h}]
//         </div>
//       );
//     });
//   }

//   render() {
//     return (
//       <div>
//         <div className="layoutJSON">
//           Displayed as <code>[x, y, w, h]</code>:
//           <div className="columns">{this.stringifyLayout()}</div>
//         </div>
//         <ShowcaseLayout onLayoutChange={this.onLayoutChange} />
//       </div>
//     );
//   }
// }

// const contentDiv = document.getElementById("root");
// const gridProps = window.gridProps || {};
// ReactDOM.render(React.createElement(ExampleLayout, gridProps), contentDiv);
