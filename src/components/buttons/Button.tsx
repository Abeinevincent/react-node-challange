import "./button.css";

const Button = ({
  btnText,
  handleClick,
}: {
  btnText: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <div className="btn-container">
      <button className="join-btn" onClick={handleClick}>
        {btnText}
      </button>
    </div>
  );
};

export default Button;
