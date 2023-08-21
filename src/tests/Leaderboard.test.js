import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../reduxStore';
import Leaderboard from '../components/Leaderboard';
import { BrowserRouter } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';


describe('Leaderboard Element', () => {
    it('Leaderboard Element must match the snapshot', () => {
        const utils = render(
            <BrowserRouter>
                <Provider store={store}>
                    <Leaderboard />
                </Provider>
            </BrowserRouter>
        );
        expect(utils).toMatchSnapshot();
    })

    it('leaderboard_container should not appear if no user sign in', () => { 
        store.dispatch(setAuthedUser(""));
        const utils = render(
            <BrowserRouter>
                <Provider store={store}>
                    <Leaderboard />
                </Provider>
            </BrowserRouter>
        );

        const leaderboard_container = utils.queryByTestId('leaderboard_container');
        expect(leaderboard_container).not.toBeInTheDocument();
    })

    it('leaderboard_container should appear if user sign in', () => { 
        store.dispatch(setAuthedUser("johndoe"));
        const utils = render(
            <BrowserRouter>
                <Provider store={store}>
                    <Leaderboard />
                </Provider>
            </BrowserRouter>
        );

        const leaderboard_container = utils.queryByTestId('leaderboard_container');
        expect(leaderboard_container).toBeInTheDocument();
    })

})