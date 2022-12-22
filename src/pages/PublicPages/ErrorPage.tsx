import React, {FC} from 'react';

interface ErrorProps{
    error:string;
}

const ErrorPage:FC<ErrorProps> = ({error}) => {
    return (
        <div>
            {error}
        </div>
    );
};

export default ErrorPage;