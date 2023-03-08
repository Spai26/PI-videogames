import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addVideogame from "../../../services/redux/actions/addVideogame";
import Inputs from "../../../components/Partials/Imputs/Imputs";
import TextareaFrom from "../../../components/Partials/TextArea/TextareaForm";
import ButtonWithImage from "../../../components/Partials/Button/ButtonWithImage";
import Viewcreate from "../../components/viewCreate/Viewcreate";
import styles from "./Create.module.css";
import initialInputs from "./utils/constans";

const Create = () => {
  const [values, setValues] = useState(initialInputs);
  const genresOpt = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  const inputs = [
    {
      id: 1,
      type: "text",
      name: "name",
      label: "Name",
      htmlFor: "name",
      placeholder: "type name videogame",
      required: true,
      error: "name error",
     /*  pattern: `^[a-zA-Z0-9 ._-]{4,20}$`, */
    },

    {
      id: 2,
      type: "date",
      name: "date_up",
      label: "Date",
      htmlFor: "date_up",
      placeholder: "",
      required: true,
      error: " date error",
      /* pattern: ``, */
    },

    {
      id: 3,
      type: "number",
      name: "rating",
      label: "Rating",
      htmlFor: "rating",
      placeholder: "number 1 to 5",
      required: true,
      error: " number error",
      /* pattern: ``, */
    },
    {
      id: 4,
      type: "text",
      name: "platform",
      label: "Platforms",
      htmlFor: "platform",
      placeholder: "select your platforms",
      required: true,
      error: " patform error",
      /* pattern: ``, */
    },
    {
      id: 5,
      type: "text",
      name: "image",
      label: "Image",
      htmlFor: "image",
      placeholder: "insert one url for image",
      required: true,
      error: " image error",
      /* pattern: ``, */
    },
  ];

  function handeOnChange(e) {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    dispatch(addVideogame(values));
    setValues(initialInputs);
  }

  function handleClick(e) {
    const { name, value } = e.target;
    e.preventDefault();
    if (name === "genres") {
      setValues({
        ...values,
        genres: [...values.genres, value],
      });
    }
  }

  return (
    console.log(genresOpt),
    console.log(values),
    (
      <div className={styles.container}>
        <div className={styles.form_left}>
          <div className={styles.f_header}>
            <h1>Add new Videogame</h1>
          </div>
          <form onSubmit={handleOnSubmit} className={styles.form_content}>
            {inputs.map((input, index) => (
              <Inputs
                key={index}
                {...input}
                value={values[input.name]}
                onChange={handeOnChange}
                error={input.error}
                pattern={input.pattern}
              />
            ))}

            <div className={`${styles.item_selec} ${styles.item}`}>
              <label htmlFor="genres">Genres</label>
              <select name="genres" onChange={handleClick} className={styles.i_s}>
                <option value="">select option </option>
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
            </div>

            <div className={styles.item_textarea}>
              <div>
                <span>Description</span>
              </div>
              <TextareaFrom
                class={styles.from_textarea}
                name="description"
                value={values.description}
                onChange={handeOnChange}
                placeholder="type something text for title ..."
              />
            </div>

            <ButtonWithImage
              class={styles.btn_from}
              type="submit"
              text="Created"
            />
          </form>
        </div>
        <div className={styles.form_right}>
          {values ? <Viewcreate values={values} /> : ""}
        </div>
      </div>
    )
  );
};

export default Create;
