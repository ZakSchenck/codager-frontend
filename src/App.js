import "./App.css";
import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import * as api from "./services/CardApi";
// Components
import Header from "./components/Header/Header";
import AllCards from "./components/AllCards/AllCards";
import PostCard from "./components/PostCard/PostCard";
import EditCard from "./components/EditCard/EditCard";
import Navigator from "./components/Navigator/Navigator";
import SingleCard from "./components/SingleCard/SingleCard";
import CardsSearch from "./components/CardsSearch/CardsSearch";
import PendingCards from "./components/PendingCards/PendingCards";
import PendingSearch from "./components/PendingSearch/PendingSearch";
import CompletedCards from "./components/CompletedCards/CompletedCards";
import CompletedSearch from "./components/CompletedSearch/CompletedSearch";
export const DataContext = createContext(null);

function App() {
  // All card data
  const [dataFetch, setDataFetch] = useState([]);
  const [fullData, setFullData] = useState([]);
  // Pending card data
  const [pendingData, setPendingData] = useState([]);
  const [filteredPending, setFilteredPending] = useState([]);
  // Completed card data
  const [completedData, setCompletedData] = useState([]);
  const [filteredCompleted, setFilteredCompleted] = useState([]);

  const [singleCard, setSingleCard] = useState([]);

  // GET Api request function
  const fetchRequests = async () => {
    const data = await api.getCards();
    setDataFetch(data);
    setFullData(data);
    // Pending filter array
    const pendingArray = data.filter((item) => item.status === "Pending");
    setPendingData(pendingArray);
    setFilteredPending(pendingArray);
    // Completed filter array
    const completedArray = data.filter((item) => item.status === "Completed");
    setCompletedData(completedArray);
    setFilteredCompleted(completedArray);
  };
  // Calls API request on load
  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <main className="App">
      {/* Context object for child components */}
      <DataContext.Provider
        value={{
          setData: setDataFetch,
          data: dataFetch,
          filteredData: fullData,
          pendingData: pendingData,
          filteredPending: filteredPending,
          setPendingData: setPendingData,
          completedData: completedData,
          filteredCompleted: filteredCompleted,
          setCompletedData: setCompletedData,
          setSingleCard: setSingleCard,
          singleCard: singleCard
        }}
      >
        <Routes>
          <Route
            path="/codager-frontend"
            element={
              <>
                {" "}
                <Header /> <CardsSearch /> <Navigator /> <AllCards />{" "}
              </>
            }
          />
          <Route
            path="/codager-frontend/pending"
            element={
              <>
                {" "}
                <Header /> <PendingSearch /> <Navigator /> <PendingCards />{" "}
              </>
            }
          />
          <Route
            path="/codager-frontend/completed"
            element={
              <>
                {" "}
                <Header /> <CompletedSearch /> <Navigator /> <CompletedCards />{" "}
              </>
            }
          />
          <Route
            path="/codager-frontend/clients/:cardId"
            element={
              <>
                <Header /> <SingleCard fetchRequests={fetchRequests} />
              </>
            }
          />
          <Route path="/codager-frontend/new-client" element={<PostCard fetchRequests={fetchRequests} />} />
          <Route path="/codager-frontend/clients/:cardId/update" element={<EditCard fetchRequests={fetchRequests} />} />
        </Routes>
      </DataContext.Provider>
    </main>
  );
}

export default App;
