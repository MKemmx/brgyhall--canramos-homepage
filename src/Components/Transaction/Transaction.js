import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./TransactionCss.css";

// Data Table
import MUIDataTable from "mui-datatables";

// State Store
import useLoginStore from "../../store/loginAuth";

// API LINK AND AXIOS
import { API_LINK } from "../../utils/apiLink";
import axios from "axios";

// Sweet Alert
import Swal from "sweetalert2";

const Transaction = () => {
  let navigate = useNavigate();
  const user = useLoginStore((state) => state.user);
  const isAuthenticated = useLoginStore((state) => state.isAuthenticated);
  const token = useLoginStore((state) => state.token);
  if (!isAuthenticated) return navigate("/");
  const config = {
    headers: {
      "Content-Type": "application/json",
      "auth-token": token,
    },
  };
  // Fetch User Transactions
  const [data, setData] = useState([]);
  const userTransactions = async () => {
    try {
      const { data } = await axios.get(
        `${API_LINK}/transaction/read-user-transaction`,
        config
      );
      const certificatesArray = data[0].certificate.map((item) => {
        return {
          name: 1,
          ...item,
        };
      });
      const indigenciesArray = data[0].indigency.map((item) => {
        return {
          name: 2,
          ...item,
        };
      });

      let mergeData = certificatesArray
        .concat(indigenciesArray)
        .sort((a, b) => {
          return new Date(a.created_at) + new Date(b.created_at);
        })
        .reverse();
      setData(mergeData);
      //
      console.log(mergeData);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  const columns = [
    {
      name: "_id",
      label: "Transaction Id",
    },
    {
      name: "name",
      label: "Name of Certificate",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              {value === 1 ? (
                <p>Barangay Certificate</p>
              ) : (
                <>
                  <p>Barangay Certificate</p>
                </>
              )}
            </>
          );
        },
      },
    },
    {
      name: "requestPurpose",
      label: "Request Purpose",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "status",
      label: "Status",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <p>{value.toUpperCase()}</p>
            </>
          );
        },
      },
    },

    // {
    //   name: "create_at",
    //   label: "created_at",
    //   options: {
    //     filter: true,
    //     sort: true,
    //     customBodyRender: (value, tableMeta, updateValue) => {
    //       console.log(tableMeta);
    //       return (
    //         <>
    //           <p>{value}</p>
    //         </>
    //       );
    //     },
    //   },
    // },

    {
      name: "Action",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <button
                disabled={tableMeta.rowData[3] === "cancelled" ? true : false}
                className={
                  tableMeta.rowData[3] === "pending"
                    ? "cancel-btn"
                    : "cancel-btn disabled"
                }
                onClick={(e) => {
                  e.stopPropagation();
                  const data = {
                    currentId: tableMeta.rowData[0],
                    currentNum: tableMeta.rowData[1],
                  };

                  Swal.fire({
                    title: "Cancel transacion?",
                    text: "This transaction will be cancelled",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, confirm",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      cancelTransaction(data);
                    }
                  });
                }}
              >
                Cancel
              </button>
            </>
          );
        },
      },
    },
  ];

  const options = {
    selectableRows: false,
    print: false,
    filterType: "dropdown",
    textLabels: {
      body: {
        noMatch: "Sorry, no records found!",
        toolTip: "Sort",
        columnHeaderTooltip: (column) => `Sort for ${column.label}`,
      },
      pagination: {
        next: "Next Page",
        previous: "Previous Page",
        rowsPerPage: "Rows per page:",
        displayRows: "of",
      },
      toolbar: {
        search: "Search",
        downloadCsv: "Download CSV",
        viewColumns: "View Columns",
        filterTable: "Filter Table",
      },
      filter: {
        all: "All",
        title: "FILTERS",
        reset: "RESET",
      },
      viewColumns: {
        title: "Show Columns",
        titleAria: "Show/Hide Table Columns",
      },
      selectedRows: {
        text: "row(s) selected",
        delete: "Delete",
        deleteAria: "Delete Selected Rows",
      },
    },
  };

  // Function Cancel Transaction
  const cancelTransaction = async (data) => {
    const toCancel = {
      status: "cancelled",
    };

    if (data.currentNum === 1) {
      await axios.put(
        `${API_LINK}/certificate/update-certificate/${data.currentId}`,
        toCancel
      );
      userTransactions();
      return Swal.fire(
        "Cancelled!",
        "Transaction succuessfully cancelled",
        "success"
      );
    }

    if (data.currentNum === 2) {
      await axios.put(
        `${API_LINK}/indigency/update-indigency/${data.currentId}`,
        toCancel
      );
      userTransactions();
      return Swal.fire(
        "Cancelled!",
        "Transaction succuessfully cancelled",
        "success"
      );
    }
  };

  // Send Transaction Request
  const sendRequest = async (num) => {
    const { value: requestPurpose } = await Swal.fire({
      title: "Request Form",
      input: "text",
      inputLabel: "Please insert the request purpose",
      inputPlaceholder: "Enter text...",
    });

    const data = {
      residentRequest: user._id,
      requestPurpose,
    };

    if (requestPurpose === undefined || requestPurpose === "") {
      return Swal.fire("Error", "Please type request purpose", "error");
    }

    if (num === 1) {
      await axios.post(`${API_LINK}/certificate/create-certificate/`, data);
      userTransactions();
      return Swal.fire(
        "Request Sent",
        "Barangay certificate request is now waiting for approval!",
        "success"
      );
    }

    if (num === 2) {
      await axios.post(`${API_LINK}/indigency/create-indigency/`, data);
      userTransactions();
      return Swal.fire(
        "Request Sent",
        "Barangay Indigency request is now waiting for approval!",
        "success"
      );
    }

    // if (num === 3) {
    //   return;
    // }
  };

  useEffect(() => {
    userTransactions();
  }, []);

  return (
    <>
      {isAuthenticated && (
        <>
          <div className="transaction-card-container">
            <div className="transaction-card">
              <div className="transaction-card-header">
                <h2>Barangay Certificate</h2>
              </div>
              <div className="transaction-card-body">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                  sapiente in iste, incidunt beatae magnam dolorem fugiat unde
                  provident tenetur amet, reprehenderit voluptate eaque
                  doloremque minim.
                </p>
                <button
                  onClick={() => {
                    sendRequest(1);
                  }}
                  className="transaction-btn"
                >
                  Send Request
                </button>
              </div>
            </div>

            <div className="transaction-card">
              <div className="transaction-card-header">
                <h2>Barangay Indigency</h2>
              </div>
              <div className="transaction-card-body">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                  sapiente in iste, incidunt beatae magnam dolorem fugiat unde
                  provident tenetur amet, reprehenderit voluptate eaque
                  doloremque minim.
                </p>
              </div>
              <button
                onClick={() => {
                  sendRequest(1);
                }}
                className="transaction-btn"
              >
                Send Request
              </button>
            </div>
            <div className="transaction-card">
              <div className="transaction-card-header">
                <h2>Barangay Id</h2>
              </div>
              <div className="transaction-card-body">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                  sapiente in iste, incidunt beatae magnam dolorem fugiat unde
                  provident tenetur amet, reprehenderit voluptate eaque
                  doloremque minim.
                </p>
              </div>
              <button
                onClick={() => {
                  sendRequest(1);
                }}
                className="transaction-btn"
              >
                Send Request
              </button>
            </div>
          </div>
          <div className="primeReactContainer">
            <MUIDataTable
              title={"My Transactions"}
              data={data}
              columns={columns}
              options={options}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Transaction;
