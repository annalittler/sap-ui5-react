import // FlexBox,
// FlexBoxAlignItems,
// FlexBoxDirection,
// FlexBoxJustifyContent,
// Link,
// LinkDesign,
// ShellBar,
"@ui5/webcomponents-react";
import MyApp from "./MyApp";
import { HashRouter } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <MyApp />
      </HashRouter>
    </>
  );
}

export default App;
