import React from 'react';
import moment from "moment";

function MessageBox(props) {

    const [showMessageBox, setShowMessageBox] = useState(true);

    const toggleShowMessageBox = () => setShowMessageBox(!showMessageBox);

    return (
        <div>
            <Row>
                <Col xs={6}>
                    <Toast show={showMessageBox} onClose={toggleShowMessageBox}>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded mr-2"
                                alt=""
                            />
                            <strong className="mr-auto">{`alert alert-${props.variant || 'info'}`}</strong>
                            <small>{moment().format("hh.mm.ss")}</small>
                        </Toast.Header>
                        <Toast.Body>{`alert alert-${props.variant || 'info'}`}</Toast.Body>
                    </Toast>
                </Col>

            </Row>
        </div>
    );
}

export default MessageBox;