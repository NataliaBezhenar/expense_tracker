import "./ErrorModal.css";
import Card from "../UI/Card";

const ErrorModal = (props) => {
  return (
    <>
      <div className="backdrop" onClick={props.onConfirm} />
      <Card className="modal">
        <header className="header">
          <h2>{props.errorTitle}</h2>
        </header>
        <div className="content">
          <p>{props.errorMessage}</p>
        </div>
        <footer className="actions">
          <button type="button" onClick={props.onConfirm}>
            Okay
          </button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
