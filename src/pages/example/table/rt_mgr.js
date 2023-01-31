import { ref } from "vue";

let rt_mgr = {};
///
rt_mgr.currentRowData = ref(null);

rt_mgr.setCurrentRowData = function (row) {
  rt_mgr.currentRowData.value = Object.assign({}, row);
};
///////////////////
rt_mgr.columns = [
  {
    label: "Name",
    field: "name",
  },
  {
    label: "Age",
    field: "age",
    type: "number",
  },
  {
    label: "Created On",
    field: "createdAt",
    type: "date",
    dateInputFormat: "yyyy-MM-dd",
    dateOutputFormat: "MMM do yy",
  },
  {
    label: "Percent",
    field: "score",
    type: "percentage",
  },
  {
    label: "Action1",
    field: "action1",
  },
];
///////////////////
rt_mgr.isLoading = ref(false);
///////////////////
rt_mgr.rows = ref([]);
rt_mgr.totalRecords = ref(0);

rt_mgr.server_params = {
  page: 1, //current page
  per_page: 10,
  page_dropdown: [20, 50, 100],
};

rt_mgr.updateParams = function (new_props) {
  rt_mgr.server_params = Object.assign({}, rt_mgr.server_params, new_props);
};

rt_mgr.onPageChange = function (params) {
  rt_mgr.updateParams({ page: params.currentPage });
  rt_mgr.loadItems();
};

rt_mgr.onPerPageChange = function (params) {
  rt_mgr.updateParams({ page: 1, per_page: params.currentPerPage });
  rt_mgr.loadItems();
};

rt_mgr.onSortChange = function (params) {
  rt_mgr.updateParams({
    sort: [
      {
        type: params.sortType,
        field: rt_mgr.columns[params.columnIndex].field,
      },
    ],
  });
  rt_mgr.loadItems();
};

rt_mgr.onColumnFilter = function (params) {
  rt_mgr.updateParams(params);
  rt_mgr.loadItems();
};

// load items is what brings back the rows from server
rt_mgr.loadItems = function () {
  rt_mgr.isLoading.value = true;
  rt_mgr.getFromServer(rt_mgr.server_params).then((response) => {
    rt_mgr.isLoading.value = false;
    rt_mgr.totalRecords.value = response.result.total_count;
    rt_mgr.rows.value = response.result.data;
  });
};

///////////////////////////////////////////////////
rt_mgr.getFromServer = async function (params) {
  console.log("getFromServer params", params);
  return {
    meta_status: 1,
    meta_msg: "",
    result: {
      total_count: 1000,
      data: [
        { id: 1, name: "John", age: 20, createdAt: "2011-10-31", score: 0.03343 },
        { id: 2, name: "Jane", age: 24, createdAt: "2011-10-31", score: 0.03343 },
        { id: 3, name: "Susan", age: 16, createdAt: "2011-10-30", score: 0.03343 },
        { id: 4, name: "Chris", age: 55, createdAt: "2011-10-11", score: 0.03343 },
        { id: 5, name: "Dan", age: 40, createdAt: "2011-10-21", score: 0.03343 },
        { id: 6, name: "John", age: 20, createdAt: "2011-10-31", score: 0.03343 },
      ],
    },
  };
};

export default rt_mgr;
