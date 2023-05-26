import React, { Component } from 'react'
import { matKinhArr } from './Data.js'
import ItemGlass from './ItemGlass'
import Details from './Details.js'
import ListGlass from './ListGlass.js'
export default class BaiTapMatKinh extends Component {
  state={
    matKinhArr: matKinhArr,
    DetailsGlasses : matKinhArr[0]
  }
  handleViewDetail = (shoe) =>{
    this.setState({DetailsGlasses:shoe})
  }
  render() {
    console.log(this.state.matKinhArr);
    return (
      <div>
    <ListGlass handleViewDetail={this.handleViewDetail} list={this.state.matKinhArr} ></ListGlass>
    <Details detail={this.state.DetailsGlasses}></Details>
    
      </div>
    )
  }
}
