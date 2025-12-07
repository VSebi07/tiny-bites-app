import ErrorComp from "./ErrorComp";

const ErrorContainer = ({messages}) => {
  console.log(messages);
  setTimeout(() => {
    messages = [];
  }, 5000);
  
  return (  
    <div id="error-container">
      {messages && messages.map((m) => (
        <ErrorComp err_mes={m}/>
      ))}
    </div>
  );
}
 
export default ErrorContainer;