import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// State Store
import useLoginStore from "../../store/loginAuth";

// API LINK AND AXIOS
import { API_LINK } from "../../utils/apiLink";
import axios from "axios";

const Transaction = () => {
  let navigate = useNavigate();
  const isAuthenticated = useLoginStore((state) => state.isAuthenticated);
  const token = useLoginStore((state) => state.token);
  if (!isAuthenticated) return navigate("/");

  // Fetch User Transactions
  const userTransactions = async () => {
    try {
      const { data } = await axios.get(
        `${API_LINK}/transaction/read-transaction`
      );

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userTransactions();
  }, []);

  return (
    <>
      {isAuthenticated && (
        <>
          <div>Transaction</div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            veniam eum laboriosam incidunt obcaecati praesentium earum dolore,
            ab molestiae ipsum, culpa temporibus qui non aperiam dolorum
            sapiente itaque quibusdam placeat eaque! Corrupti earum quis quae
            eaque, quibusdam nostrum aliquam deserunt dolorem ipsam quaerat
            mollitia et illum molestiae ipsa unde deleniti.
          </p>
        </>
      )}
    </>
  );
};

export default Transaction;
