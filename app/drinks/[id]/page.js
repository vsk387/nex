import Link from "next/link";
//url containing the info page of each drink based on drink ID. at the end of url, i='''' , where ''''' is the drink ID.
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

import Image from "next/image";
import drinkImg from "./drink.jpeg";

//app/drinks/[id]/page.js

//GetSingleDrink gets info about each Drink using info in url given.
const GetSingleDrink = async (id) => {
  //look at the url, i={id}. so we are basically trying to fetch the url, and then id at the end to go to that drinks info page
  const res = await fetch(`${url}${id}`);
  //error catching
  if (!res.ok) {
    throw new Error("Failed to  fetch a drink...");
  }
  return res.json();
};

//SingleDrinkPage, you go to the specific Drink's page and then call the GetSingleDrink, so you can get
//the info about that Drink (title (name) and imgSrc (image)).
const SingleDrinkPage = async ({ params }) => {
  const data = await GetSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;
  console.log(title, imgSrc);
  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
      </Link>
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className="w-48 h-48 rounded-lg shadow-lg mb-4"
        priority
        alt={title}
      ></Image>
      {/*<Image src={drinkImg} className='w-48 h-48 rounded-lg'></Image>*/}
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
};

export default SingleDrinkPage;

//<Link> to go back to /drinks page. <h1> for showing the name of Drink. W.

//title show name of Drink and imgSrc shows image of the Drink from the cocktaildb url given. (Thumb-thumbnail)
//? is given to check whether drink for drinkID is available, then prints it out.
/*params in this fn is the singleDrinkPage of speicifc drink, the id of that Page. (/1242),
pass this into the getSingleDrink(params.id), so we can invoke the GetSingleDrink fn and
get info about that specific Drink of that Drink ID. W.

*/
