import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
          name: "Barangay Certificate",
          ...item,
        };
      });
      const indigenciesArray = data[0].indigency.map((item) => {
        return {
          name: "Barangay Indigency",
          ...item,
        };
      });

      let mergeData = certificatesArray.concat(indigenciesArray);
      mergeData.sort((a, b) => {
        return new Date(a.created_at) + new Date(b.created_at);
      });
      setData(mergeData);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  useEffect(() => {
    userTransactions();
  }, []);

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
      },
    },
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
                onClick={(e) => {
                  e.stopPropagation();
                  const currentId = tableMeta.rowData[0];

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
                      Swal.fire(
                        "Deleted!",
                        "Your file has been deleted.",
                        "success"
                      );
                    }
                  });
                }}
              >
                Cancel
              </button>
              {/* <button
                onClick={(e) => {
                  const { data } = this.state;
                  data.shift();
                  this.setState({ data });
                }}
              >
                Delete
              </button> */}
            </>
          );
        },
      },
    },
  ];

  const options = {
    onRowClick: (e) => {
      console.log(e);
    },
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

  return (
    <>
      {isAuthenticated && (
        <>
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
