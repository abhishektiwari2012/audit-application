import { makeStyles } from '@mui/styles';

const useDashboardStyle = makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
  },
  mainContent: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    height: '100%',
  },
  sectionHeader: {
    marginBottom: theme.spacing(2),
  },
  chartContainer: {
    marginBottom: theme.spacing(4),
  },
  gridItem: {
    height: '100%',
  },
  buttonContainer: {
    marginTop: theme.spacing(4),
  },
}));

export default useDashboardStyle;
