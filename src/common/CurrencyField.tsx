import React from "react";
import { TextField, useRecordContext } from "react-admin";

const CurrencyField: React.FC<{ source: string }> = ({ source }) => {
  const record = useRecordContext();
  if (!record) return null;

  const formattedAmount = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(record[source]);

  return (
    <TextField
      source={source}
      record={{ ...record, [source]: formattedAmount }}
    />
  );
};

export default CurrencyField;
