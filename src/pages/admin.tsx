import React, { useState } from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import AdminSubmit from "../Components/AdminSubmit";
import AdminDownload from "../Components/AdminDownload";

type TabPanelProps = {
  selectedTabIndex: number;
  tabIndex: number;
  children: React.ReactNode;
};

function TabPanel({ selectedTabIndex, tabIndex, children }: TabPanelProps) {
  if (tabIndex === selectedTabIndex) {
    return <div>{children}</div>;
  }

  return null;
}

function Admin() {
  const [selectedTabIndex, selectTabIndex] = useState(0);

  function onChange(event: any, selectedTabIndex: number) {
    selectTabIndex(selectedTabIndex);
  }

  return (
    <>
      <AppBar position="static">
        <Tabs
          value={selectedTabIndex}
          onChange={onChange}
          aria-label="simple tabs example"
        >
          <Tab label="Upload data" />
          <Tab label="Download data" />
        </Tabs>
      </AppBar>
      <div style={{ margin: "20px" }}>
        <TabPanel selectedTabIndex={selectedTabIndex} tabIndex={0}>
          <AdminSubmit />
        </TabPanel>
        <TabPanel selectedTabIndex={selectedTabIndex} tabIndex={1}>
          <AdminDownload />
        </TabPanel>
      </div>
    </>
  );
}

export default Admin;
