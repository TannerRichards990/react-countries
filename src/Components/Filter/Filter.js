import './Filter.css';

export default function Filter({ search, setSearch, type, setType }) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Oceania">Oceania</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="North America">North America</option>
        <option value="Antarctica">Antarctica</option>
        <option value="South America">South America</option>
        <option value="Asia">Asia</option>
      </select>
    </div>

  );
}