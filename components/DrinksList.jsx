import Link from "next/link";
import Image from "next/image";

/*
const DrinksList = ({ drinks }) => {
  return (
    <ul className="menu menu-vertical pl-0">
      {drinks.map((drink) => (
        <li key={drink.idDrink}>
          <Link
            href={`/drinks/${drink.idDrink}`}
            className="text-xl font-medium"
          >
            {drink.strDrink}
          </Link>
        </li>
      ))}
    </ul>
  );
};

*/
//this component is go to each specific drink's page.
//in this we are creating a list of drinks, when clicking on each list item with name of drink it goes
//to that drinks page  (3000/drinks/idDrink)
//every list in React must have a key value, hence idDrink is used.
/*<Link href={`/drinks/${drink.idDrinks}`}>{drink.strDrink}</Link>. This is each list item.
So each list item will be a link to that particular drink of that id (idDrink).
The name (drink.strDrink) is what the link will be.
*/

const DrinksList = ({ drinks }) => {
  return (
    <ul className="grid sm:grid-cols-2 gap-6 mt-6">
      {drinks.map((drink) => (
        <li key={drink.idDrink}>
          <Link
            href={`/drinks/${drink.idDrink}`}
            className="text-xl font-medium"
          >
            <div className="relative h-48 mb-4">
              <Image
                src={drink.strDrinkThumb}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw"
                alt={drink.strDrink}
                className="rounded-md object-cover"
              />
            </div>
            {drink.strDrink}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DrinksList;

/*This provides us with a 2 column layout of drinks in /drinks
Pretty cool. fill property helps fill automatically
*/
