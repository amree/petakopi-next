interface CoffeeShop {
  uuid: string;
  name: string;
}

export default async function Home() {
  const data = await fetch("https://petakopi.my/api/v1/coffee_shops");
  const coffeeShops = await data.json();

  return (
    <ul>
      {coffeeShops.data.coffee_shops.map((coffeeShop: CoffeeShop) => (
        <li key={coffeeShop.uuid}>
          <h2>{coffeeShop.name}</h2>
        </li>
      ))}
    </ul>
  );
}
