export const validateFrom = (values) => {
  let errors = [];
  let regexTitle = /^[a-zA-Z0-9!@#$%^&*()_+={[}\]|\\:;"'<,.>?/ -]{5,30}$/;
  let regexRating = /^\d{1,10}(\.\d{1,5})?$/;
  let regexImage = /\.(jpe?g|png|gif|bmp|webp)$/i;
  let regexdescription = /^.{0,300}$/;

  if (!values.name.trim()) {
    errors.name = "Insert one title for you videogame";
  } else if (!regexTitle.test(values.name.trim())) {
    errors.name = "The title must have at least 5 and max 30 characters";
  }

  if (!regexRating.test(values.rating)) {
    errors.rating = "ingresa un numero valido de 1 a 5";
  }

  if (!values.platforms.trim()) {
    errors.platforms = "ingresa una plataforma ";
  }

  if (!values.image.trim()) {
    errors.image = "ingresa una url de imagen";
  } else if (!regexImage.test(values.image.trim())) {
    errors.image = "ingrea una url valida";
  }

  if (!values.description.trim()) {
    errors.description = "es requerido";
  } else if (!regexdescription.test(values.description)) {
    errors.description = "Solo puede ingresar 300 caracteres";
  }
  return errors;
};
