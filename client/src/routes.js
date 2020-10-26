import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { LinksPages } from "./pages/LinksPage";
import { CreatePages } from "./pages/CreatePage";
import { DetailPages } from "./pages/DetailPage";
import { AuthPages } from "./pages/AuthPage";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/links" exact>
                    <LinksPages/>
                </Route>
                <Route path="/create" exact>
                    <CreatePages/>
                </Route>
                <Route path="/detail/:id" exact>
                    <DetailPages/>
                </Route>
                <Redirect to="/create"/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPages />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}
