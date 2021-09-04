import React, { useEffect, useState } from 'react';
import css from './App.module.css';
import Header from './Header';
import Main from './Main';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-177413879-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
	const [data, setData] = useState([]);

	const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.']
	var d = new Date();
	var year = d.getFullYear();
	var month = months[d.getMonth()]

	useEffect(() => {
		let url = "./data.json";
		fetch(url)
		.then((response) => {return response.json()})
		.then((data) => setData(data));
	}, [])
	
	return (
		<div className={css.container}>
			<Header />
			<Main data={data}/>
			<footer style={{textAlign: 'center'}}><small>Copyright &copy; {year} Anran Du | Up-to-date {month} {year}</small></footer>
		</div>
	);
	}

	export default App;
