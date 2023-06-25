"use client";

import React, { Suspense } from "react";
import MasterLayout from "@/masterLayout/MasterLayout";
import AboutComponent from "@/components/AboutComponent";
import loading from "../loading";

const AboutPage = () => {
  return (
    <MasterLayout>
      <AboutComponent />
    </MasterLayout>
  );
};

export default AboutPage;
