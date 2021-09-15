// Display list of email of users from localStorage after successful login

export default function UserList(props) {
  // Retrieve users data from localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  return (
    <div className="list-wrapper">
      <h1 className="list-header">
        Hello, <em className="user-name">{props.user.name}</em>
      </h1>
      <div className="user-list">
        {/* Map through the users data to display email with user id as unique key */}
        {users.map((user) => {
          return (
            <div className="list-item" key={user.id}>
              {user.email}
            </div>
          );
        })}
      </div>

      {/* Logout button to traverse to login page */}
      <button onClick={() => props.listToggle(false)}>Logout</button>
    </div>
  );
}
