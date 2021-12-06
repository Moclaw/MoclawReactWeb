import { useLocation } from "react-router";
import Blog from "../Blogs/Blog";
export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="home">
        <Blog />
      </div>
    </>
  );
}
