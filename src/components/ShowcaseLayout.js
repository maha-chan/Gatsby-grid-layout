// import React from "react";
// import PropTypes from "prop-types";
// import _ from "lodash";
// import { Responsive, WidthProvider } from "react-grid-layout";
// import { Icon } from 'semantic-ui-react'
// const ResponsiveReactGridLayout = WidthProvider(Responsive);

// let idCounter = 100;

// const getId = () => {
//   idCounter++;

//   return idCounter.toString();
// };

// export default class ShowcaseLayout extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentBreakpoint: "lg",
//       compactType: "vertical",
//       mounted: false,
//       layouts: { lg: props.initialLayout }
//     };

//     this.onBreakpointChange = this.onBreakpointChange.bind(this);
//     this.onCompactTypeChange = this.onCompactTypeChange.bind(this);
//     this.onLayoutChange = this.onLayoutChange.bind(this);
//     this.onNewLayout = this.onNewLayout.bind(this);
//     this.removeItem = this.removeItem.bind(this);
//   }

//   componentDidMount() {
//     this.setState({ mounted: true });
//   }
  
//   onBreakpointChange(breakpoint) {
//     this.setState({
//       currentBreakpoint: breakpoint
//     });
//   }
  
//   removeItem(e){
//     const layout = this.state.layouts.lg.filter(item => item.i !== e.target.id);
//     console.log(layout);
//     this.setState({...this.state,layouts:{lg:layout}})
//   }

//   generateDOM=()=> {
//     const _this = this;
//     return _.map(this.state.layouts.lg, function(l, i) {
//       console.log(l);
//       return (
//         <div key={i} className={l.static ? "static" : ""}>
//           {l.static ? (
//             <span
//               className="text"
//               title="This item is static and cannot be removed or resized."
//             >
//               Static - {i}
//             </span>
//           ) : (
//             <div className="text">{i}<Icon id={i} color="red" onClick={_this.removeItem} className="span-right" name="trash"/></div>
//             // <div className="text">{i}<Icon name={i} color="red" onClick={this.setState(
//             //   {...this.state,layouts:{lg: this.state.layouts.lg.filter(item => item.i !== "7") }}
//             // )} className="span-right" name="trash"/></div>
//           )}
//         </div>
//       );
//     });
//   }


//   onCompactTypeChange() {
//     const { compactType: oldCompactType } = this.state;
//     const compactType =
//       oldCompactType === "horizontal"
//         ? "vertical"
//         : oldCompactType === "vertical"
//           ? null
//           : "horizontal";
//     this.setState({ compactType });
//   }

//   onLayoutChange(layout, layouts) {
//     this.props.onLayoutChange(layout, layouts);
//   }

//   onNewLayout() {
//     this.setState({
//       layouts: { lg: generateLayout() }
//     });
//   }

//   addNewItem = () => {
//     const { layouts } = this.state;
//     const newItem = { x: 0, y: 0, w: 2, h: 2, i: getId() };

//     if (layouts.lg.some(item => item.x === 0 && item.y === 0)) {
//       this.setState({
//         layouts:{lg: layouts.lg
//           .map(item => {
//             if (item.x === 0) {
//               return { y: item.y++, ...item };
//             }

//             return item;
//           })
//           .concat([newItem])}
//       });
//     } else {
//       this.setState({ layouts:{lg:layouts.lg.concat([newItem])} });
//     }
//   };

//   render() {
//     return (
//       <div>
//         <div>
//           Current Breakpoint: {this.state.currentBreakpoint} ({
//             this.props.cols[this.state.currentBreakpoint]
//           }{" "}
//           columns)
//         </div>
//         <div>
//           Compaction type:{" "}
//           {_.capitalize(this.state.compactType) || "No Compaction"}
//         </div>
//         <button onClick={this.onNewLayout}>Generate New Layout</button>
//         <button onClick={this.onCompactTypeChange}>
//           Change Compaction Type
//         </button><button onClick={this.addNewItem}>Add item</button>
//         <ResponsiveReactGridLayout
//           {...this.props}
//           layouts={this.state.layouts}
//           onBreakpointChange={this.onBreakpointChange}
//           onLayoutChange={this.onLayoutChange}
//           // WidthProvider option
//           measureBeforeMount={false}
//           // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
//           // and set `measureBeforeMount={true}`.
//           useCSSTransforms={this.state.mounted}
//           compactType={this.state.compactType}
//           preventCollision={!this.state.compactType}
//         >
//           {this.generateDOM()}
//         </ResponsiveReactGridLayout>
//       </div>
//     );
//   }
// }


// ShowcaseLayout.propTypes = {
//   onLayoutChange: PropTypes.func.isRequired
// };

// ShowcaseLayout.defaultProps = {
//   className: "layout",
//   rowHeight: 30,
//   onLayoutChange: function() {},
//   cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
//   initialLayout: generateLayout()
// };

// function generateLayout() {
//   return _.map(_.range(0, 25), function(item, i) {
//     var y = Math.ceil(Math.random() * 4) + 1;
//     return {
//       x: (_.random(0, 5) * 2) % 12,
//       y: Math.floor(i / 6) * y,
//       w: 2,
//       h: y,
//       i: i.toString(),
//       static: Math.random() < 0.05
//     };
//   });
// }
