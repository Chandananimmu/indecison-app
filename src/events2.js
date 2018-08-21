class Counter extends React.Component{
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
   this.reset = this.reset.bind(this);  
 this.state={
 count:0
 };
 
 }
componentDidMount(){
  const json=localStorage.getItem("count");
  const count1=parseInt(json);
  if(count1){
    this.setState(()=>{
      return {count:count1}
    });
  }
  console.log("mount");
}
componentDidUpdate(prevProps,prevState){
 
  if(prevState.count!==this.state.count){
  const json=JSON.stringify(this.state.count)
  localStorage.setItem("count",json);
  
  console.log("update");
  }
}
  addOne  () {
    this.setState((prevState)=>{
      return{
        count:prevState.count+1
      }
    });
    console.log("addOne");
    //this.count++;
  
  };
  minusOne  () {
    this.setState((prevState)=>{
      return{
        count:prevState.count-1
      }
    });
    console.log("minusOne");
    //this.count--;
    
  };
  reset  () {
    this.setState(()=>{
      return{
        count:0
      }
    });
    console.log("reset");
    //this.count=0;
    
  };

  render(){
 
    return(
      <div>
        <h1>count:{this.state.count}</h1>
      <button onClick={this.addOne}>+1</button>
      <button onClick={this.minusOne}>-1</button>
      <button onClick={this.reset}>reset</button>
        
      </div>

    );
  }
}
// Counter.defaultProps={
// count:0
//   }
ReactDOM.render(<Counter />,document.getElementById('app'));