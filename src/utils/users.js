const users = [];

const adduser = ({ id, username, room }) => {
  //clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  //validate data
  if (!username || !room) {
    return {
      error: "Username and room are required",
    };
  }

  //check for existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  //validate username
  if (existingUser) {
    return {
      error: "Username is in use!",
    };
  }
  // store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => {
    return user.id === id;
  });

  if (index !== -1) {
    return users.splice(index, 1)[0]; //splice returns an array coz it can be used to remove multiple index of the array but we are removing one therefore need only the zeroth index [0]
  }
};

const getUser = (id) => {
  return users.find((user) => {
    return user.id === id;
  });
};

const getUsersInRoom = (room) => {
  return users.filter((user) => {
    return user.room === room;
  });
};

module.exports = {
  adduser,
  removeUser,
  getUser,
  getUsersInRoom,
};
