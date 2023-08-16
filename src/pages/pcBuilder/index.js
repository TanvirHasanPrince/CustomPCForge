import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import RootLayout from "@/components/Layouts/RootLayout";

import cpuImg from "../../assets/categories_icon/cpu.png";
import motherBoardImg from "../../assets/categories_icon/motherboard.png";
import ramImg from "../../assets/categories_icon/ram-memory.png";
import psuImg from "../../assets/categories_icon/power-supply.png";
import storageImg from "../../assets/categories_icon/hdd.png";
import monitorImg from "../../assets/categories_icon/monitor.png";
import keyboardImg from "../../assets/categories_icon/keyboard.png";

const PcBuilderHomePage = () => {
  // Get the selected components from the Redux store
  const selectedProcessor = useSelector((state) => state.build.processors);
  const selectedMotherboards = useSelector((state) => state.build.motherboards);

  console.log(selectedProcessor);
  const productCategories = [
    {
      id: 1,
      image: cpuImg,
      title: "Processors",
      link: "/pcBuilder/builderProcessors",
    },
    {
      id: 2,
      image: motherBoardImg,
      title: "Motherboard",
      link: "/pcBuilder/builderMotherboards",
    },
    {
      id: 3,
      image: ramImg,
      title: "RAM",
      link: "/ram",
    },
    {
      id: 4,
      image: psuImg,
      title: "PSU",
      link: "/psu",
    },
    {
      id: 5,
      image: storageImg,
      title: "HDD",
      link: "/hdd",
    },
    {
      id: 6,
      image: monitorImg,
      title: "Monitor",
      link: "/monitor",
    },
    {
      id: 7,
      image: keyboardImg,
      title: "Others",
      link: "/others",
    },
  ];

  return (
    <div>
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

PcBuilderHomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default PcBuilderHomePage;
