import Question from "./components/Question";
import { FetchData } from "./components/FetchData";

const AppRoutes = [
  {
    index: true,
    element: <Question />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;
