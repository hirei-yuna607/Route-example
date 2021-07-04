import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

//page2の画面遷移の設定
export const Page2Router = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
