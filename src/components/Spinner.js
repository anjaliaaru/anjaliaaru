// import React, { Component } from "react";
// import Spinner from './';
// <newsaap></newsaap>
// export default class Spinner extends Component {
//   render() {
//     return (
//     
//     )
//   }
// }
import React from "react";
import loading from '../loading.gif.svg';
 const Spinner = () => {
  return (
<div className="text-center">
<img src={loading} alt="loading"/>
   </div>
  )
}

export default Spinner;