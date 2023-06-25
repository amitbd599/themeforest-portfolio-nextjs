import React from "react";
import ServicesComponent from "@/components/ServicesComponent";
import MasterLayout from "@/masterLayout/MasterLayout";

export const metadata = {
  title: "NetGrid || Service",
  description: "NetGrid - React Portfolio Template",
};
const page = () => {
  return (
    <MasterLayout>
      <ServicesComponent />
    </MasterLayout>
  );
};

export default page;
