<template>
  <q-page-container class="q-pt-xl">
    <q-page class="" style="z-index: 5; min-height: 100px;">
      <div class="
          row
          font-josefin
          text-weight-bold
          container-max-width
          q-py-xl
        ">
        <div class="col-11 col-sm-6">
          <div>
            <q-btn class="font-sister" label="Alle Sparkspelen" icon="west" flat color="standard" no-caps></q-btn>
          </div>
          <div class="text-h3 text-white">Spelen waar je Wow van zegt!</div>
          <div class="text-h6 text-white q-pt-xl">Zin in iets anders als leiding? Dan zit je hier goed.<br />Op deze
            plek vind je meer dan 20 verwonderlijke spelen om met de jeugdbeweging of op kamp te spelen.<br />Je kunt ze
            bekijken en zelfs downloaden. En je eigen topspelen toevoegen!</div>
        </div>
        <div class="absolute col-11 col-sm-5 offset-sm-6" style="z-index:10;">
          <div class="" style="position: relative; width: 100%; ">
            <q-img style="margin-top: 96px;" contain src="../assets/spellendatabank.png" />
            <div class="
                flex flex-center
                absolute-top-right
              " :style="
                $q.screen.lt.sm
                  ? 'right: 5px; bottom: 5px'
                  : 'right: 55px; bottom: 55px'
              ">

              <img :style="
                $q.screen.lt.sm
                  ? 'vertical-align: top; position: absolute;left: -15px; top: -25px; height:250px;'
                  : 'vertical-align: top; position: absolute;left: -75px; top: -25px;'
              " src="../assets/offer-spellendatabank-w.svg" />
            </div>
          </div>

        </div>
      </div>
      <svg :viewBox="'0 0 ' + $q.screen.width + ' 200'" style="margin-bottom: -100px">
        <path :d="
          'M 0,107 Q ' +
          $q.screen.width / 2 +
          ',' +
          -100 +
          ' ' +
          $q.screen.width +
          ',107'
        " fill="#ECEEBF" />
      </svg>
      <div class="bg-bgyellow row" >
        <div class="col-12 text-center">
          <q-btn flat icon="south" color="sred" size="lg"></q-btn>
        </div>
      </div>
    </q-page>

    <q-page class="bg-bgyellow q-pt-xl flex flex-center" style="z-index: 4">
      <div
        :class="{ 'row': true, 'justify-center': true, 'container-max-width': true, 'q-gutter-lg': $q.screen.gt.sm, 'q-gutter-sm': $q.screen.lt.sm }" style="padding-top:150px;">

        <q-card flat style="width:344px;margin-top:198px;border-radius:20px;" v-for="n in 12" :key="n">
          <div class="mask1 absolute" style="top:-170px;">
            <img src="https://via.placeholder.com/344" alt="Cinque Terre" width="344" height="344">
          </div>
          <q-card-section>
            <div style="padding-top:174px;"></div>
            <div class="text-h4">Kanjam</div>
            <div class="text-h6">Maak je eigen frisbee uit papier en speel het polulairste spel van Australië.</div>
          </q-card-section>
        </q-card>

      </div>
    </q-page>

    <q-page class="bg-bgyellow q-pt-xl flex flex-center" style="z-index: 4">
      <div
        :class="{ 'row': true, 'justify-center': true, 'container-max-width': true, 'q-gutter-lg': $q.screen.gt.sm, 'q-gutter-sm': $q.screen.lt.sm }" style="padding-top:150px;">

        <q-card flat style="width:344px;margin-top:198px;border-radius:20px;" v-for="n in 12" :key="n">
          <div class="mask1 absolute" style="top:-170px;">
            <img src="https://via.placeholder.com/344" alt="Cinque Terre" width="344" height="344">
          </div>
          <q-card-section>
            <div style="padding-top:174px;"></div>
            <div class="text-h4">Kanjam</div>
            <div class="text-h6">Maak je eigen frisbee uit papier en speel het polulairste spel van Australië.</div>
          </q-card-section>
        </q-card>

      </div>
    </q-page>

    <q-scroll-observer @scroll="onScroll" />
  </q-page-container>
</template>

<script>

export default {
  name: "PageIndex",
  data() {
    return {

    };
  },
  methods: {
    onScroll(info) {
      this.scrollInfo = info;
    },
    openUrl(url) {
      this.window.open(url, "_blank");
    },
  },
};
</script>
<style lang="css" scoped>
.mask1 {
  -webkit-mask-image: url('../assets/mask-shape-1.svg');
  mask-image: url('../assets/mask-shape-1.svg');
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-size: contain;
}
</style>
