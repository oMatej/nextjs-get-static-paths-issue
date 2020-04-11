import React from 'react';

const Test = () => <h1>TEST</h1>;

export const getStaticPaths = () => {
    return {
        paths: [
            { params: { slug: '1' } },
            { params: { slug: '2' } },
            { params: { slug: '3.html' } }
        ],
        fallback: false
    }
}

export const getStaticProps = () => ({ props: {} });

export default Test;
