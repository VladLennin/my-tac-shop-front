import React, {FC} from 'react';
import Wrapper from "../components/main-blocks/Wrapper";
import {IUser} from "../models/Models";

interface MainPageProps {
    user: IUser;
}

const MainPage: FC<MainPageProps> = ({user}) => {
    return (
        <div>
            <Wrapper user={user}>
                <div>
                    MainPage
                </div>
            </Wrapper>
        </div>
    );
};

export default MainPage;