import { useAppSelector } from "./hooks";

export default function TextSection() {
  const textValue = useAppSelector((state) => state.textValue);
  return <div>Current text: {textValue}</div>;
}
