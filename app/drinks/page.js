import DrinksList from "@/components/DrinksList";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const fetchDrinks= async() => {
  //wait for 1000 milliseconds (1 second) just a slight delay thats all
  await new Promise((resolve) => setTimeout(resolve, 1000));

  //make fetch request to url
  const response= await fetch(url);

  //throw error
  if(!response.ok)
  {
    throw new Error('Failed to fetch drinks :(');
  }

  const data= await response.json();
  //return the parse data
  return data;

}

const DrinksPage = async () => {

    const data= await fetchDrinks(); //fetch data from the url link where the drink list and stuff is there
    return (
      <div>
        <DrinksList drinks={data.drinks}></DrinksList> 
      </div>
    )
  };

  /*
  so now the drinks={data.drinks} is passed into the DrinksList.jsx in components. data.drinks is where
  the drinks is stored in the url cocktaildb.com. ps data is json version of resposne as shown 
  */

export default DrinksPage
