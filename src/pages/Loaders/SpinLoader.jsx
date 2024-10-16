import { Spinner } from '@material-tailwind/react';
import React from 'react';

const SpinLoader = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <Spinner color="red" className="h-12 w-12" />
        </div>
    );
};

export default SpinLoader;