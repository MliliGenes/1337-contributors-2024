import Layout from "./pages/layout";
import Home from "./pages/home";
import Team from "./pages/team";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMembers } from "./store/membersSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchMembers());
  });
  return (
    <>
      <Layout>
        <Home />
        <Team />
      </Layout>
    </>
  );
}

export default App;
