import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Appbar from './components/Appbar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PollPage from './components/PollPage';
import NewQuestionPage from './components/NewQuestionPage';
import Leaderboard from './components/Leaderboard';

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

function App() {

  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Appbar LinksProperites={LinksProperites} />

      <Routes>
      <Route path="/dd" exact element={<Dashboard  />} />
      <Route path="/" exact element={<PollPage  />} />
      <Route path="/add" exact element={<NewQuestionPage  />} />
      <Route path="/leaderboard" exact element={<Leaderboard  />} />
      </Routes>
      
    </ThemeProvider>
  );
}

export default App;
