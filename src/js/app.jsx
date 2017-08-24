import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       m:"",
       balance:'',
       rate:'',
       term:'',
    }
  }
  balance(event){
    this.setState({
      balance:event.target.value,
    
    });
  }
  rate(event){
    this.setState({
      rate:event.target.value,
    
    });
  }
  term(event){
    this.setState({
      term:event.target.value,
    
    });
  }
  // your Javascript goes here
  handleCalculate(event){
    event.preventDefault(); 
    var P=parseInt(this.state.balance);
    var I=(parseFloat(this.state.rate)/100/12);
    var N=(parseInt(this.state.term)*12);
    var m = monthlyPayment(P, N, I);
    function monthlyPayment(p, n, i) {
      return p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
    }
    
     this.setState({m:m.toFixed(2)})
  }
  render() {
    return (
      <div className='container'>
         <div style={{borderBottom:"1px solid white"}}>
            <h3>Mortgage Calculator</h3>
        </div>
        <div className="container" style={{marginTop:"10",width:"50%",float:"left"}}>
           <div className="panel-default row" style={{width:"100%"}}>
              <div className="panel-body col-xs-4" style={{padding:5,width:"100%",background:"white"}}>
               <label>Loan Balance</label>
                <input type="number" name="balance" className="create-todo-text form-control" value={this.state.balance} onChange={this.balance.bind(this)} style={{marginBottom:8}}/>
                <label>Interest Rate (%)</label>
                <input type="number" name="rate" className="create-todo-text form-control" value={this.state.rate} onChange={this.rate.bind(this)} style={{marginBottom:8}}/>
                <label>Loan Term (years)</label>
                <select name="term" className="create-todo-priority form-control" value={this.state.term} onChange={this.term.bind(this)} style={{marginBottom:8}}>
                  <option selected='selected'>Select a priority</option>
                  <option>15</option>
                  <option>30</option>
                  
                </select>
              </div>
            </div> 
            <div className="panel-default row" style={{width:"100%"}}> 
             <div className="panel-body col-xs-4" style={{width:"100%"}}>
               <button name="submit" className="create-todo btn btn-primary btn-lg" onClick={this.handleCalculate.bind(this)} style={{width:150}}>Calculate</button>
             </div>
            </div>
        </div>
        {/* your JSX goes here */}
       <div id="output">Output {this.state.m} </div>
      </div>
    );
  }
}
