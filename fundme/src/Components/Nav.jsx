function Nav() {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <p>Go Get Funding</p>
        <div className="nav__logo--border"></div>
      </div>
      <div className="nav__middle">
        <button>Start Fundraising</button>
        <button>Fundraisers</button>
      </div>
      <div className="nav__right">
        <button>Log in</button>
        <button>Sign in</button>
      </div>
    </nav>
  );
}

export default Nav;
