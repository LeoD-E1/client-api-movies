import { NewUser } from "../../types/users";

export const createUser = async (data: NewUser) => {
  try {
    const res = await fetch("http://localhost:4000/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(JSON.stringify(data));
    return res;
  } catch (error) {
    console.log(error);
  }
};
