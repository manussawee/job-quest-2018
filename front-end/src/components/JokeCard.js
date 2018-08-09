import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { addJoke, removeJoke, selectJoke, changePage } from '../actions'

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
    display: flex;
    float:   right;
`

const TagContainer = styled.div`
    color:      #1f8fdf;
    font-size:  14px;
    margin-top: 4px;
`

const IconContainer = styled.div`
    color:        #1f8fdf;
    cursor:       pointer;
    font-size:    18px;
    margin-left:  2px;
    padding-left: 8px;
    transition:   color 0.35s;

    :hover {
        color: #1f8fff;
    }
`

const JokeCard = ({
    add,
    exportJoke,
    joke,
    remove,
    type,
}) => (
    <JokeCardContainer>
        <SettingContainer>
            <IconContainer onClick={exportJoke}>
                <i className="far fa-file-image"></i>
            </IconContainer>
            {
                type === 'unsaved' &&
                <IconContainer onClick={add}>
                    <i className="far fa-bookmark"></i>
                </IconContainer>
            }
            {
                type === 'saved' &&
                <IconContainer onClick={remove}>
                    <i className="fas fa-bookmark"></i>
                </IconContainer>
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
    add:        () => dispatch(addJoke(ownProps.joke)),
    remove:     () => dispatch(removeJoke(ownProps.joke.id)),
    exportJoke: () => {
        dispatch(changePage('export'))
        dispatch(selectJoke(ownProps.joke))
    },
})

export default connect(
    mapStatetoProps,
    mapDispatchToProps,
)(JokeCard)