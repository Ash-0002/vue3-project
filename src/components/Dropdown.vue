/* 
(c) 2023 Livekeeping Technologies Pvt Ltd. 
License: Proprietary 
Version: 1.0.0
Date: September 26, 2023
Author: Kartik Champaneriya (Sr. Software Engineer)
Country: India
*/
<template>
  <div class="dropdown" v-if="options">
    <!-- Dropdown Input -->
        <input
        class="dropdown-input"
        :name="name"
        @focus="showOptions()"
        @blur="exit()"
        @keyup="keyMonitor"
        v-model="searchFilter"
        :disabled="disabled"
        :placeholder="placeholder"
      />

    <!-- Dropdown Menu -->
    <div class="dropdown-content" v-show="optionsShown">
      <div
        class="dropdown-item"
        @mousedown="selectOption(option)"
        v-for="(option, index) in filteredOptions"
        :key="index"
      >
        {{ option.name || option.id || "-" }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Dropdown",
  template: "Dropdown",
  props: {
    name: {
      type: String,
      required: false,
      default: "dropdown",
      note: "Input name",
    },
    options: {
      type: Array,
      required: true,
      default: [],
      note: "Options of dropdown. An array of options with id and name",
    },
    placeholder: {
      type: String,
      required: false,
      default: "Please select an option",
      note: "Placeholder of dropdown",
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
      note: "Disable the dropdown",
    },
    maxItem: {
      type: Number,
      required: false,
      default: 6,
      note: "Max items showing",
    },
  },
  data() {
    return {
      selected: {},
      optionsShown: false,
      searchFilter: "",
    };
  },
  created() {
    this.$emit("selected", this.selected);
  },
  computed: {
filteredOptions() {
  const filtered = [];
  const escapedFilter = this.searchFilter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
  const regOption = new RegExp(escapedFilter, "ig");
  
  for (const option of this.options) {
    if (filtered.length < this.maxItem && (this.searchFilter.length < 1 || option.name.match(regOption))) {
      filtered.push(option);
    }
  }
  return filtered;
},
},
  methods: {
    selectOption(option) {
      this.selected = option;
      this.optionsShown = false;
      this.searchFilter = this.selected.name;
      this.$emit("selected", this.selected);
    },
    showOptions() {
      if (!this.disabled) {
        this.searchFilter = "";
        this.optionsShown = true;
      }
    },
    exit() {
      this.optionsShown = false;
    },
   
    keyMonitor: function (event) {
      if (event.key === "Enter" && this.filteredOptions[0])
        this.selectOption(this.filteredOptions[0]);
    },
  },
  watch: {
    searchFilter() {
    if (this.filteredOptions.length === 0) {
      this.selected = {};
    } else if (this.selected.id !== undefined && !this.filteredOptions.find(option => option.id === this.selected.id)) {
      this.selected = this.filteredOptions[0];
    }
    this.$emit("filter", this.searchFilter);
  },
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: block;
  margin: auto;
  .dropdown-input {
    background: #fff;
    cursor: pointer;
    border: 1px solid #e7ecf5;
    border-radius: 3px;
    color: #333;
    display: block;
    font-size: 14px;
    padding: 6px;
    min-width: 100%;
    max-width: 250px;
    border: 1px solid #C4C4C4;
   
  }

 .dropdown-input:focus {
    outline: 0;
    border: 1px solid #1a1a1a;
}
  .dropdown-content {
    position: absolute;
    background-color: #fff;
    min-width: 100%;
    max-width: 248px;
    max-height: 248px;
    border: 1px solid #e7ecf5;
    box-shadow: 0px -8px 34px 0px rgba(0, 0, 0, 0.05);
    overflow: auto;
    z-index: 1;
    .dropdown-item {
      color: black;
      font-size: 14px;
      line-height: 1em;
      padding: 8px;
      text-decoration: none;
      display: block;
      cursor: pointer;
      &:hover {
        background-color: #1E90FF;
        color: #fff !important;
      }
    }
  }
  .dropdown:hover .dropdowncontent {
    display: block;
  }
}
</style>
