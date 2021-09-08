import "./style.css";
const Buttons = ({ setPage, page }) => {
  return (
    <div className="containerBtn">
      <button onClick={() => (page > 1 ? setPage(page - 1) : setPage(page))}>
        <span>Prev</span>
      </button>
      <button onClick={() => setPage(page + 1)}>
        <span>Next</span>
      </button>
    </div>
  );
};

export default Buttons;
