import React, { useRef, useEffect } from 'react';
import { mount } from 'marketingApp/Marketing'; // Loads the micro frontend app
import { useHistory } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathname }) => {
                console.log("marketing navigation");
                const { pathname: currentPathname } = history.location;

                if (currentPathname !== nextPathname) {
                    console.log("container changes route");
                    history.push(nextPathname);
                }
            }
        });

        history.listen(onParentNavigate);
    }, []);

    return <div ref={ref} />;
};