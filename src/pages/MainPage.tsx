import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../store/hooks/hooks";

const MainPage: FC = () => {
    const user = useAppSelector((state) => state.user.value)
    const dispatch = useAppDispatch()
    return (
        <>
            <div>
                MainPage
            </div>
        </>
    );
};

export default MainPage;