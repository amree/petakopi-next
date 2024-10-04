import Image from "next/image"

interface CoffeeShop {
  uuid: string;
  name: string;
  state: string;
  logo: string;
}

export default async function Home() {
  const data = await fetch("https://petakopi.my/api/v1/coffee_shops");
  const coffeeShops = await data.json();

  return (
    <div className="bg-white max-w-md mx-auto bg-white shadow-lg">
      <ul role="list" className="divide-y divide-gray-100">
        {coffeeShops.data.coffee_shops.map((coffeeShop: CoffeeShop) => (
          <li key={coffeeShop.uuid} className="flex gap-x-4 py-5">
            <Image
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src={coffeeShop.logo} alt="{coffeeShop.name}"
              width={48}
              height={48}
            />
            <div className="min-w-0">
              <p className="text-sm font-semibold leading-6 text-gray-900">{coffeeShop.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{coffeeShop.state}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
