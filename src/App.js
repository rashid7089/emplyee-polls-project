import { Fragment, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Appbar from './components/Appbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PollPage from './components/PollPage';
import NewQuestionPage from './components/NewQuestionPage';
import Leaderboard from './components/Leaderboard';
import { handleInitialData } from './actions/shared';
import { connect } from 'react-redux';
import { setAuthedUser } from './actions/authedUser';
import  LoadingBar  from 'react-redux-loading-bar';
import Error404Page from './components/Error404Page';
import Footer from './components/Footer';
import LoadingPage from './components/LoadingPage';
import Error403Page from './components/Error403Page';

const LinksProperites = [
  {
      name: 'Home',
      path: '/', 
  },
  {
      name: 'New Question',
      path: '/add',
  },
  {
      name: 'Leaderboard',
      path: '/leaderboard',
  },
];

function GrayBackgroundPosition() {
  const style = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(90,90,90,0.5)",
    zIndex: 5,
  };
  return (
    <div style={style}></div>
  );
}

function App(props) {

  useEffect(() => {
    props.dispatch(setAuthedUser(""));
    props.dispatch(handleInitialData());
  }, [])
  

  

  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <div style={{zIndex:10, position:"relative"}}><LoadingBar style={{ height: '5px' }} /></div>
      {props.loadingBar.default ? <GrayBackgroundPosition />:""}

      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />



      {props.loadingBar.default ? <LoadingPage /> : (
        <Fragment>
          <Appbar LinksProperites={LinksProperites} />

          <Routes>
            <Route path="/" exact element={<Dashboard  />} />
            <Route path="/404" exact element={<Error404Page />} />
            <Route path="/403" exact element={<Error403Page />} />
            <Route path="/questions/:question_id" exact element={<PollPage  />} />
            <Route path="/add" exact element={<NewQuestionPage  />} />
            <Route path="/leaderboard" exact element={<Leaderboard  />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Fragment>
      )}      
    </ThemeProvider>
  );
}

const mapStateToProps = ({ authedUser, loadingBar }) => {
  return {
    authedUser,
    loadingBar,
  };
};

export default connect(mapStateToProps)(App);
