


function UserCard(props: any) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default UserCard;