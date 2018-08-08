import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Home from './Home'
import MyJokes from './MyJokes'

const ContentContainer = styled.div`
	box-shadow:    0px 1px 4px #d1d1d1;
    border-radius: 8px;
    margin-top:    16px;
    padding:       16px;
`

const Content = ({ page }) => (
    <ContentContainer>
        {page === 'home'     && <Home />}
        {page === 'my_jokes' && <MyJokes />}
    </ContentContainer>
)

const mapStateToProps = state => ({
    page: state.page
})

export default connect(
    mapStateToProps
)(Content)
