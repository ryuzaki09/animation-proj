import React, { lazy } from "react";
import { Route, Routes, useLocation, useNavigate, Navigate } from "react-router-dom";
import * as Style from "~/components/app/app.style.ts";
import { appState } from "~/state/app-state.ts";
import { MainModule1 } from "~/pages/module-1/module-1";
import { MainModule2 } from "~/pages/module-2/module-2";
const LazyModule1 = lazy(() => import("~/pages/module-1/module-1").then((module) => ({ default: module.MainModule1 })));
const LazyModule2 = lazy(() => import("~/pages/module-2/module-2").then((module) => ({ default: module.MainModule2 })));

export default function App() {
  const loadedRef = React.useRef(false);
  const bookmark = appState((state) => state.bookmark);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  let Component;
  if (bookmark.pathname === "/module-1") {
    Component = LazyModule1;
  } else if (bookmark.pathname === "/module-2" || bookmark.pathname === "/module-2?dev") {
    Component = LazyModule2;
  } else {
    Component = __TARGET__ === "module2" ? LazyModule2 : LazyModule1;
  }

  React.useEffect(() => {
    if (loadedRef.current) {
      return appState.getState().updateBookmark({ pathname });
    }
    loadedRef.current = true;
    navigate(bookmark.pathname);
  }, [bookmark.pathname, pathname]);

  return (
    <>
      <Style.AppReset />
      <Routes>
        <Route path="/" element={<Component />} />
        <Route path="/module-1" element={<MainModule1 />} />
        <Route path="/module-2" element={<MainModule2 />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
