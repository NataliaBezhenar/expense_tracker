import ReactDOM from "react-dom";
import "./ErrorModal.css";
import Card from "../UI/Card";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
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
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          errorTitle={props.errorTitle}
          errorMessage={props.errorMessage}
          onConfirm={props.onConfirm}
        />,

        document.getElementById("modal-root")
      )}
    </>
  );
};

export default ErrorModal;
