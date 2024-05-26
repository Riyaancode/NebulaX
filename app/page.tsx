"use client";

import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Herosec from "./components/Herosec";
import Section from "./components/Section";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";

export default function Home() {
  return (
    <main>
      <Herosec />
      <Section />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </main>
  );
}
