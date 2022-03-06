import React from 'react';
import { useRouter } from "next/router";

const Page = () => {
    const router = useRouter();
    const { id } = router.query;
    return <h2>Page of note {id}</h2>
};

export default Page;