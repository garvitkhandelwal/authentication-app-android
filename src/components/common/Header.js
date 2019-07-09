import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
    	<View style={viewStyle}>
        	<Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};
const styles = {
	viewStyle: {
		backgroundColor: '#dbdbdb',
		justifyContent: 'center',
		alignItems: 'center',
		height: 40,
		paddingTop: 15,
		paddingBottom: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 1,
		elevation: 2,
		position: 'relative'
	},
    textStyle: {
        fontSize: 20,
    }
};

export { Header };