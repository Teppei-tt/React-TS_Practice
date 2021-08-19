import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};
// 現状のバージョンではFCにChildrenが含まれてしまうので、代わりにVFCを使う。なぜChildrenが含まれると行けないのかを調べよう
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>textです。</p>;
};
