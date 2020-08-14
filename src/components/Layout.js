import React from "react";
import { Components, Container } from "react-bootstrap";

export const Layout = (props) => (
    <Container>
        { props.children }
    </Container>
)