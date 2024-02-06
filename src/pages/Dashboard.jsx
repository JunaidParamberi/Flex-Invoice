import React from "react";
import Navbar from "../components/Navbar";
import Overview from "../components/Overview";
import Filter from "../components/Filter";
import InvoiceListHead from "../InvoiceEditor/InvoiceListHead";
import Table from "../components/Table";
import DataTable from "../components/MUITable";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { serverTimestamp } from "firebase/firestore";
import Invoice from "./Invoice";

function Dashboard() {
  return (
    <>
      <Invoice />
      <div className="bg-[#090852] min-h-[100vh] dashboard ">
        <Navbar />
        <Overview />

        <div className="flex mr-[2%] ml-[2%] bg-white p-[20px] rounded-2xl h-[63vh] gap-[20px] mt-[1.5%] flex-col ">
          <InvoiceListHead />
          {/* <Filter /> */}
          <Table />
          {/* <Fab
          sx={{
            position: "absolute",
            bottom: "8%",
            right: "4%",
            width: "100px",
            borderRadius: "10px",
          }}
          color="primary"
          aria-label="add"
        >
          <AddIcon /> {n.toLocaleLowerCase()}
        </Fab> */}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
