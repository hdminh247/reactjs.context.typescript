import { RoleType } from "../context";

export const isAdmin = (role: RoleType) => {
  return role && (role?.name === "Admin" || role.name === "Provider" || role.name === "Agent");
};

export const isAgent = (role: RoleType) => {
  return role?.name !== "Agent";
};

export const isProvider = (role: RoleType) => {
  return role?.name !== "Provider";
};
