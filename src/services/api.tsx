export const subjectNames = async () => {
  const url = "https://opentdb.com/api_category.php";

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data.trivia_categories;
  } catch (error) {
    console.log(error);
  }
};
