import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from './components/RouteSwitch';
import LeftSideNavBar from './pages/left_navbar/LeftSideNavBar';
import { BrowserRouter } from 'react-router-dom';
import FlexRowContainer from './components/styles/FlexRowContainer.styled';
import GlobalAppStyles from './GlobalAppStyles';
import MainBodyContainer from './components/styles/MainBodyContainer.styled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalAppStyles />

      <FlexRowContainer style={{ margin: '0px', height: "100%" }} >
        <LeftSideNavBar/>
        <MainBodyContainer >
          <RouteSwitch />
        </MainBodyContainer>
      </FlexRowContainer>
    
    </BrowserRouter>
  </React.StrictMode>
);

