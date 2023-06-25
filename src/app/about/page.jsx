import React from "react";
import MasterLayout from "@/masterLayout/MasterLayout";
import AboutComponent from "@/components/AboutComponent";

export const metadata = {
  title: "NetGrid || About",
  description: "NetGrid - React Portfolio Template",
};
const AboutPage = () => {
  return (
    <MasterLayout>
      <AboutComponent />
    </MasterLayout>
  );
};

export default AboutPage;
