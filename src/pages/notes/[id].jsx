import React from 'react';
import { useRouter } from "next/router";

export default ({ note }) => {
    return <h2>Note {note.title}</h2>
};

export async function getServerSideProps({ params, req, res }) {
    const response = await fetch(`http://localhost:3000/api/note/${params.id}`);

    if (!response.ok) {
        res.writeHead(302, { Location: '/notes' });
        res.end();
        return { props: {} };
    }

    const { data } = await response.json();

    return {
        props: { note: data }
    };
}
