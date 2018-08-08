import React from 'react'
import styled from 'styled-components'

const TextInput = styled.input`
    border-radius: 4px;
    border:        0.5px solid rgba(0, 0, 0, 0.1);
    font-family:   inherit;
    font-size:     14px;
    height:        32px;
    outline:       none;
    padding-left:  8px;
    padding-right: 8px;
`

const RowForm = styled.form`
    display:         flex;
    flex-direction:  row;
    justify-content: center;

    @media only screen and (max-width: 768px) {
		flex-direction: column;
	}
`

const FormGroup = styled.div`
    display:        flex;
    flex-direction: column;
    margin-bottom:  8px;
    margin-right:   8px;
`

const CheckBoxGroup = styled.div`
    margin-top: 6px;
`

const Button = styled.button`
    background-color: #1f8fff;
    border-radius:    4px;
    border:           0px;
    color:            white;
    cursor:           pointer;
    font-family:      inherit;
    font-size:        inherit;
    height:           auto;
    outline:          none;
    padding:          8px;
    text-transform:   uppercase;
    transition:       background-color 0.35s;

    :active {
        background-color: #1f8fdf;
    }
`

const CheckBoxContainer = styled.div`
    display: inline-block;
`

const Form = ({
    parentState,
    getJokes,
    setParentState,
}) => (
    <RowForm onSubmit={ e => {
        e.preventDefault()
        getJokes()
    }}>
        <FormGroup>
            <div>
                FIRST NAME
            </div>
            <TextInput
                type     = "text"
                value    = {parentState.firstName}
                onChange = {e => setParentState({ firstName: e.target.value })}
                autoFocus
            />
        </FormGroup>

        <FormGroup>
            <div>
                LAST NAME
            </div>
            <TextInput
                type     = "text"
                value    = {parentState.lastName}
                onChange = {e => setParentState({ lastName: e.target.value })}
            />
        </FormGroup>

        <FormGroup>
            <div>
                AMOUNT
            </div>
            <TextInput
                type     = "number"
                value    = {parentState.number}
                onChange = {e => setParentState({ number: e.target.value })}
            />
        </FormGroup>
        <FormGroup>
            <div>
                CATAGORIES
            </div>
            <CheckBoxGroup>
                <CheckBoxContainer>
                    <label>
                        <input
                            type     = "checkbox"
                            value    = {parentState.isNerdy}
                            onChange = {e => setParentState({ isNerdy: e.target.checked })}
                        />
                        Nerdy
                    </label>
                </CheckBoxContainer>
                <CheckBoxContainer>
                    <label>
                        <input
                            type     = "checkbox"
                            value    = {parentState.isExplicit}
                            onChange = {e => setParentState({ isExplicit: e.target.checked })}
                        />
                        Explicit
                    </label>
                </CheckBoxContainer>
            </CheckBoxGroup>
        </FormGroup>
        <Button type="submit">Random jokes</Button>
    </RowForm>
)

export default Form