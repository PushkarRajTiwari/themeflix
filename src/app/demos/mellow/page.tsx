import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import { Store } from "./store";

const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: "Mellow: skincare that keeps it simple",
  description: "An online store template by Themeflix.",
};

export default function Page() {
  return <Store serif={serif.className} />;
}
