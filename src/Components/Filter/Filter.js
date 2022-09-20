import './Countries.css';

export default function Countries({ name, iso2 }) {
  return (
    <div className="countries">
      <h3>{name}</h3>
      <img src={`https://flagcdn.com/72x54/${iso2.toLowerCase()}.png`} />
    </div>
  );
}