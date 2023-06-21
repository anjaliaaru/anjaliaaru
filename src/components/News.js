
import React, { Component } from "react";
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps={
    country:"in",
    pageSize: 8,
  category:'genral'
  }
static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  // article={
  //   status: "ok",
  //   totalResults: 2,
  //   articles: [
  //   {
  //   source: {
  //   id: "espn-cric-info",
  //   name: "ESPN Cric Info"
  //   },
  //   author: null,
  //   title: "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //   description: "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //   url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //   urlToImage: "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //   publishedAt: "2020-04-27T11:41:47Z",
  //   content: "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //   }]
  // }
    constructor(){
      super();
      console.log("hello i am a consrtuctor from news components");
      this.state= {
        articles: this.articles,  
        loading: true,
        page:1 
      }
    }
     async componentDidMount(){
       console.log("cdm")
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=52df38c4355c4288b5c68f9e5014120d&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data= await fetch(url);
      let parsedData= await data.json();
      console.log("parsedData");
      this.setState({articles: parsedData.articles,
        totalArticles:parsedData.totalResults,
      loading:false
      });
    }
    handlePrevClick=async()=>{
console.log("Previous");
let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=52df38c4355c4288b5c68f9e5014120d&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
let data= await fetch(url);
      let parsedData= await data.json();
      console.log("parsedData");
  
      this.setState({
        page: this.state.page-1,
        articles:parsedData.articles,
        loading:false
      })
    }
    handleNextClick=async ()=>{
      console.log("Next");
      if(!(this.state.page+ 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=52df38c4355c4288b5c68f9e5014120d&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data= await fetch(url);
        let parsedData= await data.json();
        console.log("parsedData");
        this.setState({
          page: this.state.page+1,
          articles:parsedData.articles,
          loading:false
        })
      }
      
          }

  render() {
    return (
    <div className="container my-3">
    <h1 className="text-center">NewsMonkey-TopHeadlines</h1>
    {this.state.loading && <Spinner/>}
    <div className="row">
    {!this.state.loading&&this.state.articles.map((element)=>{
      return <div className="col-md-4" key={element.url}>
      <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.Url} />
    </div>
    })}
    </div>
     <div className="container d-flex justify-content-between">
      <button  disabled={this.state.page<-1}type="button"className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
      <button disabled={this.state.page+1> Math.ceil(this.props.pageSize)}type="button"className="btn btn-dark"  onClick={this.handleNextClick}>Next &rarr;</button>
      
     </div>
  </div>
    )  
    }

}
export default News;

