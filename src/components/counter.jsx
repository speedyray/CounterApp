import React, { Component } from 'react';


class Counter extends Component {
  constructor(){
    super();
    this.state = {
        count: 0,
        imgUrl: "https://placeimg.com/200/200/people?t=1551193612167",
        cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide']
       };
       this.handleIncrement = this.handleIncrement.bind(this);
    
      }
      //  handleIncrement = () => {
      //    this.setState({ count: this.state.count + 1 });
      //  };

      
    handleIncrement(){
      this.setState( (prev) => {
         return {
           count: prev.count + 1 
         }
       })
    }

    render() { 
        return (  
            <div className="container">
            <img src={this.state.imgUrl} alt="beauty" />
            <span style={{fontSize: 30 }}  className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
            onClick={this.handleIncrement }
            className="btn btn-primary btn-lg">Increment</button>
            
             <ul>
               {this.state.cities.length === 0 && "No more cities on earth"}
              {this.aussieCities()}
            </ul>
            </div>
           ); 
        }

        getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
        }

        formatCount(){
        const { count } = this.state;
        return count === 0 ?  <h1>Zero</h1> :  count;
        }


        aussieCities(){
        if (this.state.cities.length === 0 ) return  <h3>No cities for you, Babe!</h3>  
         return this.state.cities.map(city => <l1 key={city} ><h1>{city}</h1></l1>);
       }
       
}  
 
export default Counter;