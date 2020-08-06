import { makeStyles } from '@material-ui/core/styles';

export const  homeStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1, 
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },

}));
