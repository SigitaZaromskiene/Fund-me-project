function SmallBtn({ text, action }) {
  return (
    <button data-testid="btn" className="small-button" onClick={action}>
      {text}
    </button>
  );
}

export default SmallBtn;
