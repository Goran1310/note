import { Button, Col, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";


export function NoLIst () {
    return (
        <div>
            <Row>
                <Col><h1>Notes NoList</h1></Col>
                <Stack gap={2} direction="horizontal">
                    <Link to="/new">
                        <Button variant="primary">Create</Button>
                    </Link>
                </Stack>
            </Row>
        </div>
        )
}