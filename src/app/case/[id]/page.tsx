import { PAINTERS } from "@/root/constants/painters";

export function generateStaticParams() {
  return PAINTERS.map(({ id }) => ({ id }));
}

const Case = () => {
  return <>Case</>;
};

export default Case;
