import { User } from "../../types/users";

export const signin = async (data: User) => {
  try {
    const res = await fetch("http://localhost:4000/api/users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
