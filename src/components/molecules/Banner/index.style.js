
const styles = theme => ({
  root: {
    position: 'relative',
    height: 420,
    width: '100%',
    background: theme.palette.primary.main,
    backgroundSize: '100% auto',
    backgroundPosition: 'center',
    textAlign: 'left',
    overflowX: 'hidden',
    overflowY: 'hidden',
    backgroundRepeat: 'no-repeat',
  },
  divUpload: {
    position: 'relative',
    padding: '20px 30px',
  },
  buttonEdit: {
    color: theme.palette.primary.light,
    background: 'rgba(0, 0, 0, 0.3)',
  },
  inputFile: {
    display: 'none',
  },
})

export default styles
