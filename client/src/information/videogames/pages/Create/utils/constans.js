export const initialState = {
  name: "",
  description: "",
  platforms: "",
  image: "",
  date_up: "",
  rating: "",
  genres: [],
};

export const inputs = [
  {
    id: 1,
    type: "text",
    name: "name",
    label: "Name",
    htmlFor: "name",
    placeholder: "type name videogame",
    required: true,
  },

  {
    id: 2,
    type: "date",
    name: "date_up",
    label: "Date",
    htmlFor: "date_up",
    placeholder: "",
    required: true,
  },

  {
    id: 3,
    type: "number",
    name: "rating",
    label: "Rating",
    htmlFor: "rating",
    placeholder: "number 1 to 5",
    required: true,
  },
  {
    id: 4,
    type: "text",
    name: "platforms",
    label: "Platforms",
    htmlFor: "platforms",
    placeholder: "select your platforms",
    required: true,
  },
  {
    id: 5,
    type: "text",
    name: "image",
    label: "Image",
    htmlFor: "image",
    placeholder: "insert one url for image",
    required: true,
  },
];