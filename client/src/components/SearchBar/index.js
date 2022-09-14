import React from "react";
import {
    Container,
    Col,
    Form,
    Button,
} from 'react-bootstrap';

const searchBar = () => {
    return (
        <>
        <Container>
            <Form>
                <Form.Row>
                    <Col>
                        <Form.Control/>
                    </Col>
                    <Col>
                        <Button>
                            Submit Search
                        </Button>
                    </Col>
                </Form.Row>
            </Form>
        </Container>
        </>
    );
}

export default SearchBar;