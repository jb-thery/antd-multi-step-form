import React from "react"
import ReactDOM from "react-dom/client"
import { ConfigProvider } from "antd"
import { App } from "./App"

import "antd/dist/reset.css"
import "./assets/styles/global.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </React.StrictMode>
)
