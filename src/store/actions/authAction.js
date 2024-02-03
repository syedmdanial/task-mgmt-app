export const loginUser = (res) => (dispatch) => {
  // console.log(res);
  const mockUser = {
    id: "123",
    name: "danial",
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (res.id === mockUser.id && res.name === mockUser.name) {
        dispatch(setLoginSuccess);
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
};

export const setLoginSuccess = (res) => (dispatch) => {
  console.log(res);
  dispatch({
    type: "LOGIN_SUCCESS",
    payload: res,
  });
};

export const logoutUser = () => ({
  type: "LOGOUT",
  payload: {},
});
