import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default AddTodo = ({ submitHandler }) => {
	const [text, setText] = useState('');

	const changeHandler = val => {
		setText(val);
	};

	return (
		<View>
			<TextInput
				placeholder="new todo..."
				style={styles.input}
				onChangeText={changeHandler}
			/>
			<Button
				onPress={() => submitHandler(text)}
				title="add todo"
				color="coral"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		marginBottom: 10,
		paddingHorizontal: 8,
		paddingVertical: 6,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd'
	}
});
