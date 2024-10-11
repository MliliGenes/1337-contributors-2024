import { useEffect } from "react";
import { fetchMembers } from "./store/membersSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import Index from "./pages";

function App() {
  const dispatch = useDispatch();
  // @ts-ignore
  const members = useSelector((state: RootState) => state.members.list);
  // @ts-ignore
  const loading = useSelector((state: RootState) => state.members.loading);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchMembers());
  }, []);

  useEffect(() => {
    console.log(members, loading);
  }, [members, loading]);

  return (
    <>
      <Index />
    </>
  );
}

export default App;
