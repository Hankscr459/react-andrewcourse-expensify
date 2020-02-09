import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest // This is goging to give us access to all of the other stuff.
}) => (     // And that is what we're goging to pass down to route.
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props} />
            </div>
        ) : (
            <Redirect to="/" />
        )
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);