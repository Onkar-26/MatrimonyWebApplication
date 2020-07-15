import React,{Component} from "react";
import "./App.css";

class App extends Component{
	render(){
		return(
		<div className="wrapper">
		 <div className="form-wrapper">
		  <h1>Not a Member ,
		   <a 
			  style={{ marginLeft: '0.6rem' }}
		      classname='RegisLink' 
		      href=""
		      target="_self"
		   >
		      Click here{' '}
		   </a><h1 style={{marginLeft: '0.6rem'}}
			to Register
		   </h1>
		   </h1>
		  </div>
		 </div>
		);
	}
}

export default App;