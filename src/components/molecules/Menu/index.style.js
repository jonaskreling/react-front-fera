
const styles = theme => ({
  root: {
    position: 'relative',
    height: 60,
    width: '100%',
    background: theme.palette.primary.white,
    textAlign: 'left',
  },
  photo: {
    position: 'absolute',
    height: 210,
    width: 210,
    bottom: -20,
    background: theme.palette.primary.white,
    padding: '5px',
  },
  photoImage: {
    position: 'relative',
    height: '100%',
    width: '100%',
    boxShadow: 'none',
    background: theme.palette.primary.white,
    backgroundImage: '',
    backgroundSize: '100% auto',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
  divUpload: {
    position: 'absolute',
    width: '100%',
    background: 'rgba(0, 0, 0, 0.2)',
    bottom: 0,
    padding: '20px',
    textAlign: 'center',
  },
  buttonEdit: {
    color: theme.palette.primary.white,
    background: 'rgba(0, 0, 0, 0.3)',
  },
  inputFile: {
    display: 'none',
  },
})

export default styles
