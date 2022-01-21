import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	width: 230px;
	height: 300px;
	border-radius: 5px;
	border: 1px solid #cfcfcf ;
	overflow: hidden;

	.header{
		h4{
			text-align: center;
		}
	}

	.description p{
		padding: 2.7px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space:nowrap;
	}
`


const Film = ({movie}) =>{
	return(
		<Wrapper>
			<div className="img">
			 <h4>{movie.title}</h4>
			 <h6>{`episode ID: ${movie.episode_id}`}</h6>
			 <h6>{`Director: ${movie.director}`}</h6>
			</div>
			<div className="description">
				<p>{movie.opening_crawl}</p>
			</div>
		</Wrapper>
		)
}

export default Film