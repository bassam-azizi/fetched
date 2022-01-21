import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Film from './film'
import styled from 'styled-components'


const Wrapper = styled.div`
	display: Grid;
	grid-template-columns: 1fr 3fr 1fr;

	.container{
		padding: 50px 0;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 20px;
		grid-column: -2/2 ;
	}
`


const Movies = () =>{
	const BASE_URL = "https://swapi.dev/api/";
	const api = axios.create({ baseURL: BASE_URL });

	const getMovies = api.get("films/");

	const [ movies,setMovies ] = useState([]);

	useEffect(()=>{
		getMovies.then(response => {
	  setMovies(response.data.results);
	});
	})
	return(
		<Wrapper>
			<div className="container">
				{movies.map((movie)=>(
					<Film movie={movie} />
					))}
			</div>
		</Wrapper>
		)
		}


export default Movies
