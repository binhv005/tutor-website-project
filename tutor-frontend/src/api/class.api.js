import api from "./axios";

export const getClasses = (params) => {
  // Axios tự động convert object params thành query string: ?page=1&subject=Toán...
  return api.get("/classes", { params });
};

export const createClass = (data) => {
  return api.post("/classes", data);
};

export const updateClass = (id, data) => {
  return api.put(`/classes/${id}`, data);
};

export const deleteClass = (id) => {
  return api.delete(`/classes/${id}`);
};
