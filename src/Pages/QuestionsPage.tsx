import { Questions } from "../components/Questions";
import { reset, useQuestions } from "../services/questions";

const QuestionsPage = () => {
  const { data: questions, isLoading, refetch } = useQuestions();

  const startOver = () => {
    reset();
    refetch();
  };

  return isLoading || !questions ? (
    <h1>Loading...</h1>
  ) : (
    <Questions questions={questions} startOver={startOver} />
  );
};

export default QuestionsPage;
