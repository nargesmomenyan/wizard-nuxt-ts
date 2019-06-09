<template>
  <div>
    <v-menu
      v-model="datePickerMenu"
      :close-on-content-click="false"
      :nudge-right="40"
      lazy
      transition="scale-transition"
      offset-y
      full-width
      min-width="290px"
    >
      <template v-slot:activator="{on}">
        <v-text-field v-model="persianDate" :label="label" prepend-icon="event" readonly v-on="on"></v-text-field>
      </template>
      <v-date-picker
        v-model="gregorianDate"
        @input="datePickerMenu = false"
        @change="save"
        v-bind="$attrs"
        v-on="$listeners"
        locale="fa"
      ></v-date-picker>
    </v-menu>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "nuxt-property-decorator";
import moment from "moment-jalaali";

@Component
export default class PersianDatePicker extends Vue {
  datePickerMenu: Boolean;
  persianDate: String;

  constructor() {
    super();
    this.datePickerMenu = false;
    this.persianDate = "";
  }

  @Prop({ }) gregorianDate;
  @Prop({ type: String, default: "" }) label;

  @Emit("selectedDate")
  save(inputDate) {
    this.persianDate = moment(inputDate).format("jYYYY/jMM/jDD");
    return {
      gregorianDate: this.gregorianDate,
      Text: this.persianDate
    };
  }

  created() {
    this.persianDate = moment(this.gregorianDate).format("jYYYY/jMM/jDD");
  }
}
</script>

