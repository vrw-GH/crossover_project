const SearchForm = ({ handleSearchClick }) => {
  return (
    <div>
      <form>
        <input type="search" placeholder="Search by Restaurant" />
        <input type="search" placeholder="Search by City" />
        <button type="submit" onClick={(e) => handleSearchClick(e)}>
          Search
        </button>
      </form>
    </div>
  );
};
export default SearchForm;
