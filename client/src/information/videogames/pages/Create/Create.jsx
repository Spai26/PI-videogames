import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addVideogame from "../../../services/redux/actions/addVideogame";
import TextareaFrom from "../../../components/Partials/TextArea/TextareaForm";
import ButtonWithImage from "../../../components/Partials/Button/ButtonWithImage";
import styles from "./Create.module.css";
import { initialState } from "./utils/constans";
import { validateFrom } from "./utils/validate";
import ErrorsMsg from "../../../components/Partials/Errors/Errors";
import setError from "../../../services/redux/actions/setError";

const Create = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setSerrors] = useState({});
  const genresOpt = useSelector((state) => state.genres);
  const messageError = useSelector((state) => state.messageError);
  const dispatch = useDispatch();

  function handleOnChange(e) {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  function handleBlur(e) {
    handleOnChange(e);
    setSerrors(validateFrom(values));
  }

  function handleClick(e) {
    const { name, value } = e.target;
    e.preventDefault();
    if (name === "genres") {
      if (values.genres.includes(value)) {
        dispatch(setError("Ya ha seleccionado este genero"));
      } else {
        setValues({
          ...values,
          genres: [...values.genres, value],
        });
      }
    }
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    setSerrors(validateFrom(values));
    if (Object.keys(errors).length === 0) {
      dispatch(addVideogame(values));
      dispatch(setError("Videogame ADD!! "));
    } else {
      dispatch(setError("You have Errors in your request"));
      return;
    }
    setValues(initialState);
  }

  useEffect(() => {
    let timer;
    if (messageError) {
      timer = setTimeout(() => {
        dispatch(setError(""));
      }, 3000);
    }
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageError]);

  return (
    console.log(errors),
    (
      <div className="create">
        <div className={styles.container}>
          <div className={styles.f_header}>
            <h1>Create Videogame</h1>
          </div>
          <form onSubmit={handleOnSubmit} className={styles.form_content}>
            <div className={styles.items}>
              <label htmlFor={values.name}>Title</label>
              <input
                type="text"
                name="name"
                value={values.name}
                placeholder="insert your title for videogame"
                onBlur={handleBlur}
                onChange={handleOnChange}
                required
              />
              {errors && <p>{errors.name}</p>}
            </div>

            <div className={styles.items}>
              <label htmlFor={values.date_up}>Date</label>
              <input
                type="date"
                name="date_up"
                value={values.date_up}
                onBlur={handleBlur}
                onChange={handleOnChange}
                required
              />
              {errors && <p className={styles.form__error}>{errors.date_up}</p>}
            </div>

            <div className={styles.items}>
              <label htmlFor={values.rating}>Rating</label>
              <input
                type="number"
                name="rating"
                step={0.1}
                min={1}
                max={5}
                value={values.rating}
                onBlur={handleBlur}
                onChange={handleOnChange}
                required
              />
              {errors && <p>{errors.rating}</p>}
            </div>

            <div className={styles.items}>
              <label htmlFor={values.platforms}>Platforms </label>
              <input
                type="text"
                name="platforms"
                value={values.platforms}
                placeholder="Insert anymore platforms"
                onBlur={handleBlur}
                onChange={handleOnChange}
                required
              />
              {errors && <p>{errors.platforms}</p>}
            </div>

            <div className={styles.items}>
              <label htmlFor={values.image}>Image </label>
              <input
                type="text"
                name="image"
                value={values.image}
                placeholder="insert url for you image"
                onBlur={handleBlur}
                onChange={handleOnChange}
                required
              />
              {errors && <p>{errors.image}</p>}
            </div>

            <div className={styles.items}>
              <label htmlFor="genres">Genres</label>

              <select
                name="genres"
                onChange={handleClick}
                /* className={styles.i_s} */
                required
              >
                <option value="" disabled>
                  select option{" "}
                </option>
                {genresOpt.map((opt) => (
                  <option
                    key={opt.id}
                    value={opt.name}
                    name="genre"
                    onClick={handleClick}
                  >
                    {opt.name}
                  </option>
                ))}
              </select>

              {values.genres && (
                <span>{values.genres.map((g) => g + " ")}</span>
              )}
            </div>

            {values.genres.length ? <div></div> : ""}

            <div className={styles.item_textarea}>
              <label htmlFor="description">Description</label>
              <TextareaFrom
                class={styles.from_textarea}
                name="description"
                value={values.description}
                onChange={handleOnChange}
                placeholder="type something text for title ..."
                onBlur={handleBlur}
              />
              {errors && <p>{errors.description}</p>}
            </div>
            {messageError && <ErrorsMsg  message={messageError} />}
            <div className={styles.btn}>
              {/* <ButtonWithImage style={`btn`} type="submit" text="Created" /> */}
              <button className="btn" type="submit">
                created
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default Create;
