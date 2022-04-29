<template>
  <q-page-container class="bg-bgblue">
    <q-page class="bg-sred" style="min-height: 30vh">
      <div class="row q-pb-xl container-max-width">
        <div class="col-3" v-if="false">
          <q-btn flat icon="west" label="vorig spel"></q-btn>
        </div>
        <div class="col-12 col-sm-12 q-py-xl text-center text-white">
          <div class="text-h2">{{ spel.title }}</div>
        </div>
        <div class="col-3" v-if="false">
          <q-btn flat icon="east" label="Volgend spel"></q-btn>
        </div>
      </div>
      <div class="row q-pb-xl container-max-width">
        <div class="col-6 col-sm-3 text-h5 q-pb-xl">
          {{ spel.description }}
        </div>
        <div class="col-1 col-sm-6" v-if="$q.screen.gt.sm"></div>
        <div class="col-6 col-sm-3 text-h5 q-pb-xl">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-icon color="standard" name="group" />
              </q-item-section>

              <q-item-section>{{ spel.details.players }}</q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon color="standard" name="group" />
              </q-item-section>

              <q-item-section>{{ spel.details.duration }}</q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon color="standard" name="group" />
              </q-item-section>

              <q-item-section>{{ spel.details.players }}</q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>

      <div
        class="absolute-bottom"
        style="
          bottom: -350px;
          width: 50vw;
          left: 25vw;
          z-index: 20;
          max-width: 800px;
        "
      >
        <div style="position: relative; width: 100%">
          <q-img contain src="../assets/spelkisten.png" />
        </div>
      </div>
      <curve
        :scrollInfo="scrollInfo"
        :colorUp="'#DDE7DC'"
        :colorDown="'#DDE7DC'"
      ></curve>
    </q-page>
    <q-page class="bg-bgblue">
      <div class="row q-py-xl container-max-width">
        <div class="col-12">
          <div class="row">
            <div class="col-6 col-sm-3">
              <div
                class="text-grey-9 text-body1 q-pb-md"
                style="min-height: 88px"
              >
                Wil je een uitgewerkte spelfiche die je zelf nog kan aanpassen?
              </div>
              <q-btn
                size="lg"
                rounded
                label="Download spelfiche"
                color="sgreen"
              ></q-btn>
            </div>
            <div class="col-6 offset-sm-6 col-sm-3">
              <div
                class="text-grey-9 text-body1 q-pb-md"
                style="min-height: 88px"
              >
                Heb je het spel gespeeld maakte je foto’s of filmpjes? Deel ze
                met ons en help andere leiders een spel kiezen!
              </div>
              <q-btn
                size="lg"
                rounded
                label="Mail beelden"
                color="sred"
              ></q-btn>
            </div>
          </div>
        </div>
      </div>
      <div class="row q-py-xl container-max-width">
        <div class="col-12 col-sm-5 q-py-xl">
          <div class="text-h4 text-sred">Spelfiche</div>
        </div>
        <div class="col-12 col-sm-6 offset-sm-1 q-py-xl">
          <div class="text-h4 text-sred">Instructievideo</div>
          <q-img src="https://via.placeholder.com/300x150"></q-img>
          <div class="text-h4 text-sred q-pt-xl">Maak dit spel nog leuker</div>
          <div>
            <q-card v-for="tip in spel.makertips" :key="tip.title" class="card-makertips q-my-md" flat bordered>
              <q-card-section horizontal>
                <q-img
                  class="col-5"
                  src="https://cdn.quasar.dev/img/parallax2.jpg"
                />
                <q-card-section>
                  <div class="text-h5 text-bggreen q-pb-sm">
                    {{tip.title}}
                  </div>
                  <div class="text-body1 font-josefin text-sblack q-pb-xl">{{tip.description}}</div>
                  <div class="absolute-bottom-left q-pa-md">
                    <q-btn v-for="link in tip.links" :key="link.label" rounded color="bggreen" :label="link.label" no-caps></q-btn>
                  </div>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </q-page>
    <q-scroll-observer @scroll="onScroll" />
  </q-page-container>
</template>

<script>
import { defineComponent } from "vue";
import curve from "../components/CurvedBackground.vue";
import pdf from "pdfvuer";

export default defineComponent({
  name: "Databank",
  components: {
    pdf,
    curve,
  },
  data() {
    return {
      scrollInfo: {},
      spel: {
        title: "Octagon Kanjam",
        description:
          "Maak je eigen firsbee uit papier en speel het populairste spel van Australië",
        details: {
          players: "10 - 20 personen",
          duration: "1 - 3 uur",
          terrain: "Speelplein",
          ideas: "Perfect bij regen",
        },
        heroImg: "",
        heroVideo: "",
        pdfFicheUrl:
          "https://firebasestorage.googleapis.com/v0/b/spark-vlaio.appspot.com/o/spellendatabank%2Ftest.pdf?alt=media&token=1e576973-9e65-4d1d-9bf6-f5b57126a3c9",
        makertips: [
          {
            title: "Maak stratego kaarten",
            description:
              "Een korte uitleg om wat je kan maken en waarom dit zo cool is. De uitleg hoeft niet lang te zijn, maximaal enkele zinnen volstaat. Hieronder komt de link naar de MaakBib website.",
            media: "https://via.placeholder.com/200x150",
            links: [
              {
                label: "Maak dit",
                link: "https://maakbib.be",
              },
            ],
          },
          {
            title: "Maak strategodsfsdf kaarten",
            description:
              "Een korte uitleg om wat je kan maken en waarom dit zo cool is. De uitleg hoeft niet lang te zijn, maximaal enkele zinnen volstaat. Hieronder komt de link naar de MaakBib website.",
            media: "https://via.placeholder.com/200x150",
            links: [
              {
                label: "Maak dit",
                link: "https://maakbib.be",
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    onScroll(info) {
      this.scrollInfo = info;
    },
  },
});
</script>

<style lang="scss" scoped>
.card-makertips {
  border-radius: 5px;
}
</style>