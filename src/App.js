import React, { lazy, Suspense } from "react";
// import DesktopContainer from "./components/desktop/DesktopContainer";
// import MobileContainer from "./components/mobile/MobileContainer";

function App() {
  let display;
  if (window.innerWidth < 760) {
    const MobileContainer = lazy(() =>
      import("./components/mobile/MobileContainer")
    );
    display = <MobileContainer />;
  } else {
    const DesktopContainer = lazy(() =>
      import("./components/desktop/DesktopContainer")
    );

    display = <DesktopContainer />;
  }
  return (
    <Suspense
      fallback={
        <span
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "hsl(220, 4%, 17%)",
          }}
        ></span>
      }
    >
      {display}
    </Suspense>
  );
}

export default App;
