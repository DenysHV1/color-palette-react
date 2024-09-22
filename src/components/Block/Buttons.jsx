export const Buttons = ({shoveBlock, hideBlock}) => {
  return (
    <div className="blockBtnContainer">
      <button className="blockBtn" onClick={shoveBlock}>Shove</button>
      <button className="blockBtn" onClick={hideBlock}>Hide</button>
    </div>
  );
};
