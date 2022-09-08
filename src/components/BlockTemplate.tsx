import React, {FC} from 'react';

interface BlockProps {
    children: React.ReactNode;
    addClasses?:string;
}

const BlockTemplate: FC<BlockProps> = ({children,addClasses}) => {
    return (
        <div className={"hover:shadow-2xl hover:scale-105 duration-300  rounded-lg border-2  border-gray-700  shadow " + addClasses}>
            {children}
        </div>
    );
};

export default BlockTemplate;