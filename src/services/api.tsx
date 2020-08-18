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

export const QuestionFetch = async (
  number: number,
  level: string,
  category: string
) => {

  console.log(number, level, category)
  const url = `https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${level}&type=multiple`;


  try{

  const response = await fetch(url);
  const data = await response.json();


  console.log(data.results)
  }

  catch (error){

    console.log(error)

  }
  
};

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
};
