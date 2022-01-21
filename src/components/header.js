import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	width: 100%;
	height: 100px;
	background-color: #cfcfcf;
	display: grid;
	justify-items: center;

	h1{
		color: #fff;
	}
`

const Header = () =>(

		<Wrapper>
			<h1>Latest Fetched Films</h1>
		</Wrapper>

)

export default  Header