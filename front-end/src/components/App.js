import React from 'react'
import styled from 'styled-components'
import Content from './Content'
import Navbar from './Navbar'

const Container = styled.div`
	color:        #3d3d3d;
	font-family:  'Quicksand', sans-serif;
	margin-left:  120px;
	margin-right: 120px;

	@media only screen and (max-width: 1024px) {
		margin-left:  12px;
		margin-right: 12px;
	}

	@media only screen and (max-width: 414px) {
		margin:        0px;
		padding-left:  8px;
		padding-right: 8px;
	}
`

const App = () => (
	<Container>
		<Navbar />
		<Content />
	</Container>
)

export default App;
