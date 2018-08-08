import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { addJoke, removeJoke } from '../actions'

const JokeCardContainer = styled.div`
    box-shadow:    0px 1px 4px #d1d1d1;
    border-radius: 8px;
    margin-bottom: 12px;
    padding:       12px;

    :last-child {
        margin-bottom: 0px;
    }
`

const SettingContainer = styled.div`
    float: right;
`

const TagContainer = styled.div`
    color:      #1f8fdf;
    font-size:  14px;
    margin-top: 4px;
`

const BookmarkContainer = styled.div`
    color:        #1f8fdf;
    cursor:       pointer;
    font-size:    18px;
    padding-left: 8px;
    transition:   color 0.35s;

    :hover {
        color: #1f8fff;
    }
`

const JokeCard = ({
    type,
    joke,
    add,
    remove,
}) => (
    <JokeCardContainer>
        <SettingContainer>
        {
            type === 'unsaved' &&
            <BookmarkContainer onClick={add}>
                <i className="far fa-bookmark"></i>
            </BookmarkContainer>
        }
        {
            type === 'saved' &&
            <BookmarkContainer onClick={remove}>
                <i className="fas fa-bookmark"></i>
            </BookmarkContainer>
        }
        </SettingContainer>

        <div>{joke.joke}</div>
        <TagContainer>
        {
            joke.categories.map(cat => (
                <span key="cat">#{cat}</span>
            ))
        }
        </TagContainer>
    </JokeCardContainer>
)

const mapStatetoProps = (state, ownProps) => ({
    type: state.jokes.find(joke => joke.id === ownProps.joke.id) ? 'saved' : 'unsaved'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    add:    () => dispatch(addJoke(ownProps.joke)),
    remove: () => dispatch(removeJoke(ownProps.joke.id)),
})

export default connect(
    mapStatetoProps,
    mapDispatchToProps,
)(JokeCard)