const { Schema, model } = require("mongoose");

const FormModel = new Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    trim: true,
  },
  designation: {
    type: String,
    required: [true, "designation is required"],
    trim: true,
  },
  about: {
    type: String,
    required: [true, "About is required"],
  },
  contact: [
    {
      email: {
        type: String,
        required: [true, "Email is required"],
      },
      phone_number: {
        type: String,
        required: [true, "Phone number is required"],
      },
      link: [
        {
          name: {
            type: String,
            required: [true, "Website name is required"],
          },
          url: {
            type: String,
            required: [true, "url is required"],
          },
        },
      ],
    },
    {
      address: {
        type: String,
        required: [true, "Address is required"],
      },
    },
  ],
  education: [
    {
      edu_name: {
        type: String,
        required: [true, "University/College name is required"],
      },
    },
    {
      inst_name: {
        type: String,
        required: [true, "Institute name is required"],
      },
    },
    {
      duration: {
        type: String,
        required: [true, "Duration is required"],
      },
    },
  ],
  skills: [
    {
      name: {
        type: String,
        required: [true, "Skill name is required"],
      },
    },
  ],
  project: [
    {
      name: {
        type: String,
        required: [true, "Project name is required"],
      },
      about: {
        type: String,
        required: [true, "About project  is required"],
      },
    },
  ],
  experience: [
    {
      name: {
        type: String,
        required: [true, "company name is required"],
      },
      about_post: {
        type: String,
        required: [true, "About post  is required"],
      },
      duration: {
        type: String,
        required: [true, "duration is required"],
      },
    },
  ],
  achievement: [
    {
      name: {
        type: String,
        required: [true, "Achivement name is required"],
      },
      about_ach: {
        type: String,
        required: [true, "About achivement  is required"],
      },
      duration: {
        type: String,
        required: [true, "duration is required"],
      },
    },
  ],
});

module.exports = model("form", FormModel);
