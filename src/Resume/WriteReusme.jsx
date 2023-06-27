// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Loading from '../Loding/Loading';

const WriteResume = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading) {
        return <Loading />;
    } else {
        return <div>이력서 양식</div>;
    }
};

export default WriteResume;
