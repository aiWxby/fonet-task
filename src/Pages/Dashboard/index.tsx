import React from "react";

import Introduction from "../../components/Dashboard/Introduction";
import DataTable from "../../components/Dashboard/DataTable";

function Index() {
  return (
    <div className="space-y-12">
      <Introduction />
      <div className="p-5 bg-secondary-900">
        <DataTable />
      </div>
    </div>
  );
}

export default Index;
