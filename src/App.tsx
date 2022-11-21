import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuestionsPage from "./Pages/QuestionsPage";
import WelcomePage from "./Pages/WelcomePage";
import { Card } from "@chakra-ui/card";

const App: React.FC<{}> = () => {
  return (
    <Card size="lg" width={500}>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="questions/*" element={<QuestionsPage />} />
      </Routes>
    </Card>
  );
};
export default App;
