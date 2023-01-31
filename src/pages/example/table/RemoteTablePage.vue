<script setup>
import SidebarLayout from "../../../layouts/sidebar/SidebarLayout.vue";

import { VueGoodTable } from "vue-good-table-next";

import Modal from "@/components/core/modal/Modal.vue";
import { PencilSquareIcon, EnvelopeIcon } from "@heroicons/vue/24/outline";

import { ref } from "vue";

import rt_mgr from "./rt_mgr";

const edit_m_open = ref(false);
function edit(row) {
  edit_m_open.value = true;
  rt_mgr.setCurrentRowData(row);
}

rt_mgr.loadItems();
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
          :pagination-options="{
            enabled: true,
            mode: 'records',
            perPage: rt_mgr.perPage,
            position: 'bottom',
            perPageDropdown: rt_mgr.perPageDropdown,
            setCurrentPage: rt_mgr.server_params.page,
          }"
          :select-options="{
            enabled: true,
            selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
            disableSelectInfo: false, // disable the select info panel on top
            selectAllByGroup: false, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
          }"
          :columns="rt_mgr.columns"
          :rows="rt_mgr.rows.value"
          :totalRows="rt_mgr.totalRecords.value"
          mode="remote"
          :isLoading.sync="rt_mgr.isLoading.value"
          v-on:page-change="rt_mgr.onPageChange"
          v-on:sort-change="rt_mgr.onSortChange"
          v-on:column-filter="rt_mgr.onColumnFilter"
          v-on:per-page-change="rt_mgr.onPerPageChange"
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
              <button type="button" @click="edit(props.row)" class="btn-secondary xs"><PencilSquareIcon class="prefix-icon" />Open</button>
            </span>

            <!-- Column: Common -->
            <span v-else>{{ props.row[props.column.field] }}</span>
          </template>
        </vue-good-table>

        <Modal v-model:open="edit_m_open">
          <template v-slot:body>
            <div class="mt-8">
              <label>Name</label>
              <input type="text" v-model="rt_mgr.currentRowData.value.name" class="rounded" placeholder="name" />
              <label>Score</label>
              <input type="text" v-model="rt_mgr.currentRowData.value.score" class="rounded" placeholder="score" />
            </div>
          </template>
          <template v-slot:footer>
            <button type="button" class="btn-secondary mr-3" @click="edit_m_open = false">Cancel</button>
            <button type="button" class="btn-primary mr-3" @click="edit_m_open = false">Update</button>
          </template>
        </Modal>
      </div>
    </div>
  </SidebarLayout>
</template>
