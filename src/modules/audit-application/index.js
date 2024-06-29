import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, Typography } from '@mui/material';
import store from '../../store/store';
import AuditForm from './components/audit-form';
import Dashboard from './components/dashboard';
import Preview from './components/preview';

const AuditApplication = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Audit Application
            </Typography>
            <Button color="inherit" component={Link} to="/form">
              User
            </Button>
          </Toolbar>
        </AppBar>
        <Container>
          <Routes>
            <Route path="/form" element={<AuditForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/preview" element={<Preview />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Container>
      </Router>
    </Provider>
  );
};

export default AuditApplication;
