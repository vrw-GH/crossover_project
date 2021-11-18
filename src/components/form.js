const SearchForm = ({
  handleSearchClick,
  handleClearQry1,
  handleClearQry2,
}) => {
  return (
    <div>
      <form>
        <input type="search" placeholder="Search by Tag" />
        <input type="search" placeholder="Search by City" />
        <button type="submit" onClick={(e) => handleSearchClick(e)}>
          Search
        </button>
      </form>
    </div>
  );
};
export default SearchForm;
