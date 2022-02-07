import React, { useRef, useEffect } from 'react';
import { mount } from 'marketingApp/Marketing';

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    });

    return <div ref={ref} />;
};