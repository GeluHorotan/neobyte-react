const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
exports.handler = async function (event, context) {
  // Basic function in node JS for fetching the users.

  const allUsers = `https://neobyte-api.herokuapp.com/users`;
  const response = await fetch(allUsers);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
