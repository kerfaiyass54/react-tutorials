function UserList() {
  const users = [
    { id: 1, name: "Sara" },
    { id: 2, name: "Ali" },
    { id: 3, name: "John" }
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}


export default UserList;