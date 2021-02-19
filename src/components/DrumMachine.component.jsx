import React from 'react'
import './DrumMachine.styles.css'

import { Form } from 'react-bootstrap'
import KeyboardContainer from './KeyboardContainer.component'

class DrumMachine extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }
    render() {
        return (
            <div id='drum-machine'>
                <KeyboardContainer />
                <div id='other-buttons-container'>
                    {/* <button>Deneme</button> */}
                    <Form>
                        <span id='switch'>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                className='large bold warning'
                            />
                            Power
                        </span>
                    </Form>

                </div>
            </div>
        )
    }

}

export default DrumMachine;