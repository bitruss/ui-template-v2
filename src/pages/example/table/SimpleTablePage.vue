<script setup>
import SidebarLayout from "../../../layouts/sidebar/SidebarLayout.vue";

import { VueGoodTable } from "vue-good-table-next";
import { EnvelopeOpenIcon } from "@heroicons/vue/24/outline";

const columns = [
  {
    label: "Name",
    field: "name",
    filterOptions: {
      enabled: true,
      filterDropdownItems: ["a", "b", "c"],
    },
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

const rows = [
  { id: 1, name: "John", age: 20, createdAt: "2011-10-31", score: 0.03343 },
  { id: 2, name: "Jane", age: 24, createdAt: "2011-10-31", score: 0.03343 },
  { id: 3, name: "Susan", age: 16, createdAt: "2011-10-30", score: 0.03343 },
  { id: 4, name: "Chris", age: 55, createdAt: "2011-10-11", score: 0.03343 },
  { id: 5, name: "Dan", age: 40, createdAt: "2011-10-21", score: 0.03343 },
  { id: 6, name: "John", age: 20, createdAt: "2011-10-31", score: 0.03343 },
];
</script>

<template>
  <SidebarLayout>
    <div class="space-y-8">
      <div>
        <h1 class="text-2xl leading-6">Table</h1>
        <p class="mt-3">demo of a simple table</p>
      </div>

      <div>
        <vue-good-table
          :search-options="{
            enabled: true,
            trigger: 'enter',
            skipDiacritics: true,
            searchFn: mySearchFn,
            placeholder: 'Search this table',
            externalQuery: searchQuery,
          }"
          :pagination-options="{
            enabled: true,
            mode: 'records',
            perPage: 5,
            position: 'bottom',
            perPageDropdown: [3, 7, 9],
            dropdownAllowAll: false,
            setCurrentPage: 1,
            nextLabel: 'next',
            prevLabel: 'prev',
            rowsPerPageLabel: 'Rows/Page',
            ofLabel: 'of',
            pageLabel: 'page', // for 'pages' mode
            allLabel: 'All',
          }"
          :select-options="{
            enabled: true,
            selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
            selectionInfoClass: 'custom-class',
            selectionText: 'rows selected',
            clearSelectionText: 'clear',
            disableSelectInfo: false, // disable the select info panel on top
            selectAllByGroup: false, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
          }"
          :columns="columns"
          :rows="rows"
        >
          <template #selected-row-actions>
            <button class="btn-primary sm">selection Action 1</button>
          </template>

          <template #table-actions>
            <button class="btn-primary sm mr-3">Action 2</button>
            <button class="btn-primary sm mr-3">Action 2</button>
          </template>

          <template #table-row="props">
            <span v-if="props.column.field === 'action1'">
              <button type="button" class="btn-secondary xs "><EnvelopeOpenIcon class="prefix-icon" />Open</button>
            </span>

            <!-- Column: Common -->
            <span v-else>{{ props.row[props.column.field] }}</span>
          </template>
        </vue-good-table>
      </div>
    </div>
  </SidebarLayout>
</template>
