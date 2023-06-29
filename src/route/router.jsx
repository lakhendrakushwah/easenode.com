import { Route, Routes } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

// Page
import Home from "../pages/Home";
import Contact from "../pages/Contact";

export default function router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
