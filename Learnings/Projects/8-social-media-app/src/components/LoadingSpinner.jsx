
const LoadingSPinner = () => {
  return (
  <center>
    <button className="btn btn-primary " type="button" disabled>
  <span className="spinner-border  spinner-border-sm" aria-hidden="true"></span>
  <span role="status">Loading...</span>
</button>
  </center>
  )
}

export default LoadingSPinner