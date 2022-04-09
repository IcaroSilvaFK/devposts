import axios from "axios";

const token = "1508954927275687944-zaMd0lknMCgSgNqYcfucDwvySc9ljM";

export const twett = axios.create({
  baseURL: "https://api.twitter.com/2/tweets",
});

export const devApi = axios.create({
  baseURL: "https://dev.to/api/",
});
//articles?tag=JavaScript
