"use client";

import React, { Suspense } from "react";
import MasterLayout from "@/masterLayout/MasterLayout";
import HomeComponent from "@/components/HomeComponent";
import loading from "./loading";

export default function HomePage() {
  return (
    <MasterLayout>
      <HomeComponent />
    </MasterLayout>
  );
}
