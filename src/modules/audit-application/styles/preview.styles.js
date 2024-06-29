import { makeStyles } from '@mui/styles';

const usePreviewStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
  header: {
    marginBottom: theme.spacing(3),
  },
  auditPaper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  auditTitle: {
    marginBottom: theme.spacing(1),
  },
  gridItem: {
    marginBottom: theme.spacing(2),
  },
  divider: {
    margin: `${theme.spacing(1)}px 0`,
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

export default usePreviewStyles;
