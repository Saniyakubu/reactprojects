const Users = ({ usersArray }) => {
  return (
    <div>
      {usersArray?.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
