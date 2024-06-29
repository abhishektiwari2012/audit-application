import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Paper,
  Typography,
  Button,
  CssBaseline,
  Divider,
} from '@mui/material';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import useDashboardStyle from '../../styles/dashboard.styles';
import DashboardPicChart from '../pie-chart';
import { locationCount } from '../../utils';
import DashboardComposedChart from '../composed-chart';


const Dashboard = () => {
  const classes = useDashboardStyle();
  const auditData = useSelector((state) => state.audit.auditData);
  const navigate = useNavigate();

  const locationChartData = locationCount(auditData);

  const handlePreview = () => {
    navigate('/preview');
  };

  return (
    <div className={classes.mainContainer}>
      <CssBaseline />
      <main className={classes.mainContent}>
        <Typography variant="h4" gutterBottom>
          Audit Dashboard
        </Typography>
        <DashboardComposedChart/>
        <Grid container spacing={3} className={classes.chartContainer}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" gutterBottom className={classes.sectionHeader}>
                Gender Comparison
              </Typography>
              <Divider sx={{ mb: 2 }} />        
                <DashboardPicChart/>         
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" gutterBottom className={classes.sectionHeader}>
                Audits by Location
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={locationChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="green" />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.buttonContainer} justifyContent="center">
          <Grid item xs={12} md={6} align="center">
            <Button variant="contained" color="primary" onClick={handlePreview}>
              Preview
            </Button>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default Dashboard;
