<template>
  <q-page-container class="bg-bgblue">
    <q-page class="bg-sred" style="min-height: 30vh">
      <div class="row q-pb-xl container-max-width">
        <div class="col-12 col-sm-6 q-py-xl">
          <q-btn flat icon="west" label="wowspelen"></q-btn>
          <div class="text-h2">Spelen waar je wow van zegt!</div>
          <div class="q-pt-lg text-h5">
            Zin in iets anders? Dan zit je hier goed.<br />
            Op deze plek vind je verwonderlijke spelen om met de jeugdbeweging
            of op kamp te spelen.<br />
            Je kunt ze bekijken en zelfs downloaden. Ken je zelf een eigen spel?
            Voeg het toe!
          </div>
        </div>
      </div>

          <div class="absolute-bottom-right" style="bottom:-300px;width:40vw;z-index:20;">
            <div style="position: relative; width: 100%;">
              <q-img contain src="../assets/spelkisten.png" />

              <img
                :style="
                  $q.screen.lt.sm
                    ? 'vertical-align: top; position: absolute;left: -15px; top: -25px; height:250px;'
                    : 'vertical-align: top; position: absolute;left: -75px; top: -100px;'
                "
                src="../assets/offer-spellendatabank-white.svg"
              />
            </div>
          </div>
      <curve
        :scrollInfo="scrollInfo"
        :colorUp="'#DDE7DC'"
        :colorDown="'#DDE7DC'"
      ></curve>
    </q-page>
      <q-scroll-observer @scroll="onScroll" />
  </q-page-container>
</template>

<script>
import { defineComponent } from "vue";
import curve from "../components/CurvedBackground.vue";

export default defineComponent({
  name: "Databank",
  components: {
    curve
  },
  data() {
    return {
      scrollInfo: {},
    }
  },
  methods: {
    onScroll(info) {
      this.scrollInfo = info;
    },
  }
});
</script>

<style lang="scss" scoped>
</style>