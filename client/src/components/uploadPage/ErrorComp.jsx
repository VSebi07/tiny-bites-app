const ErrorComp = ({err_mes}) => {
  return (  
    <div className="error-field">
      <span>{err_mes}</span>
    </div>
  );
}
 
export default ErrorComp;