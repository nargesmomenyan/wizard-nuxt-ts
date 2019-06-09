<template>
  <div>
    <h2>{{$t('location.title')}}</h2>
    <v-form>
      <v-container>
        <v-flex xs12 sm6 md4>
          <persian-date-picker
            :gregorianDate="shipdate"
            @selectedDate="shipDateChanged"
            :label="$t('location.shipdate')"
          ></persian-date-picker>
        </v-flex>

        <v-text-field
          :label="$t('location.addressLine1')"
          v-validate="'required'"
          v-model="addressLine1"
          name="addressLine1"
          :data-vv-as="$t('location.addressLine1')"
        ></v-text-field>
        <span>{{ errors.first('addressLine1') }}</span>

        <v-text-field :label="$t('location.addressLine2')"></v-text-field>

        <v-text-field
          :label="$t('location.postCode')"
          v-model="postCode"
          v-validate="'required'"
          name="postCode"
          :data-vv-as="$t('location.postCode')"
        ></v-text-field>
        <span>{{ errors.first('postCode') }}</span>

        <v-text-field
          :label="$t('location.city')"
          v-validate="'required'"
          v-model="city"
          name="city"
          :data-vv-as="$t('location.city')"
        ></v-text-field>
        <span>{{ errors.first('city') }}</span>

        <v-text-field
          :label="$t('location.state')"
          v-validate="'required'"
          v-model="state"
          name="state"
          :data-vv-as="$t('location.state')"
        ></v-text-field>
        <span>{{ errors.first('city') }}</span>

        <v-select
          :label="$t('location.country')"
          v-model="country"
          :items="countries"
          v-validate="'required'"
          name="country"
          :data-vv-as="$t('location.country')"
        ></v-select>
        <span>{{ errors.first('country') }}</span>

        <v-text-field
          :label="$t('location.phoneNo')"
          v-validate="{ required: true, regex: /^[0][9][0-9]{9,9}$/}"
          v-model="phoneNo"
          name="phoneNo"
          :data-vv-as="$t('location.phoneNo')"
        ></v-text-field>
        <span>{{ errors.first('phoneNo') }}</span>

        <v-text-field
          :label="$t('location.nationalCode')"
          v-validate="{ required: true, checkNationalCode:true}"
          v-model="nationalCode"
          name="nationalCode"
          :data-vv-as="$t('location.nationalCode')"
        ></v-text-field>
        <span>{{ errors.first('nationalCode') }}</span>

        <v-btn class="submit" color="primary" @click="submit">{{$t("stepper.nextStep")}}</v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from "nuxt-property-decorator";
import persianDatePicker from "~/components/UI/persian-date-picker.vue";

@Component({
  components: { "persian-date-picker": persianDatePicker }
})
export default class location extends Vue {
  shipdate: String;
  addressLine1: String;
  addressLine2: String;
  postCode: Number;
  city: String;
  state: String;
  country: String;
  countries: Array<String>;
  phoneNo: String;
  nationalCode: String;

  constructor() {
    super();
    this.shipdate = new Date("2020/01/01").toISOString().substr(0, 10);
    this.addressLine1 = "";
    this.addressLine2 = "";
    this.postCode = 3000;
    this.city = "Tehran";
    this.state = "Tehran";
    this.country = "Iran";
    this.countries = ["Iran", "Italy", "US", "UK"];
    this.phoneNo = "";
    this.nationalCode = "";
  }

  created() {
    this.$validator.extend("checkNationalCode", {
      validate(value, field) {
        if (!/^\d{10}$/.test(value)) return false;

        var check = parseInt(value[9]);
        var sum = 0;
        var i;
        for (i = 0; i < 9; ++i) {
          sum += parseInt(value[i]) * (10 - i);
        }
        sum %= 11;

        return (sum < 2 && check == sum) || (sum >= 2 && check + sum == 11);
      }
    });
  }

  @Emit("locationInfoWasSet")
  submit() {
    this.$validator.validateAll().then(result => {
      if (result) {
        const info = [
          this.addressLine1,
          this.addressLine2,
          this.postCode,
          this.city,
          this.state,
          this.country
        ];
        return { info };
      }
      return { info: null };
    });
  }

  shipDateChanged($event) {
    console.log($event);
    this.shipdate = $event.gregorianDate;
  }
}
</script>

<style>
.submit {
  float: left;
}
</style>
