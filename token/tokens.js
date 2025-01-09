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
