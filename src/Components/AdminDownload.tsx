import React from "react";
import { Button } from "@material-ui/core";
import axios from "axios";
import fileDownload from "js-file-download";

function doDownload() {
  axios.get("http://localhost:3001/downloadData").then((res) => {
    fileDownload(res.data, "filename.csv");
  });
}

function DownloadButton() {
  return (
    <Button variant="contained" color="primary" onClick={doDownload}>
      Download data
    </Button>
  );
}

function AdminDownload() {
  return (
    <div>
      <p>Export all of your exisitng data below.</p>
      <DownloadButton />
    </div>
  );
}

export default AdminDownload;