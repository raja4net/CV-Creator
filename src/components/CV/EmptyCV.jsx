import { v4 as uuidv4 } from "uuid";
import emptyAvatar from "../../../src/assets/emptyAvatar.png";

const EmptyCV = {
  personalInfo: {
    picture: emptyAvatar,
    firstname: "",
    lastname: "",
    profession: "",
    city: "",
    country: "",
    pincode: "",
    phone: "",
    email: "",
    twitter: "",
    github: "",
    linkedin: "",
    about: "",
  },
  experience: [
    {
      id: uuidv4(),
      title: "",
      employer: "",
      city: "",
      country: "",
      startDate: "",
      endDate: "",
      role: "",
    },
  ],
  skils: "",
  education: [
    {
      id: uuidv4(),
      institute: "",
      location: "",
      degree: "",
      studyField: "",
      startDate: "",
      endDate: "",
    },
  ],
};

export default EmptyCV;
