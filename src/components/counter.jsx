import React, { Component } from 'react';


class Counter extends Component {
    state = {
      count: 0,
      imgUrl: "https://placeimg.com/200/200/people?t=1551193612167"
    };

    //  styles = {
    //      fontSize: 20,
    //      fontWeight: "bold"
    //  };


    render() { 
        return (  
            <div className="container">
            <img src={this.state.imgUrl} alt="beauty" />
            <span style={ { fontSize: 30 }} className="badge badge-primary m-2">{this.formatCount()}</span>
            <button className="btn btn-primary btn-lg">Increment</button>
            </div>
            
            
           ); 
        }

        formatCount(){
            const { count } = this.state;

          return count === 0 ?  <h1>Zero</h1> :  count;
        }
}  
 
export default Counter;