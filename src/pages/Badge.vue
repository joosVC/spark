<template>
  <q-page-container class="bg-bgblue">
    <q-page class="bg-bgyellow q-pt-xl" style="z-index: 4">
      <div
        class="absolute-top-left"
        style="margin-left: 100px; top: -50px"
        v-if="$q.screen.gt.sm"
      >
        <q-img
          src="../assets/hero-bulb-darkyellow.svg"
          height="300px"
          width="150px"
        />
      </div>

      <div class="row q-pa-md q-py-xl container-max-width">
        <div class="col-12 col-sm-6">
          <div
            :class="
              $q.screen.lt.sm
                ? 'text-h4 text-sred q-pb-lg'
                : 'text-h2 text-sred q-pb-xl'
            "
            :style="$q.screen.gt.sm ? 'margin-top:200px;' : ''"
          >
            BÅDGE ‘N BÛTTØN ACTIE
          </div>
          <div
            :class="
              $q.screen.lt.sm
                ? 'text-h4 text-darkyellow q-pb-lg font-josefin'
                : 'text-h2 text-darkyellow q-pb-xl font-josefin'
            "
          >
            Maak GRATIS een <br />
            gepersonaliseerde <br />badge of button! *
          </div>
          <div
            :class="
              $q.screen.lt.sm
                ? 'text-body2 text-darkyellow q-pb-lg font-josefin'
                : 'text-body1 text-darkyellow q-pb-xl font-josefin'
            "
          >
            * Deze actie loopt nog t.e.m. 15 december 2021.
          </div>
        </div>
        <div class="col-12 col-sm-6">
          <div style="position: relative; width: 100%">
            <q-img contain src="../assets/hero-badge.png" />

            <img
              :style="
                $q.screen.lt.sm
                  ? 'vertical-align: top; position: absolute;right: 0px; top: -25px; height:250px;'
                  : 'vertical-align: top; position: absolute;right: 25px; top: -55px;height:250px;'
              "
              src="../assets/badge-heart.svg"
            />
            <img
              :style="
                $q.screen.lt.sm
                  ? 'vertical-align: bottom; position: absolute;right: -15px; bottom: -25px; height:250px;'
                  : 'vertical-align: bottom; position: absolute;right: -45px; bottom: -55px;height:250px;'
              "
              src="../assets/badge-paw.svg"
            />
          </div>
        </div>
      </div>

      <div class="row q-pa-md q-pr-xl q-my-xl q-pb-xl container-max-width">
        <div class="col-12 col-sm-7">
          <div
            :class="
              $q.screen.lt.sm
                ? 'text-h4 text-sred q-pb-lg'
                : 'text-h2 text-sred q-pb-xl'
            "
          >
            WÄT
          </div>
          <div
            :class="{
              'text-h5': $q.screen.gt.sm,
              'text-body1': $q.screen.lt.sm,
              'text-info': true,
              'text-weight-regular': true,
              'font-josefin': true,
              'q-pb-md': $q.screen.gt.sm,
              'q-pb-sm': $q.screen.lt.sm,
            }"
          >
            Spark wil jeugdbewegingen aan het maken krijgen, daarom geven we
            alle leden van een jeugdbeweging de kans om een supercoole
            gepersonaliseerde button of badge te maken in een maakplaats in de
            buurt. Zo heb je meteen ook een keileuke activiteit.
          </div>
          <div
            :class="{
              'text-h5': $q.screen.gt.sm,
              'text-body1': $q.screen.lt.sm,
              'text-info': true,
              'text-weight-regular': true,
              'font-josefin': true,
              'q-pb-md': $q.screen.gt.sm,
              'q-pb-sm': $q.screen.lt.sm,
              'text-weight-bold': true,
            }"
          >
            Dus, wil jij je totem, groepsnaam, kenteken, symbool, ...
            vereeuwigen in een button of badge? Dat kan, en zelfs helemaal
            gratis!
          </div>
        </div>
        <div class="col-12 col-sm-5 q-pa-md q-mt-lg"></div>
      </div>

      <div class="row q-pa-md q-pr-xl q-mt-xl q-pt-xl container-max-width">
        <div class="col-12">
          <div
            :class="
              $q.screen.lt.sm
                ? 'text-h4 text-sred q-pb-lg'
                : 'text-h2 text-sred q-pb-xl'
            "
          >
            HOE WERKT HET?
          </div>

          <div class="row">
            <div class="col-6 q-pa-lg" v-for="step in steps" :key="step.number">
              <div class="row items-center">
                <div class="col-auto" style="width: 100px">
                  <q-img :src="step.img" width="90px" height="90px" contain />
                </div>
                <div class="col-8 text-h3 q-pl-md text-darkyellow">
                  {{ step.title }}
                </div>
              </div>

              <div
                :class="{
                  'text-h5': $q.screen.gt.sm,
                  'text-body1': $q.screen.lt.sm,
                  'text-weight-regular': true,
                  'q-pt-md': true,
                  'font-josefin': true,
                  'q-pb-md': $q.screen.gt.sm,
                  'q-pb-sm': $q.screen.lt.sm,
                  'text-darkyellow': true,
                }"
              >
                {{ step.instruction }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-5 q-pa-md q-mt-lg"></div>
      </div>

      <div class="row q-pa-md q-pr-xl q-my-xl q-pb-xl container-max-width">
        <div class="col-12 col-sm-12">
          <div
            :class="
              $q.screen.lt.sm
                ? 'text-h4 text-sred q-pb-lg'
                : 'text-h2 text-sred q-pb-xl'
            "
          >
            DEELNEMENDE MAAKPLAATSEN
          </div>

                  <div
            :class="{
              'text-h5': $q.screen.gt.sm,
              'text-body1': $q.screen.lt.sm,
              'text-darkyellow': true,
              'text-weight-regular': true,
              'font-josefin': true,
              'q-pb-md': $q.screen.gt.sm,
              'q-pb-sm': $q.screen.lt.sm,
            }"
          >
            Hieronder vind je de lijst van maakplaatsen die deelnemen aan het project: 
            <p class="text-weight-bold">Komt weldra online!</p>
          </div>


        </div>
      </div>

      <div class="row q-pa-md q-pr-xl q-my-xl q-pb-xl container-max-width">
        <div class="col-12 col-sm-12">
          <div
            :class="
              $q.screen.lt.sm
                ? 'text-h4 text-sred q-pb-lg'
                : 'text-h2 text-sred q-pb-xl'
            "
          >
            VRÅGEN
          </div>
    <q-list bordered>
 

      <q-expansion-item
        group="somegroup"
        label="Met hoeveel mag ik naar de maakplaats?"
        header-class="bg-darkyellow text-white"
      >
        <q-card class="bg-white">
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-separator />

      <q-expansion-item
        group="somegroup"
        label="Hoe maak ik een vectortekening?"
        header-class="bg-darkyellow text-white"
      >
        <q-card class="bg-white">
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>

        </div>
    </div>




    </q-page>
  </q-page-container>
</template>

<script>
import {
  LMap,
  LTileLayer,
  LMarker,
  LIcon,
  LPopup,
  LFeatureGroup,
} from "vue2-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import mapboxgl from "mapbox-gl";
import "mapbox-gl-leaflet";
import "mapbox-gl/dist/mapbox-gl.css";
import "leaflet/dist/leaflet.css";

window.mapboxgl = mapboxgl; // mapbox-gl-leaflet expects this to be global

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LPopup,
    LFeatureGroup,
  },
  data() {
    return {
      email: "",
      steps: [
        {
          number: "1",
          title: "Vind een Maakplaats",
          instruction:
            "Een maakplaats stelt machines en materialen ter beschikking voor jullie, zodat je zelf een badge, pin of button kan gaan maken. Je vindt de lijst van de deelnemende maakplaatsen hieronder.",
          img: require("../assets/badge-step1.svg"),
        },
        {
          number: "2",
          title: "Teken jouw badge thuis",
          instruction:
            "Zoek of maak een afbeelding waar je een button of badge wil van maken. Let op, dit moet een vectortekening zijn. Weet je niet hoe je dit doet? Volg dan de tutorial die je vindt in de vragen-sectie onderaan om je op weg te helpen.",
          img: require("../assets/badge-step2.svg"),
        },
        {
          number: "3",
          title: "Maak jouw badge in de Maakplaats",
          instruction:
            "Breng die afbeelding mee naar de Maakplaats, ga langs tijdens de bezoekmomenten. Je kan nu zelf jouw badge maken door die te lasercutten of te snijplotten, hoe cool is dat! Een keileuke activiteit voor jong en oud!",
          img: require("../assets/badge-step3.svg"),
        },
        {
          number: "4",
          title: "Deel jouw badge met ons online",
          instruction:
            "Deel jullie mooie creaties met ons via social media (vergeet ons niet te taggen @spark.vlaanderen)",
          img: require("../assets/badge-step4.svg"),
        },
      ],
      center: [51.03801074569206, 4.241118140786151],
      zoom: 9,
      caller: {
        member: "",
        avatar: "",
      },
      tileLayerClass: (url, options) => L.mapboxGL(options),
      layerOptions: {
        accessToken:
          "pk.eyJ1Ijoiam9vcyIsImEiOiJjaW8wNnNzdGEwMHU4d2RseWxxMjNpdGlxIn0.FhTRgOM5bOsS_t_dzoM_kpk.eyJ1Ijoiam9vcyIsImEiOiJja3YxM3o4YzYza2s5MzBzN2N0bDZ4MWluIn0.r92g1sFwKMkVI0j8aCu0Ggw",
        style: "mapbox://styles/mapbox/bright-v8",
      },
      markerLatLng: [51.050178, 3.657055],
      icon: L.icon({
        iconUrl: require("../assets/icon-maakbib.png"),
        iconSize: [37, 37],
        iconAnchor: [16, 16],
      }),
      iconActive: L.icon({
        iconUrl: require("../assets/icon-maakbib-blue.png"),
        iconSize: [37, 37],
        iconAnchor: [16, 16],
      }),
      popupOptions: {
          minWidth: '150'
      },
      maakbibs: [
        {
          name: "Bibliotheek Poperinge",
          markerLatLng: [50.8584116426702, 2.729582691037927],
          avatar: require("../assets/members-color/member-poperinge.png"),
          link: "https://poperinge.bibliotheek.be/",
        },
        {
          name: "Bibliotheek Middelkerke",
          markerLatLng: [51.18711486636484, 2.8231302867505312],
          avatar: require("../assets/members-color/member-middelkerke.jpeg"),
          link: "https://middelkerke.bibliotheek.be/",
        },
        {
          name: "Bibliotheek Ieper",
          markerLatLng: [50.85616308983333, 2.8852100123534745],
          avatar: require("../assets/members-color/member-ieper.png"),
          link: "https://ieper.bibliotheek.be/",
        },
      ],
    };
  },
  methods: {
          openPopUp(latLng, name) {
      const i = this.maakbibs.map(m => m.name).indexOf(name);

      this.caller.member = name;
      this.caller.avatar = this.maakbibs[i].avatar;

      this.$refs.features.mapObject.openPopup(latLng);
    },
  },
    computed: {
    countmaakbibs(){
      return this.maakbibs.length;
    },
    dynamicSize() {
      return [this.iconSize, this.iconSize * 1.15];
    },
    dynamicAnchor() {
      return [this.iconSize / 2, this.iconSize * 1.15];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>