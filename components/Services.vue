<template>
  <div>
    <h2>{{$t("services.title")}}</h2>
    <v-form>
      <v-container>
        <v-select
          :label="$t('services.DeliveryType')"
          v-model="deliveryType"
          :items="deliveryTypes"
        ></v-select>

        <v-select
          :label="$t('services.PackagingType')"
          v-model="packagingType"
          :items="packagingTypes"
        ></v-select>

        <v-select
          :label="$t('services.time')"
          v-model="deliveryWindow"
          :items="deliveryWindows"
        ></v-select>

        <v-btn class="previous" @click="previous">{{$t("stepper.previous")}}</v-btn>
        <v-btn class="submit" color="primary" @click="submit">{{$t("stepper.nextStep")}}</v-btn>
      </v-container>
    </v-form>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Emit } from "nuxt-property-decorator";

@Component({})
export default class Services extends Vue {

deliveryType:String;
packagingType:String;
deliveryWindow:String;
deliveryTypes:Array<String>;
packagingTypes:Array<String>;
deliveryWindows:Array<String>;

constructor (){
  super();
    this.deliveryType= "";
    this.packagingType= "";
    this.deliveryWindow= "";
    this.deliveryTypes= [
      "Overnight Delivery (within 48 hours)",
      "Express Delivery (within 5 working days)"
    ];
    this.packagingTypes= ["Regular Packaging", "Oversized Packaging"];
    this.deliveryWindows= ["Morning", "Afternoon"];
  }

  @Emit("servicesWasSet")
    submit() {
      const info = [this.deliveryType, this.packagingType, this.deliveryWindow];
      return info;
    };

    @Emit("previous")
    previous() {
      return "Services";
    }
  }
</script>
<style>
.submit {
  float: left;
}
.previous {
  float: right;
}
</style>
