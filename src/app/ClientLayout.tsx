// src/app/ClientLayout.tsx
"use client"; // Ensure this is a client-side component

import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
