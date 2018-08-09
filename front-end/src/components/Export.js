import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const EmptyText = styled.h1`
    color:      gray;
    text-align: center;
`
const Center = styled.div`
    text-align: center;
`

const Canvas = styled.canvas`
    border: 4px solid black;
`

const UploadBox = styled.div`
    background-color: #ddeeff;
    border-radius:    8px;
    margin-top:       16px;
    padding:          16px;
`

const MemeContainer = styled.div`
    width:    100%;
    overflow: auto;
`

class ExportPage extends React.Component {

    state = {
        imageUrl: ''
    }

    componentDidMount = () => {
        if(this.props.joke) {
            let canvas    = document.getElementById('myCanvas')
            let ctx       = canvas.getContext('2d')
            ctx.fillStyle = 'gray'
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            this.setText(this.props.joke.joke)   
        }
    }

    setImage = imageUrl => {
        let that     = this
        let canvas   = document.getElementById('myCanvas')
        let ctx      = canvas.getContext('2d')
        let image    = new Image()
        image.src    = imageUrl
        image.onload = () => {
            ctx.drawImage(image, canvas.width / 2 - image.width / 2, canvas.height / 2 - image.height / 2)
            that.setText(this.props.joke.joke)
        }
    }

    setText = text => {
        let canvas      = document.getElementById('myCanvas')
        let ctx         = canvas.getContext('2d')

        ctx.fillStyle   = 'white'
        ctx.strokeStyle = 'black'
        ctx.font        = 'bold 42px courier new'
        ctx.lineWidth   = 2

        let textSet = text.split(' ')
        let lines = []
        let index = 0
        let count = 0

        textSet.forEach(t => {
            if(count === 0) {
                lines.push('')
            }
            
            lines[index] += t + ' '
            count++
            
            if(count === 5) {
                count = 0
                index++
            }
        })

        lines.forEach((line, i) => {
            ctx.fillText(line, 20, i * 45 + (canvas.height - 45 * lines.length + 24), canvas.width - 40)
            ctx.strokeText(line, 20, i * 45 + (canvas.height - 45 * lines.length + 24), canvas.width - 40)
        })

        this.setState({
            imageUrl: document.getElementById('myCanvas').toDataURL()
        })
    }

    render = () => (
        <Center>
            <h2>CREATE YOUR OWN MEME!!!</h2>
            {!this.props.joke && <EmptyText>Please select the joke.</EmptyText>}
            {
                this.props.joke &&
                <MemeContainer>
                    {this.state.imageUrl && <div>Click on the picture below to download.</div>}
                    <a href={this.state.imageUrl} download="best-meme-ever.png">
                        <Canvas id="myCanvas" width="480" height="480">This browser is not supported.</Canvas>
                    </a>
                    <UploadBox>
                        <label>Choose your picture </label>
                        <input
                            type="file"
                            onChange={e => this.setImage(URL.createObjectURL(e.target.files[0]))}
                        />
                    </UploadBox>
                </MemeContainer>
            }
        </Center>
    )
}

const mapStateToProps = state => ({ joke: state.joke })

export default connect(mapStateToProps)(ExportPage)