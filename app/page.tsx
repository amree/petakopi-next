export default async function Home() {
  const data = await fetch("https://petakopi.my/api/v1/coffee_shops");
  const shops = await data.json();

  return (
    <ul>
      {shops.data.coffee_shops.map((shop) => (
        <li key={shop.uuid}>
          <h2>{shop.name}</h2>
        </li>
      ))}
    </ul>
  );
}
