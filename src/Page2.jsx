import { Link } from "react-router-dom";

//動的にパラメーター（ユーザー情報）を取り扱う
//1000のパラメーターを持つユーザーなら1000のユーザーを取得
export const Page2 = () => {
  return (
    <div>
      <h1>Page2</h1>
      <Link to="/page2/1000">URL Parameter</Link>
      <br />
      <Link to="/page2/1000?name=hogehoge">Query Parameter</Link>
    </div>
  );
};
