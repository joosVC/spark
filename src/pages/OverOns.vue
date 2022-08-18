<template>
  <q-page-container class="q-pt-xl">
    <q-page class="" style="z-index: 5; min-height: 100px;">
      <div class="
          row
          font-josefin
          text-weight-bold
          container-max-width
          q-pa-xl
          justify-center
        ">
        <div class="col-12">
          <div class="row">
            <div class="col">
              <q-btn class="font-sister" label="Vorig spel" icon="west" flat color="standard" no-caps></q-btn>
            </div>
            <div class="col text-center">
              <div class="text-h3 text-white">{{ game.title }}</div>
            </div>
            <div class="col text-right">
              <q-btn class="font-sister" label="Vorig spel" icon-right="east" flat color="standard" no-caps></q-btn>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-3 q-pt-xl">
          <div class="text-h6">
            {{ game.description }}
          </div>
        </div>
        <div class="col-12 col-sm-6 q-px-xl">

        </div>
        <div class="col-12 col-sm-3 q-pt-xl">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-icon name="group" />
              </q-item-section>

              <q-item-section class="text-h6">{{ game.info.participants }}</q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon name="hourglass_top" />
              </q-item-section>

              <q-item-section class="text-h6">{{ game.info.duration }}</q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon name="bluetooth" />
              </q-item-section>

              <q-item-section class="text-h6">{{ game.info.location }}</q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon name="bluetooth" />
              </q-item-section>

              <q-item-section class="text-h6">Perfect bij regen</q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
      <div class="absolute-top flex flex-center" style="padding-top:120px;">
        <q-img contain :src="game.heroImg" style="width:40%;height:40%;" />
      </div>
      <svg :viewBox="'0 0 ' + $q.screen.width + ' 200'" style="margin-bottom: -100px">
        <path :d="
          'M 0,107 Q ' +
          $q.screen.width / 2 +
          ',' +
          -10 +
          ' ' +
          $q.screen.width +
          ',107'
        " fill="#ECEEBF" />
      </svg>
    </q-page>

    <q-page class="bg-bgyellow q-pa-xl" style="z-index: 4">
      <div :class="{ 'row': true, 'justify-center': true, 'container-max-width': true }">

        <div class="col-11">
          <div class="row">
            <div class="col-6 col-sm-4">
              <div class="text-h6 text-darkyellow q-pb-lg">Wil je een uitgewerkte spelfiche die je zelf nog kan
                aanpassen? </div>
              <q-btn class="q-px-lg text-underline font-sister" rounded size="xl" color="sgreen" no-caps
                label="Download Spelfiche"></q-btn>
            </div>
            <div class="col-4 col-sm-4 offset-sm-4 text-right">
              <div class="text-h6 text-darkyellow q-pb-lg">Heb je het spel gespeeld maakte je foto’s of filmpjes? Deel
                ze met ons en help andere leiders een spel kiezen! </div>
              <q-btn class="q-px-lg text-underline font-sister" rounded size="xl" color="sred" no-caps
                label="Mail beelden"></q-btn>
            </div>
          </div>
        </div>

        <div class="col-11 q-py-xl">
          <div class="row">
            <div class="col-12 col-sm-6">
              <div class="text-h3 text-sred">Spelfiche</div>
              <div class="q-pt-lg">
                <q-img src="https://via.placeholder.com/600x850"></q-img>
              </div>
            </div>
                        <div class="col-12 col-sm-5 offset-sm-1">
              <div class="text-h3 text-sred">Instructievideo</div>
              <div class="q-pt-lg">
                <q-img src="https://via.placeholder.com/450x250"></q-img>
              </div>
                            <div class="text-h3 text-sred q-pt-xl">Maak dit spel nog leuker</div>
              <div class="">
                <q-card class="q-my-lg" v-for="tip in game.makerTips" :key="tip.title">
                  <q-card-section horizontal>
                    <q-img class="col-4" src="https://via.placeholder.com/180x240"></q-img>
                                      <q-card-section>
                    <div class="text-h6">
                      {{tip.title}}
                    </div>
                                        <div class="text-body1">
                      {{tip.instruction}}
                    </div>
                    <q-btn class="q-mt-sm font-sister q-px-md" label="Maak dit" color="bggreen" rounded no-caps></q-btn>
                  </q-card-section>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
        </div>

      </div>
    </q-page>


  </q-page-container>
</template>

<script>

export default {
  name: "PageIndex",
  data() {
    return {
      game: {
        title: 'Octagon Kanjam',
        description: 'Maak je eigen frisbee uit papier en speel het populairste spel van Australië.',
        info: {
          participants: '10 - 20 personen',
          duration: '1 - 3 uur',
          location: 'Speelplein',
          rain: true
        },
        videoPresent: false,
        heroImg: require('../assets/spellendatabank.png'),
        videoUrl: '',
        spelficheUrl: '',
        makerTips: [
          {
            title: 'Maak stratego kaarten',
            instruction: 'Een korte uitleg wat je kan maken en warom dit zo cool is. De uitleg hoeft niet lang te zijn, maximaal enkele zinnen volstaat. Hieronder komt de link naar de MaakBib website tutorial te staan.',
            img: '',
            linkUrl: ''
          },
          {
            title: 'Maak stratego kaarten',
            instruction: 'Een korte uitleg wat je kan maken en warom dit zo cool is. De uitleg hoeft niet lang te zijn, maximaal enkele zinnen volstaat. Hieronder komt de link naar de MaakBib website tutorial te staan.',
            img: '',
            linkUrl: ''
          }
        ]
      }
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
