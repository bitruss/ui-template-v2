<script setup>
import { ref, watch } from "vue";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";

const props = defineProps(["options", "modelValue", "placeholder"]);

const selected = ref(props.modelValue);

const emit = defineEmits(["update:modelValue"]);
watch(selected, (new_selected) => {
  emit("update:modelValue", new_selected);
});
</script>

<template>
  <Listbox as="div" class="list-box" v-model="selected">
    <div class="relative mt-1">
      <ListboxButton class="list-box-btn w-full py-2 pl-3 pr-10">
        <template v-if="selected != null">
          <span class="list-header">
            <span :class="[selected.active ? 'active' : 'inactive', 'status']" />
            <span class="name">{{ selected.name }}</span>
            <span class="secondary">{{ selected.secondary }}</span>
          </span>
        </template>
        <template v-else>
          <span class="list-header-empty">
            <span class="truncate">{{ props.placeholder ? props.placeholder : "&nbsp;" }}</span>
          </span>
        </template>
        <span class="list-header-suffix">
          <ChevronUpDownIcon />
        </span>
      </ListboxButton>

      <ListboxOptions class="list-box-options">
        <ListboxOption as="template" v-for="option in props.options" :value="option" v-slot="{ active, selected }">
          <li :class="[active ? 'active' : 'inactive']">
            <div class="option-row">
              <span :class="[option.active ? 'active' : 'inactive', 'status']"></span>
              <span :class="[selected ? 'active' : 'inactive', 'name']">{{ option.name }}</span>
              <span :class="[active ? 'active' : 'inactive', 'secondary']">{{ option.secondary }}</span>
              <span v-if="selected" :class="[active ? 'active' : 'inactive', 'suffix']">
                <CheckIcon />
              </span>
            </div>
          </li>
        </ListboxOption>
      </ListboxOptions>
    </div>
  </Listbox>
</template>
