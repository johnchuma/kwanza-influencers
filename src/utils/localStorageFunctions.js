export const getAuthInfo = () => {
  const data = localStorage.getItem("influencer-info");
  console.log("influencer info", data);
  return data && data != "undefined" ? JSON.parse(data) : null;
};

export const setAuthInfo = (data) => {
  console.log(data);
  const info = JSON.stringify(data);
  console.log("Auth info", info);
  localStorage.setItem("influencer-info", info);
};
