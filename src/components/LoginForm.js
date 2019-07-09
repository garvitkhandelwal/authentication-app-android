import React from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends React.Component {
	state = {
		email: '',
		password: '',
		error: '',
		loading: false
	};
	handleAuth = () => {
		const { email, password } = this.state;
		this.setState({
			error: '',
			loading: true
		})
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess.bind(this))
					.catch(this.onLoginFailure.bind(this))
			});
	}
	onLoginSuccess = () => {
		this.setState({
			email: '',
			password: '',
			loading: false
		});
	}
	onLoginFailure = () => {
		this.setState({
			error: 'Authentication Failed!', 
			loading: false
		});
	}
	renderButton = () => {
		if(this.state.loading)
		{
			return <Spinner size="small" />
		}
		return (
			<Button onPress={this.handleAuth.bind(this)}>
				Log In
			</Button>
		);
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
					{this.renderButton()}
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