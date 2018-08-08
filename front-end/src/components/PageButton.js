import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { changePage } from '../actions'

const Button = styled.button`
	font-weight:      bold;
    background-color: transparent;
    border:           none;
    color:            ${({ active }) => active ? '#1f8fff': 'inherit' };
    cursor:           pointer;
    font-size:        16px;
    outline:          none;
    text-transform:   uppercase;
    transition:       color 0.35s;

    :hover {
        color: #1f8fdf;
    }
`

const PageButton = ({ children, onClick, active }) => (
    <Button active={active}
        onClick={onClick}
    >
        {children}
    </Button>
)

const mapStateToProps = (state, ownProps) => ({
    active: state.page === ownProps.page
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(changePage(ownProps.page))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageButton)
  