import { getAuthInfo } from "../utils/localStorageFunctions";
import { api } from "./authController";

export const getInfluencerInfo = (id) => {
  return api({
    method: "GET",
    url: `/influencer/${id}`,
  });
};
