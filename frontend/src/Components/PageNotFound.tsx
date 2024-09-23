import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function PageNotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      console.error("Page not found. Redirecting...");
      navigate("/", { replace: true });
    }, 100);
    return () => clearTimeout(timer);
  }, [navigate]);

  return null;
}
