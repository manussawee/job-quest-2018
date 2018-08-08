import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import JokeCard from './JokeCard'

const EmptyText = styled.h1`
    color:      gray;
    text-align: center;
`

const MyJokes = ({ jokes }) => (
    <div>
        {
            jokes.length === 0 &&
            <EmptyText>Your jokes are not existing.</EmptyText>
        }
        {
            jokes.map(joke => (
                <JokeCard
                    key  = {joke.id}
                    joke = {joke}
                />
            ))
        }
    </div>
)

const mapStateToProps = state => ({ jokes: state.jokes })

export default connect(mapStateToProps)(MyJokes)