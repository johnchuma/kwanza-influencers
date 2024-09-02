import { getAuthInfo } from "../utils/localStorageFunctions";
import { api } from "./authController";

export const getGigs = () => {
  return api({
    method: "GET",
    url: `/gigs`,
  });
};

export const getGigPosts = (id) => {
  return api({
    method: "GET",
    url: `/gig/posts/${id}`,
  });
};

export const getGigPost = (id) => {
  return api({
    method: "GET",
    url: `/gig-post/${id}`,
  });
};
