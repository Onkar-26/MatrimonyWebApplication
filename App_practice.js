import React,{Component} from 'react';
import './App.css';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			Username:'',
			Password:null,
		};
	}
		
	
	
	myChangeHandler = (event) => {
		let val = event.target.value;
		this.setState({val});
	}
	
	render(){
		return(
		<form onSubmit={this.mySubmitHandler}>
		<h1>Not a Member,
		<a 
		  classname='RegisLink' 
		  href=""
		  target="_self"
		>
		
		
		Click here
		</a>
		to Register
		</h1>
		
		<h1>Welcome!{this.state.Username}</h1>
		
		<p>Enter the Username/E-mail:</p>
		<input
		 type='text'
		 name='Username'
		 placeholder='Username or E-mail'
		 onChange={this.myChangeHandler}
		 />
		 
		 <p>Enter the Password:</p>
		 <input 
		   type='text'
		   name='Password'
		   placeholder='Password'
		/>
		<br/>
		<br/>
		<a  
		  href=''
		  target='_self'
		>
		Forget Password? &nbsp;
		</a>
		
		<input style={{ marginLeft: '1.1rem' }} type='submit'/>
		</form>
	);
	}
}

export default App;	