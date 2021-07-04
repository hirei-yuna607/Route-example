import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const location = useLocation();
  const { state } = useLocation();
  console.log(location);
  console.log(state);
  return (
    <div>
      <h1>Page1DetailA</h1>
    </div>
  );
};
