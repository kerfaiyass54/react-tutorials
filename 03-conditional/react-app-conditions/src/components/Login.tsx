

function LoginMessage(props: any) {
  return (
    <h2>
      {props.isLoggedIn ? "Welcome User" : "Please log in"}
    </h2>
  );
}

export default LoginMessage;