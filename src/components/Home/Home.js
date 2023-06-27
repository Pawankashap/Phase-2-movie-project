import React from "react";
import { Alert } from 'bootstrap-4-react';

function Home() {
    return (
        <section id="home">
            <Alert primary>Primary Alert</Alert>
        <Alert secondary>Secondary Alert</Alert>
            <h1 style={{ color: "firebrick" }}>
                Liza is a Web Developer from New York
            </h1>
        </section>
    );
}

export default Home;
