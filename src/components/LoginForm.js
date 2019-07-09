import React from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends React.Component {
	state = {
		email: '',
		password: '',
		error: ''
	};
	handleAuth = () => {
		const { email, password } = this.state;
		this.setState({error: ''})
		firebase.auth().signInWithEmailAndPassword(email, password)
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.catch(() => {
						this.setState({error: 'Authentication Failed!'})
					});
			});
	}
	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="Email"
						placeholder="user@xyz.com"
						value={this.state.email}
						onChangeText={email => this.setState({ email })} 
					/>
				</CardSection>
				<CardSection>
					<Input
						secureTextEntry
						label="Password"
						placeholder="********"
						value={this.state.password}
						onChangeText={password => this.setState({ password })} 
					/>
				</CardSection>
				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>
				<CardSection>
					<Button onPress={this.handleAuth.bind(this)}>
						Log In
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		color: 'red',
		alignSelf: 'center'
	}
};

export default LoginForm;