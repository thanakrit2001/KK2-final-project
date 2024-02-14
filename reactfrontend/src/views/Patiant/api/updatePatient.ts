import axios from "axios";

export type UpdateProfileDTO = {
    data: {
      email: string;
      firstName: string;
      lastName: string;
      bio: string;
    };
  };

  export const updateProfile = ({ data }: UpdateProfileDTO) => {
    return axios.patch(`/users/profile`, data);
  };
  