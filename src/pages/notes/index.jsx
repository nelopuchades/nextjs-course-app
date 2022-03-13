import React from 'react';
import Link from 'next/link';

export default ({ notes }) => {
    return (
        <div>
            <h1>Notes</h1>
            {notes.map(note => (
                <div>
                    <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
                        <a>
                            <strong>{note.title}</strong>
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    )
};

export async function getServerSideProps() {
    const res = await fetch(`${process.env.API_URL}/api/note/`);
    const { data } = await res.json();
    return {
        props: { notes: data },
    }
}
