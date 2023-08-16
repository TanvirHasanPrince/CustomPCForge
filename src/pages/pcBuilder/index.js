import React, { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import RootLayout from "@/components/Layouts/RootLayout";
import toast, { Toaster } from "react-hot-toast";


const PcBuilderHomePage = () => {
  // Get the selected components from the Redux store
  const selectedProcessor = useSelector((state) => state.build.processors);
  const selectedMotherboards = useSelector((state) => state.build.motherboards);
  const selectedRAM = useSelector((state) => state.build.ram);
  const selectedPSU = useSelector((state) => state.build.psu);
  const selectedHdd = useSelector((state) => state.build.hdd);
  const selectedMonitor = useSelector((state) => state.build.monitor);

  const selectedComponents = [
    selectedProcessor,
    selectedMotherboards,
    selectedRAM,
    selectedPSU,
    selectedHdd,
    selectedMonitor,
  ];

  const totalRequiredComponents = selectedComponents.length;

  const selectedCount = selectedComponents.filter(
    (component) => component.length > 0
  ).length;

  const notify = () => toast.success("Congratulations! Your Build is Complete");


  return (
    <div className="text-center">
      <div className="flex items-center justify-center py-10 my-5">
        <table className="table-auto border-collapse">
          <thead>
            <tr className="border">
              <th className="border">Category</th>
              <th className="border">Selected Component</th>
              <th className="border">Cost</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td className="border p-5">CPU/Processors</td>
              <td className="border p-5">
                {selectedProcessor.length > 0 ? (
                  <p>{selectedProcessor[0].productName}</p>
                ) : (
                  <Link
                    className="btn btn-accent"
                    href="/pcBuilder/builderProcessors"
                  >
                    Select
                  </Link>
                )}
              </td>
              <td className="border p-5">
                {selectedProcessor.length > 0 ? selectedProcessor[0].price : 0}
              </td>
            </tr>

            <tr>
              <td className="border p-5">Motherboards</td>
              <td className="border p-5">
                {selectedMotherboards.length > 0 ? (
                  <p>{selectedMotherboards[0].productName}</p>
                ) : (
                  <Link
                    className="btn btn-accent"
                    href="/pcBuilder/builderMotherboards"
                  >
                    Select
                  </Link>
                )}
              </td>
              <td className="border p-5">
                {selectedMotherboards.length > 0
                  ? selectedMotherboards[0].price
                  : 0}
              </td>
            </tr>

            <tr>
              <td className="border p-5">RAM</td>
              <td className="border p-5">
                {selectedRAM.length > 0 ? (
                  <p>{selectedRAM[0].productName}</p>
                ) : (
                  <Link className="btn btn-accent" href="/pcBuilder/builderRam">
                    Select
                  </Link>
                )}
              </td>
              <td className="border p-5">
                {selectedRAM.length > 0 ? selectedRAM[0].price : 0}
              </td>
            </tr>
            <tr>
              <td className="border p-5">Power Supply Unit</td>
              <td className="border p-5">
                {selectedPSU.length > 0 ? (
                  <p>{selectedPSU[0].productName}</p>
                ) : (
                  <Link className="btn btn-accent" href="/pcBuilder/builderPsu">
                    Select
                  </Link>
                )}
              </td>
              <td className="border p-5">
                {selectedPSU.length > 0 ? selectedPSU[0].price : 0}
              </td>
            </tr>

            <tr>
              <td className="border p-5">HDD</td>
              <td className="border p-5">
                {selectedHdd.length > 0 ? (
                  <p>{selectedHdd[0].productName}</p>
                ) : (
                  <Link className="btn btn-accent" href="/pcBuilder/builderHdd">
                    Select
                  </Link>
                )}
              </td>
              <td className="border p-5">
                {selectedHdd.length > 0 ? selectedHdd[0].price : 0}
              </td>
            </tr>

            <tr>
              <td className="border p-5">Monitor</td>
              <td className="border p-5">
                {selectedMonitor.length > 0 ? (
                  <p>{selectedMonitor[0].productName}</p>
                ) : (
                  <Link
                    className="btn btn-accent"
                    href="/pcBuilder/builderMonitor"
                  >
                    Select
                  </Link>
                )}
              </td>
              <td className="border p-5">
                {selectedMonitor.length > 0 ? selectedMonitor[0].price : 0}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {selectedCount === totalRequiredComponents && (
        <button className="btn btn-primary" onClick={notify}>
          Complete Build
        </button>
      )}
      <Toaster />
    </div>
  );
};

PcBuilderHomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default PcBuilderHomePage;
