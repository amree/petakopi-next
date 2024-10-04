export default async function Home() {
  let data = await fetch("https://petakopi.my/api/v1/coffee_shops");
  let shops = await data.json();

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
