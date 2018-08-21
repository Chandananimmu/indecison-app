class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.toogle1 = this.toogle1.bind(this);  
    this.state={
      visibility:false
    }
    
  }
  toogle1()
  {
  
    this.setState((prevState)=>{
      return{
        visibility:!(prevState.visibility)
      }
    })
  };
 render() {
 
  return(
    <div> <h1>Visibility Toggle</h1>

    <button onClick={this.toogle1}>{this.state.visibility?'Hide details':'Show Details'}</button>
    {this.state.visibility&&(<div><p>hai</p></div>)}
    </div>
  );
 }
}
ReactDOM.render(<Toggle/>,document.getElementById('app'));
