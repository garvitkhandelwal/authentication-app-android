import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends React.Component {

	state = { loggedIn: null }

	componentWillMount() {
		firebase.initializeApp({
		    apiKey: 'AIzaSyDC65VgZQF9QrSCTZFjFD5rO6Gi4eC62IA',
		    authDomain: 'auth-app-2141f.firebaseapp.com',
		    databaseURL: 'https://auth-app-2141f.firebaseio.com',
		    projectId: 'auth-app-2141f',
		    storageBucket: '',
		    messagingSenderId: '428984817893',
		    appId: '1:428984817893:web:639e65d4f30c2a2b'
  		});
  		firebase.auth().onAuthStateChanged((user) => {
  			if(user) {
  				this.setState({ loggedIn: true })
  			}
  			else {
  				this.setState({ loggedIn: false })
  			}
  		});
	}
	renderForm = () => {
		switch(this.state.loggedIn) {
			case true: 
				return ( 
					<Button onPress={() => firebase.auth().signOut()}> 
						Log Out 
					</Button>
				);

			case false: 
				return <LoginForm />

			default: 
				return <Spinner size="large" />
		}
	}
	render() {
		return (
			<View>
				<Header headerText="Authenticator" />
				{ this.renderForm() }
			</View>
		);
	}
}

export default App;