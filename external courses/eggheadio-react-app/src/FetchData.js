import React, { useEffect, useState } from "react";

const Person = ({ name }) => <li>{name}</li>;

//

export function FetchData() {
	const [names, setNames] = useState([]);
	const [filter, setFilter] = useState(null);

	useEffect(() => {
		fetch("https://swapi.dev/api/people/?format=json")
			.then((data) => data.json())
			.then(({ results }) => results.map((res) => res.name))
			.then((names) => setNames(names));
	}, []);

	function changeFilter(e) {
		const value = e.target.value.toLocaleLowerCase();
		setFilter(value);
	}

	function filterNames(names, filter) {
		if (names == null || filter == null) {
			return names;
		}
		return names.filter((name) =>
			name.toLocaleLowerCase().includes(filter)
		);
	}

	const namesToShow = filterNames(names, filter);
	return (
		<>
			<input
				type="text"
				onChange={changeFilter}
				placeholder="Search..."
			/>
			<ul>
				{namesToShow.map((name) => (
					<Person name={name} key={name} />
				))}
			</ul>
		</>
	);
}
