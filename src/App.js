import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends React.Component {
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
	}
	render() {
		return (
			<View>
				<Header headerText="Authenticator" />
				<LoginForm />
			</View>
		);
	}
}

export default App;