import React, {Component} from 'react';
import './App.css';
import {Navigation} from './Navigation';
import {Logo} from './Logo/Logo';
import { ImageLinkForm } from './ImageLinkForm/ImageLinkForm';
import { Rank } from './Rank/Rank';

class App extends Component {
	render () {
		return (
			
			<div className="App">
				
			  <Navigation/>
			  <Logo/>
			  <Rank/>
			  <ImageLinkForm/>
			   
			  {/*<FaceRecognition/> */}

			</div>
		  );
	}
  
}

export default App;
