import css from "./Error.module.css";

const Error = ({ message = "Oops, something went wrong" }) => {
  return (
    <div className={css.error}>
      <strong>Error:</strong> {message}
    </div>
  );
};

export default Error;
