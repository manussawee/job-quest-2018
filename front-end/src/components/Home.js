import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Form from './Form'
import JokeCard from './JokeCard'

const Hr = styled.hr`
    border: 0.5px solid rgba(0, 0, 0, 0.1);
`

const JokeList = styled.div`
    padding-top: 8px;
`

const SpinnerContainer = styled.div`
    font-size: 48px;
    text-align: center;
    color: gray;
`

class Home extends React.Component {

    state = {
        firstName:  '',
        isExplicit: false,
        isNerdy:    false,
        isReady:    true,
        jokes:      [],
        lastName:   '',
        number:     10,
    }

    componentDidMount = () => {
        this.getJokes()
    }

    getJokes = async () => {
        this.setState({ isReady: false })

        let number  = parseInt(this.state.number, 10)
        let limitTo = []
        let params  = {}

        if(!(Number.isInteger(number) && number > 0)) {
            number = 1
            this.setState({ number: 1 })
        }
        
        if(this.state.firstName) params.firstName = this.state.firstName
        if(this.state.lastName) params.lastName   = this.state.lastName
        
        if(this.state.isNerdy)    limitTo.push('nerdy')
        if(this.state.isExplicit) limitTo.push('explicit')
        
        if(limitTo.length) {
            params.limitTo = '['
            limitTo.map(cat => params.limitTo += cat + ',')
            params.limitTo += ']'
        }

        try {
            const { data } = await axios.get(`http://api.icndb.com/jokes/random/${number}`, { params })
            this.setState({
                isReady: true,
                jokes:   data.value,
            })
        } catch(err) {
            console.warn(err)
            alert("Please, don't crash this page T^T")
        }
    }

    render = () => (
        <div>
            <Form
                parentState    = {this.state}
                getJokes       = {this.getJokes}
                setParentState = {o => this.setState(o)}
            />
            <Hr/>
            <JokeList>
            {
                this.state.isReady &&
                this.state.jokes.map(joke => (
                    <JokeCard
                        key  = {joke.id}
                        joke = {joke}
                    />
                ))
            }
            {
                !this.state.isReady &&
                <SpinnerContainer>
                    <i className="fa fa-circle-notch fa-spin"></i>
                </SpinnerContainer>
            }
            </JokeList>
        </div>
    )
}

export default Home