import React from "react";
import {
  HashRouter as Router, Route, Routes, RouteProps
} from "react-router-dom";
import { useEffect } from "react";
import Config from "@/service/config";
import * as Pages from "@/pages";

const routes = [
  { path: Config.pages.main, title: '首页', component: Pages.VituallistDemo },
  { path: Config.pages.svgDemo, title: 'svgDemo', component: Pages.SvgDemo },
];
function App() {
  return <Router>
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
    </Routes>
  </Router>
}
export default App