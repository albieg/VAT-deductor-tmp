import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop"
import { LoginView } from "./views/LoginView"
import { InvoiceView } from "./views/InvoiceView"
import { ProfileView } from "./views/ProfileView"
import { ContactsView } from "./views/ContactsView"
import { AddContactView } from "./views/AddContactView"

function App() {

  return (
    <BrowserRouter>
    <ScrollToTop />

      <Routes>
        <Route path="/" element={<InvoiceView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/profile" element={<ProfileView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/add-contact" element={<AddContactView />} />
        <Route path="*" element={<h1 style={{ color: "red" }}>No match found</h1>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App
