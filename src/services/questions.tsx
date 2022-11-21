import { useMutation, useQuery } from "react-query";

type Answer = {
  text: string;
  mark: number;
};
export type Question = {
  question: string;
  answers: Answer[];
  selectedAnswer?: Answer;
};

const fetchQuestions = () =>
  new Promise<Question[]>((resolve) => {
    resolve(questions);
  });

const fetchTotalMarks = () =>
  new Promise<number>((resolve) => {
    const marks = questions.reduce((prev, { answers, selectedAnswer }) => {
      const answer = answers.find(
        (answer) => answer.text === selectedAnswer?.text
      )!;

      return (answer.mark || 0) + prev;
    }, 0);

    resolve(marks);
  });

export const useQuestions = () =>
  useQuery<Question[]>(["questions"], fetchQuestions);

export const useMarks = () => useQuery<number>(["marks"], fetchTotalMarks);

export const updateQuestion = (formdata: Question) =>
  new Promise<{}>((resolve) => {
    //mutate questions array
    const selectedQuestion = questions.find(
      (q) => q.question === formdata.question
    )!;
    selectedQuestion.selectedAnswer = formdata.selectedAnswer;
    resolve({});
  });

export const useMutateQuestion = () =>
  useMutation<{}, {}, Question>(updateQuestion);

const generateQuestions = (): Question[] => {
  return [
    {
      question: "What drink do you start your day with?",
      answers: [
        {
          text: "Coffee Zero Sugar",
          mark: 1,
        },
        {
          text: "Milk",
          mark: 3,
        },
        {
          text: "Fresh Juice",
          mark: 2,
        },
        {
          text: "Water",
          mark: 4,
        },
      ],
    },
    {
      question: "How often do you go on a picnic?",
      answers: [
        {
          text: "Weekly",
          mark: 4,
        },
        {
          text: "Monthly",
          mark: 3,
        },
        {
          text: "Rarely",
          mark: 1,
        },
        {
          text: "Never",
          mark: 1,
        },
      ],
    },
    {
      question: "Which of these activities do you enjoy most?",
      answers: [
        {
          text: "Yoga",
          mark: 4,
        },
        {
          text: "Jogging",
          mark: 3,
        },
        {
          text: "Play Vedio Games",
          mark: 1,
        },
        {
          text: "Swimming",
          mark: 2,
        },
      ],
    },

    {
      question: "Where do you prefer spending your vacations?",
      answers: [
        {
          text: "Beach",
          mark: 4,
        },
        {
          text: "Forest",
          mark: 3,
        },
        {
          text: "Mountains",
          mark: 2,
        },
        {
          text: "On the couch",
          mark: 1,
        },
      ],
    },
    {
      question:
        "Which of the following would you choose to eat at a restaurant?",
      answers: [
        {
          text: "Lobster",
          mark: 4,
        },
        {
          text: "Salad",
          mark: 3,
        },
        {
          text: "Burger",
          mark: 2,
        },
        {
          text: "Spaghettie",
          mark: 1,
        },
      ],
    },
    {
      question: "Which country produces about 40% of the world’s coffee?",
      answers: [
        {
          text: "Brazil",
          mark: 4,
        },
        {
          text: "Yemen",
          mark: 3,
        },
        {
          text: "Indonesia",
          mark: 2,
        },
        {
          text: "Japan",
          mark: 1,
        },
      ],
    },
  ];
};

let questions = generateQuestions();

export const reset = () => {
  questions = generateQuestions();
};
