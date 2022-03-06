import React from 'react';
import { useRouter } from "next/router";

const Page = () => {
    const router = useRouter();
    const { params } = router.query;
    return <h2>Page of note {params}</h2>
};

export default Page;