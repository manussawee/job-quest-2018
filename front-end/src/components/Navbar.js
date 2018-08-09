import React from 'react'
import styled from 'styled-components'

import PageButton from './PageButton'

const NavBarContainer = styled.div`
	background-color: #f8f8f8;
	border-radius:    8px;
	box-shadow:       0px 1px 2px #d1d1d1;
	box-sizing:       border-box;
	display:          flex;
	height:           48px;
	margin-bottom:    8px;
	margin-top:       8px;
	padding:          8px;
`

const NavBar = () => (
	<NavBarContainer>
		<PageButton page="home">Home</PageButton>
		<PageButton page="my_jokes">My Jokes</PageButton>
		<PageButton page="export">Export</PageButton>
	</NavBarContainer>
)

export default NavBar