import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import styled, { keyframes } from 'styled-components';
import {publicRoutes} from "../routes";
import {MAIN_ROUTE} from "../utils/consts";
import { fadeIn } from 'react-animations';

const AppRouter = () => {
    // const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`} infinite`;
    return (
        <Routes>
            {
                publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={
                        // <FadeIn>
                            <Component />
                        // </FadeIn>
                    } exact />)
            }
            <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter;