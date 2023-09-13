function SmallBtn({ text, action }) {
  return (
    <button className="small-button" onClick={action}>
      {text}
    </button>
  );
}

export default SmallBtn;
