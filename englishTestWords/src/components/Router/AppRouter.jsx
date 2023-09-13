import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { router } from "../../routes";
import { CONFIGURE_ROUTE } from "../../utils/consts";

const AppRouter = () => {

    return (
        <>
            <Routes>
                {router.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component />} exact />
                )}
                <Route path="*" element={<Navigate to={CONFIGURE_ROUTE} />} />
            </Routes>
        </>
    );
};


export default AppRouter;