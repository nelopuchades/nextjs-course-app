import React from 'react';
import Link from 'next/link';
import '../styles.module.css';

export default ({ content }) => (
    <div>
        <h1>{content.title}</h1>
        <Link href="/notes">
            <a>Link</a>
        </Link>
    </div>
);

export function getStaticProps() {
    // get data from CMS
    return {
        props: {
            content: {
                title: "This is my really nice app"
            }
        }
    }
}
