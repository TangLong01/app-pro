import { useRecordContext } from "react-admin";

const CustomDateField: React.FC<{ source: string }> = ({ source }) => {
  const record = useRecordContext();
  if (!record) return null;

  const date = new Date(record[source]);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return <span>{`${day}/${month}/${year}`}</span>;
};

export default CustomDateField;
