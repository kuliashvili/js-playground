// 1) token storage

const storeToken = (token) => {
  localStorage.setItem("storeToken", token);
  localStorage.setItem("tokenTimeStamp", new Date().getTime());
};

//get token from storage
const getToken = () => {
  const token = localStorage.getItem("storeToken");
  console.log(token);
};

//remove
const removeToken = () => {
  localStorage.removeItem("storeToken");
  localStorage.removeItem("storeToken");
};

// 2) token with date expiration

const tokenWitDate = (token, hourse) => {
  const now = new Date().getTime();
  const expirationTime = now + hourse * 60 * 60 * 1000;

  const tokenData = {
    value: token,
    expiry: expirationTime,
  };

  localStorage.setItem("someToken", JSON.stringify(tokenData));
};
