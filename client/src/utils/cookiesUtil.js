export const getCookie = name => {
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
};
export const setCookie = (key, value, options) => {
  const newCookie = `${key}=${value}; ${options.join("; ")}`;
  document.cookie = newCookie;
}
export const deleteCookie = (key) => {
  document.cookie = `${key}=`;
}

export const getAuthToken = () => getCookie("token");
// Add HTTPOnly flag to options array for security
export const setAuthToken = token => setCookie("token", token, ["path='/'"]);
export const deleteAuthToken = () => deleteCookie("token");