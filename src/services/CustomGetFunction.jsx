import { useState, useEffect } from "react";
import axios from "axios";

import { getMethod } from "./api-services";
import { toast } from "react-toastify";
import { logoutHandler } from "../Helper/LogoutHandler";
import { useNavigate } from "react-router-dom";
export default function CustomGetFunction(url, depen = []) {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState([]);
  const navigate = useNavigate();
  const AlertToast = (msg) => msg;
  useEffect(() => {
    (async () => {
      try {
        setLoading(false);
        const response = await axios.request(getMethod(url));
        setLoading(true);
        if (response.data.status === "success") {
          setData(response.data.data);
          setData2(response);
          setPagination(response.data);
          return;
        }
        if (response.data.status === "error") {
          setError(true);
          throw new Error(response);

          return;
        }
      } catch (error) {
        setLoading(true);
        console.log(error.response.data.message);
        // AlertToast(toast.error(error.response.data.message));
        // toast.error(error.response.data.message);
        if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
          navigate("/dashboard/login");
          logoutHandler();
        }

        setError(err.response.data.errors);
      }
    })();

    return () => {
      setData([]);
    };
  }, [url, ...depen]);

  return { data, data2, pagination, loading, error };
}
