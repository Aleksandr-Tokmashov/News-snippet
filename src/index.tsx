import { render } from "react-dom";
import { ConfigProvider, theme } from "antd";
import "./styles.css";
import App from "./components/App/App";

const rootElement = document.getElementById("root");
render(
  <ConfigProvider
    theme={{
      token: {
        colorTextHeading: "#1677FF",
        colorBgContainer: "transparent",
        colorText: "#FFFFFF",
        colorTextDescription: "#83919D",
        colorPrimary: "#312E3C",
      },
      components: {
        Button: {
          primaryShadow: "none",
          primaryColor: "#1677FF",
        },
        Select: {
          colorBorder: "transparent",
          colorTextPlaceholder: "#D9D9D9",
          colorTextQuaternary: "#D9D9D9",
          colorPrimaryHover: "transparent",
          controlOutline: "none",
          optionSelectedColor: "#FFFFFF",
          colorBgElevated: "#1A1A1A",
          colorText: "#D9D9D9",
        },
      },
    }}
  >
    <App />
  </ConfigProvider>,
  rootElement
);
