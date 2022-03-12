import React from "react";
import Nav from '../components/Nav/Nav';

export default function App({ Component, pageProps }) {
    return <>
        <Nav />
        <Component {...pageProps} />
    </>;
}