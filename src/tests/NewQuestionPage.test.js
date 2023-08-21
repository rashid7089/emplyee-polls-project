import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../reduxStore';
import NewQuestionPage from '../components/NewQuestionPage';
import { BrowserRouter } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';


describe('NewQuestionPage Element', () => { 
      
    it('NewQuestionPage Element must match the snapshot', () => {
        const utils = render(
            <BrowserRouter>
                <Provider store={store}>
                    <NewQuestionPage />
                </Provider>
            </BrowserRouter>
        );
        expect(utils).toMatchSnapshot();
    })

    it('will run submit function', async() => {
        //#region change alert function to avoid it in the test
            const jsdomAlert = window.alert;
            window.alert = () => {};
        //#endregion
    
        store.dispatch(setAuthedUser("johndoe"));

        const utils = render(
            <Provider store={store}>
            <BrowserRouter>
                    <NewQuestionPage />
                </BrowserRouter>
            </Provider>
        );

        const firstFeild = utils.queryByTestId('firstOption');
        const secondFeild = utils.queryByTestId('secondOption');
        const form = utils.queryByTestId('form');
        
        fireEvent.change(firstFeild, {target: {value: "i hate cats"}});
        fireEvent.change(secondFeild, {target: {value: "i hate dog"}});
        fireEvent.submit(form);
        
        const submittedSign = await screen.findByTestId('submittedSign');

        window.alert = jsdomAlert; // restore alert function
        expect(submittedSign).toBeInTheDocument();
    })

    it('newQuestionPage_container should not appear if user is not sign in', () => {
        //#region change alert function to avoid it in the test
            const jsdomAlert = window.alert;
            window.alert = () => {};
        //#endregion    

        store.dispatch(setAuthedUser(""));
        const utils = render(
            <BrowserRouter>
                <Provider store={store}>
                    <NewQuestionPage />
                </Provider>
            </BrowserRouter>
        );
        const newQuestionPage_container = utils.queryByTestId('newQuestionPage_container');
        
        window.alert = jsdomAlert;  // restore alert function
        expect(newQuestionPage_container).not.toBeInTheDocument();
    })

 })


