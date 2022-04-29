<template>
  <q-page padding class="flex container-max-width">
 
 <div class="row text-left">
   <div class="col-12">
     <div class="text-h5 text-weight-semibold">Vind een MaakBib in jouw buurt!</div>
        <div class="text-body1">Er zijn reeds {{ countmaakbibs }} MaakBibs te vinden in Vlaanderen.</div>
   </div>
 </div>

      <div class="row justify-center">
        <q-card :style="{'height': Number($q.screen.height - 300) + 'px', 'width': $q.screen.width > 1200 ? '1200px' : Number($q.screen.width - 60)+'px', 'border-radius': '15px'}">
          <l-map :zoom="zoom" :center="center" id="map">
            <l-tile-layer
              :options="layerOptions"
              :tile-layer-class="tileLayerClass"
            ></l-tile-layer>

          </l-map>
          <div id="mapster" style="height: 400px; width: 800px"></div>
        </q-card>
      </div>

  </q-page>
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

import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


export default {
  name: "Map",
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
      center: [51.03801074569206, 4.241118140786151],
      zoom: 9,
      caller: {
        member: "",
        avatar: ""
      },
      tileLayerClass: (url, options) => L.mapboxGL(options),
      layerOptions: {
        accessToken:
          "pk.eyJ1Ijoiam9vcyIsImEiOiJjaW8wNnNzdGEwMHU4d2RseWxxMjNpdGlxIn0.FhTRgOM5bOsS_t_dzoM_kw",
        style: "mapbox://styles/mapbox/bright-v8",
      },
      maakbibs: [
        {
          name: 'Bibliotheek Poperinge',
          markerLatLng: [50.8584116426702, 2.729582691037927],
          avatar: require('../assets/members-color/member-poperinge.png'),
          link: "https://poperinge.bibliotheek.be/"
        },
          {
              name: 'Bibliotheek Middelkerke',
              markerLatLng: [51.18711486636484, 2.8231302867505312],
              avatar: require('../assets/members-color/member-middelkerke.jpeg'),
              link: "https://middelkerke.bibliotheek.be/"
          },
        {
          name: 'Bibliotheek Ieper',
          markerLatLng: [50.85616308983333, 2.8852100123534745],
          avatar: require('../assets/members-color/member-ieper.png'),
          link: "https://ieper.bibliotheek.be/"
        },
        {
          name: 'Bibliotheek Langemark-Poelkapelle',
          markerLatLng: [50.916178966058084, 2.9202370062656136],
          avatar: require('../assets/members-color/member-langemark.png'),
          link: "https://langemark-poelkapelle.bibliotheek.be/"
        },
        {
          name: 'Bibliotheek Zonnebeke',
          markerLatLng: [50.8704908231003, 2.988340069489127],
          avatar: require('../assets/members-color/member-zonnebeke.jpeg'),
          link: "https://www.zonnebeke.be/Bestuur/Gemeentelijke_diensten/Bibliotheek"
        },
        {
          name: 'Bibliotheek Kortrijk',
          markerLatLng: [50.82893570046847, 3.2649162890698036],
          avatar: require('../assets/members-color/member-kortrijk.jpeg'),
          link: "https://www.kortrijk.be/bibliotheek"
        },
        {
          name: 'Bibliotheek Rollegem',
          markerLatLng: [50.767998348154016, 3.263658254143947],
          avatar: require('../assets/members-color/member-rollegem.png'),
          link: "https://www.kortrijk.be/bibliotheek/rollegem"
        },
        {
          name: 'Bibliotheek Maldegem',
          markerLatLng: [51.208773537594254, 3.448973567644283],
          avatar: require('../assets/members-color/member-maldegem.png'),
          link: "https://maldegem.bibliotheek.be/"
        },
        {
          name: 'Bibliotheek Ingegno Maker Space',
          markerLatLng: [51.05057034737542, 3.657986996477302],
          avatar: require('../assets/members-color/member-ingegno.png'),
          link: "https://www.facebook.com/IngegnoMakerSpace/events/"
        },
        {
          name: 'Bibliotheek De Krook',
          markerLatLng: [51.04871179623255, 3.7286658413200637],
          avatar: require('../assets/members-color/member-dekrook.png'),
          link: "https://dekrook.be/"
        },
        {
          name: 'Bibliotheek Minus One',
          markerLatLng: [51.06486288594777, 3.7172694522983654],
          avatar: require('../assets/members-color/member-minusone.png'),
          link: "https://www.minus-one.be/"
        },
        {
          name: 'Bibliotheek Lokeren',
          markerLatLng: [51.105442651742614, 3.9888008603703224],
          avatar: require('../assets/members-color/member-lokeren.png'),
          link: "https://lokeren.bibliotheek.be/"
        },
        {
          name: 'Bibliotheek Waasmunster',
          markerLatLng: [51.10645908886492, 4.08859038681829],
          avatar: require('../assets/members-color/member-waasmunster.png'),
          link: "https://waasmunster.bibliotheek.be/"
        },
        {
          name: 'Bibliotheek Buggenhout',
          markerLatLng: [51.01531382234852, 4.2033359714728125],
          avatar: require('../assets/members-color/member-buggenhout.png'),
          link: "https://buggenhout.bibliotheek.be/"
        },
        {
          name: 'Bibliotheek Stekene ',
          markerLatLng: [51.20505256556646, 4.044603554281996],
          avatar: require('../assets/members-color/member-stekene.gif'),
          link: "https://stekene.bibliotheek.be/"
        },
        {
          name: 'Bibliotheek Sint-Niklaas ',
          markerLatLng: [51.164252179835884, 4.143191219372084],
          avatar: require('../assets/members-color/member-sintniklaas.png'),
          link: "https://sint-niklaas.bibliotheek.be/"
        },
        {
          name: 'Bibliotheek Kruibeke ',
          markerLatLng: [51.171218333972526, 4.314054779414722],
          avatar: require('../assets/members-color/member-kruibeke.png'),
          link: "https://kruibeke.bibliotheek.be/"
        },
        {
          name: 'Bibliotheek Antwerpen Luchtbal',
          markerLatLng: [51.25309884935054, 4.423880142641919],
          avatar: require('../assets/members-color/member-luchtbal.jpeg'),
          link: "https://antwerpen.bibliotheek.be/"
        },
        {
          name: 'Bibliotheek Beveren',
          markerLatLng: [51.21341771435696, 4.261654747955132],
          avatar: require('../assets/members-color/member-beveren.png'),
          link: "https://beveren.bibliotheek.be/"
        },
        {
          name: 'Bibliotheek Sint-Gilis-Waas',
          markerLatLng: [51.21935323730676, 4.12577481989275],
          avatar: require('../assets/members-color/member-sgw.png'),
          link: "https://sint-gillis-waas.bibliotheek.be/"
        },
        {
          name: 'Bibliotheek Zwijndrecht',
          markerLatLng: [51.215633625031494, 4.325869673328269],
          avatar: require('../assets/members-color/member-zwijndrecht.jpeg'),
          link: "https://zwijndrecht.bibliotheek.be/"
        },
        {
          name: 'Bibliotheek Hoboken',
          markerLatLng: [51.17513430593996, 4.348065402163263],
          avatar: require('../assets/members-color/member-hoboken.jpeg'),
          link: "https://antwerpen.bibliotheek.be/"
        },
        {
          name: 'Kinderbib De vertellerij ',
          markerLatLng: [51.195687400202004, 4.441889611953616],
          avatar: require('../assets/members-color/member-devertellerij.png'),
          link: "https://antwerpen.bibliotheek.be/"
        },
        {
          name: 'Bibliotheek Antwerpen Park',
          markerLatLng: [51.24737009607423, 4.450185654282908],
          avatar: require('../assets/members-color/member-park.png'),
          link: "https://antwerpen.bibliotheek.be/"
        },
        {
          name: 'Bibliotheek Permeke',
          markerLatLng: [51.22192888991, 4.421415464072251],
          avatar: require('../assets/members-color/member-permeke.jpeg'),
          link: "https://www.permeke.org/"
        },
        {
          name: 'Kras jeugdwerk steunpunt Dam',
          markerLatLng: [51.233509254408446, 4.432483165923709],
          avatar: require('../assets/members-color/member-krasdam.jpeg'),
          link: "https://www.krasjeugdwerk.be/steunpunten/dam"
        },
            {
          name: 'Bibliotheek Pelt',
          markerLatLng: [51.230607923301484, 5.432690569129221],
          avatar: require('../assets/members-color/member-pelt.png'),
          link: "https://pelt.bibliotheek.be/"
        },
            {
          name: 'Bibliotheek Maaseik',
          markerLatLng: [51.094644587595035, 5.800980810246052],
          avatar: require('../assets/members-color/member-maaseik.png'),
          link: "https://maaseik.bibliotheek.be/"
        },
            {
          name: 'Bibliotheek Sint-Pieters-Leeuw',
          markerLatLng: [50.77987600852644, 4.244423210093592],
          avatar: require('../assets/members-color/member-spl.jpeg'),
          link: "https://sint-pieters-leeuw.bibliotheek.be/"
        },
            {
          name: 'Pianofabriek Sint-Gillis',
          markerLatLng: [50.82895901443618, 4.3430947254381875],
          avatar: require('../assets/members-color/member-pianofabriek.png'),
          link: "http://www.pianofabriek.be/"
        },

      ],
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
      }
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
<style>
</style>