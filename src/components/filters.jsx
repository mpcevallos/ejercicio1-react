function Filters({ search, searchPost }) {
  return ( 
    <div className="container-fluid mt-4">
      <nav className="navbar">
        <div className="container">
          <form className="container-fluid" role="search">
            <input
              name="search"
              className="form-control me-2 mb-5 w-100"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => searchPost(e.target.value)}
              value={search}
            />
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Filters;
