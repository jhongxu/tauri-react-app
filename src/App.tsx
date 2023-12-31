import { useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import './App.scss';
import { Button } from 'antd';

function App() {
	const [greetMsg, setGreetMsg] = useState('');
	const [name, setName] = useState('');

	async function greet() {
		setGreetMsg(await invoke('greet', { name }));
	}

	return (
		<div className="container">
			<Button type="primary">Button</Button>
			<form
				className="row"
				onSubmit={(e) => {
					e.preventDefault();
					greet();
				}}
			>
				<input
					id="greet-input"
					onChange={(e) => setName(e.currentTarget.value)}
					placeholder="Enter a name..."
				/>
				<button type="submit">Greet</button>
			</form>

			<p>{greetMsg}</p>
		</div>
	);
}

export default App;
