import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	FlatList,
	Text,
	Alert,
	TouchableWithoutFeedback,
	Keyboard
} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addtodo';

export default function App() {
	const [todos, setTodos] = useState([
		{ text: 'read', key: '1' },
		{ text: 'write', key: '2' },
		{ text: 'execute', key: '3' }
	]);

	const pressHandler = key => {
		setTodos(prevTodos => {
			return prevTodos.filter(todo => todo.key != key);
		});
	};

	const submitHandler = text => {
		if (text.length >= 3) {
			setTodos(prevTodos => {
				let keySize = todos.length;
				return [{ text: text, key: (keySize + 1).toString() }, ...prevTodos];
			});
		} else {
			Alert.alert('Oops', 'Text must be at least 3 characters long', [
				{
					text: 'Understood',
					onPress: () => console.log('alert closed')
				}
			]);
		}
	};

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={styles.container}>
				<Header />
				<View style={styles.content}>
					<View style={styles.list}>
						<AddTodo submitHandler={submitHandler} />
						<FlatList
							data={todos}
							renderItem={({ item }) => (
								<TodoItem item={item} pressHandler={pressHandler} />
							)}
						/>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fefefe'
	},
	content: {
		padding: 40,
		flex: 1
	},
	list: {
		marginTop: 20,
		flex: 1
	}
});
