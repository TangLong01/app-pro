import { stringify } from "query-string";
import jsonServerProvider from "ra-data-json-server";
import { DataProvider, fetchUtils, GetListParams } from "react-admin";

const apiUrl = "http://localhost:3001";
const httpClient = fetchUtils.fetchJson;

const customDataProvider: DataProvider = {
  ...jsonServerProvider(apiUrl, httpClient),

  getList: async (resource: string, params: GetListParams) => {
    const {
      pagination = { page: 1, perPage: 10 },
      sort = { field: "id", order: "DESC" },
      filter,
    } = params;

    const { page, perPage } = pagination;
    const { field, order } = sort;

    const query = {
      ...filter,
      _sort: field,
      _order: order,
      _start: (page - 1) * perPage,
      _end: page * perPage,
    };

    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const { headers, json } = await httpClient(url);

    return {
      data: json,
      total: parseInt(headers.get("X-Total-Count")?.toString() || "0", 10),
    };
  },
};

export default customDataProvider;
