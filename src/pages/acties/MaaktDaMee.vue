<template>
  <q-page-container class="bg-bggreen">
    <q-page class="flex flex-center" style="z-index: 6">
      <div class="absolute-bottom-left" :style="
        $q.screen.lt.sm && portraitMode
          ? 'height: 50vh; width: 50vh; margin-left: 0vw; margin-bottom: 7vh'
          : 'height: 50vw; width: 50vw; margin-left: 0vw; margin-bottom: 0vh'
      "></div>

      <div class="absolute-top-left" style="margin-left: 30vw; top: -50px" v-if="$q.screen.gt.sm">
        <q-img src="../../assets/hero-bulb.svg" height="7vw" width="7vw" />
      </div>
      <div class="absolute-top-left" style="margin-left: 10vw; margin-top: 2vh">
        <q-img src="../../assets/mdm/spark-brush-hero.svg" style="z-index: 2" contain
          :height="$q.screen.lt.sm && portraitMode ? '25vh' : '25vw'"
          :width="$q.screen.lt.sm && portraitMode ? '25vh' : '25vw'" />
      </div>
      <div class="absolute-bottom-left" style="margin-right: 0vw; margin-bottom: -5vh" v-if="$q.screen.gt.sm">
        <q-img src="../../assets/mdm/spark-earth.svg" style="z-index: 2" contain height="18vw" width="18vw" />
      </div>

      <div class="absolute-bottom-right" style="margin-right: 2vw; margin-bottom: 2vh" v-if="$q.screen.gt.sm">
        <q-img src="../../assets/mdm/spark-tree.svg" style="z-index: 2" contain height="18vw" width="18vw" />
      </div>


      <div class="row justify-center q-pb-xl q-mb-xl container-max-width" :style="
        $q.screen.lt.sm ? 'padding-bottom: 150px; z-index: 1;' : 'z-index: 1'
      ">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 q-pa-md text-center">
          <div :class="$q.screen.lt.sm ? 'text-h6 font-josefin' : 'text-h4 font-josefin'">
            <span class="text-weight-bold text-sgreen">Projectoproep</span>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 q-pa-md text-center">
          <div :class="$q.screen.lt.sm ? 'text-h4 text-white' : 'text-h1 text-white'">
            <span class="">Maakt' da mee</span>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-7 col-lg-6 q-pa-md text-center">
          <div :class="$q.screen.lt.sm ? 'text-h6 text-standaard' : 'text-h5 text-standaard'">
            <div class="text-white q-mb-lg">Ontvang begeleiding en budget voor een zot project.
              We zoeken leden en leiders uit jeugdbewegingen die zin hebben om samen iets fun en duurzaam te maken in
              het kader van jullie werking... eender wat, jawel... eender wat.
            </div>
            <div class="text-white q-pb-md">Dien je projectidee in en wie weet ontvang je budget en hulp om jullie
              droomidee te realiseren.</div>
          </div>
        </div>

        <div class="col-12 col-sm-12 col-md-12 col-lg-12 q-pa-md text-center">
          <div :class="$q.screen.lt.sm ? 'text-h6 text-standaard' : 'text-h5 text-standaard'">
            <q-btn class="text-underline q-px-md" rounded color="sred" size="xl" text-color="white"
              label="Maakidee insturen" @click="openUrl('https://forms.gle/JTbsoXnNEnTMLowa6')"></q-btn>
          </div>
        </div>
      </div>
      <curve :scrollInfo="scrollInfo" :colorUp="'#ECEEBF'" :colorDown="'#2E564B'"></curve>
    </q-page>

    <q-page class="bg-bgyellow q-pt-xl text-center" style="z-index: 5">
      <div class="
          row
          justify-center
          font-josefin
          text-weight-bold
          container-max-width
          q-pt-xl
        ">
        <div :class="{
          'col-12': true,
          'col-sm-12': true,
          'text-h4': $q.screen.lt.sm,
          'q-px-sm': $q.screen.lt.sm,
          'text-h1': $q.screen.gt.sm,
        }">
          <span class="text-bggreen">Wat wil jij maken? </span>
        </div>

        <div :class="{
          'col-12': true,
          'col-sm-8': true,
          'q-pt-lg': true,
          'text-h6': $q.screen.lt.sm,
          'q-px-sm': $q.screen.lt.sm,
          'text-h5': $q.screen.gt.sm,
        }">
          <span class="text-bggreen">Ooit gedacht dat wil ik hebben in de jeugdbeweging? Wel, misschien kan je dat ding
            zelf maken. Neen, je hoeft geen krak in maken te zijn. Jullie zorgen voor een cool maakidee en wij belonen
            10 maakideeën 500 EUR budget en begeleiding om het idee te realiseren. Alles kan, zolang het maar fun en/of
            duurzaam is!</span>
        </div>

        <div class="col-12 col-sm-8 q-py-xl">
          <q-img class="q-pb-xl" src="../../assets/mdm/maaktdamee-hero.png"></q-img>
        </div>
      </div>
      <curve :scrollInfo="scrollInfo" :colorUp="'#DDE7DC'" :colorDown="'#ECEEBF'"></curve>
    </q-page>

    <q-page class="bg-bgblue q-py-xl" style="z-index: 4">
      <div class="row q-px-md q-pr-xl q-mt-xl container-max-width">
        <div class="col-12 col-sm-12">
          <div :class="
            $q.screen.lt.sm
              ? 'text-h4 text-bggreen text-center q-pb-lg'
              : 'text-h2 text-bggreen text-center q-pb-xl'
          ">
            Spelregels
          </div>


          <div style="max-width: 500px" :class="$q.screen.lt.sm ? 'q-mt-md' : 'q-mt-xl'" v-if="false">
            <q-input rounded borderless v-model="email" clear-icon="send" bottom-slots
              placeholder="Laat je mailadres achter" :input-style="{
                borderRadius: '40px 0px 0px 40px',
                backgroundColor: 'white',
                paddingLeft: '15px',
              }" class="text-body1">
              <template v-slot:append>
                <div class="bg-sgreen flex flex-center" style="
                    border-radius: 0px 40px 40px 0px;
                    height: 100%;
                    padding-left: 15px;
                    padding-right: 15px;
                  ">
                  <div>
                    <p class="q-ma-none font-sister text-body1 text-underline">
                      aanmelden
                    </p>
                  </div>
                </div>
              </template>

              <template v-slot:hint v-if="false">
                <div class="q-pl-md">
                  Sprankel jij van nieuwsgierigheid naar onze activiteiten?
                  <br />
                  Geef je op voor onze Spark Nieuwsbrief (4 per jaar).
                </div>
              </template>
            </q-input>
          </div>
        </div>
        <div class="col-12 col-sm-12 q-pa-md q-mt-lg">
          <div class="row">
            <div class="col-12 col-sm-5 text-h5">
              <img src="../../assets/mdm/spark-titel-jeugdbewegingen.svg" class="spark-image-title" />
              <div class="text-h4 text-bggreen q-pb-lg">Jullie inbreng</div>
              <q-list>
                <q-item clickable v-ripple v-for="rule in rulesJeugdbeweging" :key="rule">
                  <q-item-section avatar>
                    <q-img src="../../assets/mdm/spark-check.svg" height="24px" width="24px"></q-img>
                  </q-item-section>

                  <q-item-section class="text-bggreen">{{ rule }}</q-item-section>
                </q-item>
              </q-list>
            </div>
            <div class="col-12 col-sm-6 offset-sm-1 text-h5">
              <img src="../../assets/mdm/spark-titel-spark.svg" class="spark-image-title" />
              <div class="text-h4 text-bggreen q-pb-lg">Onze taken</div>
              <q-list>
                <q-item clickable v-ripple v-for="rule in rulesSpark" :key="rule">
                  <q-item-section avatar>
                    <q-img src="../../assets/mdm/spark-check.svg" height="24px" width="24px"></q-img>
                  </q-item-section>

                  <q-item-section class="text-bggreen">{{ rule }}</q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
          <div class="row text-center">
            <div class="col-12 q-py-xl">
              <q-btn class="text-underline q-px-md text-sister" rounded color="sgreen" size="xl" text-color="white"
                label="Maakidee insturen" @click="openUrl('https://forms.gle/JTbsoXnNEnTMLowa6')"></q-btn>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-6">
              <div class="text-h3 text-bggreen q-pb-lg">Timing</div>
              <q-timeline color="bggreen">

                <q-timeline-entry v-for="time in timeline" :key="time.title" :title="time.title" :subtitle="time.date">
                  <div>
                  </div>
                </q-timeline-entry>
              </q-timeline>
            </div>
            <div class="col-12 col-sm-6">
              <div class="text-h3 text-bggreen q-pb-lg">Criteria</div>
              <div class="text-h6 q-pb-lg font-josefin">Enkel 10 geselecteerde maakideeën ontvangen 500 EUR budget en
                begeleiding. Deze worden door jullie en een jury als volgt geselecteerd:</div>
              <div class="text-h6 q-pb-sm font-josefin text-weight-bold">40% Stemronde (iedereen)</div>
              <div class="text-h6 q-pb-lg font-josefin ">Publieke stemronde via de site tussen 15 september en 15
                oktober.</div>
              <div class="text-h6 font-josefin text-weight-bold">20% X-factor (jury)</div>
              <div class="text-h6 q-pb-lg font-josefin">Is het “waw’ en willen andere jeugdbewegingen dit?</div>
              <div class="text-h6  font-josefin text-weight-bold">20% Fun & duurzaam (jury)</div>
              <div class="text-h6 q-pb-lg font-josefin">Kan je er fun aan beleven en/of maakt het jullie werking erg
                duurzaam?</div>
              <div class="text-h6 font-josefin text-weight-bold">20% Realiseerbaardheid (jury)</div>
              <div class="text-h6 q-pb-lg font-josefin">Kan je het maken met een budget van 500 EUR? Is het niet te
                complex?</div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-12 q-py-xl">
              <div class="row text-center">
                <div class="col-12">
                  <div class="text-h3 text-bggreen q-pb-lg">FAQ</div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <q-list class="text-h6 font-josefin">
                    <q-expansion-item v-for="q in questions" :key="q.q" dense dense-toggle expand-separator
                      icon="question_mark" :label="q.q">
                      <q-card>
                        <q-card-section>
                          {{ q.a }}
                        </q-card-section>
                      </q-card>
                    </q-expansion-item>
                  </q-list>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </q-page>
    <q-scroll-observer @scroll="onScroll" />
  </q-page-container>
</template>

<script>
import curve from "../../components/CurvedBackground.vue";

export default {
  name: "PageIndex",
  components: {
    curve,
  },
  data() {
    return {
      slide: "Verwonderlijke",
      lorem: "Lorem ipsum dolor",
      email: "",
      rulesJeugdbeweging: [
        "Bedenk een maakidee dat voldoet aan de criteria.", "Lever een maakidee in.", "Stem op jouw favoriete maakidee.", "Wees bereid om jouw idee effectief te maken (met hulp van ons, als dat nodig is)."
      ],
      rulesSpark: [
        "Maakideeën nakijken, online plaatsen en verspreiden tijdens de stemronde.", "De beste 10 maakideeën selecteren.", "De geselecteerde maakideeën een budget van 500 EUR geven en begeleiding voorzien om het maakidee te realiseren."
      ],
      titles: [
        {
          title: "Verwonderlijke",
          img: require("../../assets/title-verwonderlijke.svg"),
        },
        {
          title: "Spectaculaire",
          img: require("../../assets/title-spectaculaire.svg"),
        },
        {
          title: "Hilarische",
          img: require("../../assets/title-hillarische.svg"),
        },
        {
          title: "Spannende",
          img: require("../../assets/title-spannende.svg"),
        },
        {
          title: "Gewaagde",
          img: require("../../assets/title-gewaagde.svg"),
        },
        {
          title: "Unieke",
          img: require("../../assets/title-unieke.svg"),
        },
      ],
      socialMedia: [
        {
          channel: "Instagram",
          link: "https://www.instagram.com/spark_laat_de_vonk_overslaan/",
          src: require("../../assets/sm-insta-red.svg"),
        },
      ],
      team: [
        {
          name: "Brightlab",
          src: require("../../assets/team-brightlab.png"),
        },
        {
          name: "KU Leuven",
          src: require("../../assets/team-kul.png"),
        },
        {
          name: "UCLL",
          src: require("../../assets/team-ucll.png"),
        },
        {
          name: "De Creatieve STEM",
          src: require("../../assets/team-dcs.png"),
        },
        {
          name: "Scholengroep RHIZO",
          src: require("../../assets/team-rhizo.png"),
        },
        {
          name: "Techniek- en wetenschapsacademie Leuven Limburg",
          src: require("../../assets/team-tewa.png"),
        },
      ],
      timeline: [
        {
          title: "Maakideeën verzamelen",
          date: '1 juli'
        },
        {
          title: "Stemronde via de website",
          date: "31 september - 15 oktober"
        },
        {
          title: "Selectie van de 10 winnende maakideeën",
          date: "21 oktober - dag van de jeugdbeweging"
        },
        {
          title: "Realiseren van de 10 geselecteerde maakideeën",
          date: "november 2022 - juni 2023"
        }
      ],
      partners: [
        {
          name: "Stad Leuven",
          src: require("../../assets/partners/partner-stadleuven.png"),
        },
        {
          name: "Formaat",
          src: require("../../assets/partners/partner-formaat.png"),
        },
        {
          name: "Link in de kabel",
          src: require("../../assets/partners/partner-linkindekabel.png"),
        },
        {
          name: "Chiro",
          src: require("../../assets/partners/partner-chiro.png"),
        },
        {
          name: "KSA",
          src: require("../../assets/partners/partner-ksa.png"),
        },
        {
          name: "Scouts & gidsen Vlaanderen",
          src: require("../../assets/partners/partner-scouts.png"),
        },
        {
          name: "MaakBib",
          src: require("../../assets/partners/partner-maakbib.svg"),
        },
        {
          name: "Agoria",
          src: require("../../assets/partners/partner-agoria.jpeg"),
        },
        {
          name: "De Krook",
          src: require("../../assets/partners/partner-dekrook.jpeg"),
        },
        {
          name: "Imec",
          src: require("../../assets/partners/partner-imec.png"),
        },
        {
          name: "Flanders Make",
          src: require("../../assets/partners/partner-flandersmake.jpeg"),
        },
        {
          name: "STEM-Platform",
          src: require("../../assets/partners/partner-stemplatform.png"),
        },
      ],
      questions: [
        {
          q: "Waarom doen jullie dit?",
          a: "Spark is een VLAIO-partnerschap die jeugdbewegingen wil enthousiasmeren voor wetenschap en technologie. Hoe kunenn we dat beter doen dan jongeren motiveren om 'iets' te maken."
        },
        {
          q: "Mag ik meer dan één maakidee insturen?",
          a: "Ja! Elk lid/leider van een jeugdbeweging mag zoveel mogelijk ideeën insturen als je wil."
        },
        {
          q: "Wie mag deelnemen?",
          a: "Leden, leiders en bestuursleden van jeugdbewegingen. Je moet dus gelinkt zijn aan een jeugdbeweging."
        },
        {
          q: "Hoe weet ik wanneer ik gewonnen heb?",
          a: "De winnaars worden bekend gemaakt op de dag van de jeugdbeweging (21 oktober 2022). Je ontvangt van ons een mail. Je kan de winnaars ook ontdekken op social media. Zie: https://instagram.com/sparkvlaanderen. "
        },
        {
          q: "Moet ik het maakidee zelf kunnen maken?",
          a: "Neen, absoluut niet. Spark zal helpen om de 10 geslecteerde ideeën te realiseren."
        },
        {
          q: "Wat krijg ik precies als mijn maakidee geselecteerd is??",
          a: "Je ontvangt 500 EUR om het idee te realiseren. Je ontvangt ook begeleiding vanuit spark om jou te helpen bij de realisatie van het idee."
        },
                {
          q: "Wat houdt de begeleiding precies in?",
          a: "Voor elk maakidee wordt een maakplan opgesteld. Spark helpt ofwel zelf, ofwel zoekt spark een maakplaats of maakbib uit jouw buurt waar je terecht kan om materialen, machines en kennis te vinden. Het is wel de bedoeling dat een groepje uit de jeugdbeweging zelf betrokken is bij het realiseren van het maakidee, maar met hulp vanuit Spark."
        },
        {
          q: "Ben ik verplicht om het maakidee uit te voeren als ik win??",
          a: "Ben je geselecteerd maar kan je het idee omwille van praktische redenen (ledenwissel, andere plannen, enz.) niet uitvoeren, dan doneren we jouw budget aan de volgende in de ranking. Als je vast zit met het realiseren van jouw idee, dan springt Spark in om te helpen."
        },
      ],
      scrollInfo: {},
    };
  },
  computed: {
    portraitMode() {
      if (this.$q.screen.width < this.$q.screen.height) {
        return true;
      } else {
        return false;
      }
    },
    bend() {
      if (this.scrollInfo.delta === undefined) {
        return 0;
      } else {
        if (Math.abs(this.scrollInfo.delta.top) > 10) {
          if (this.scrollInfo.delta.top < 0) {
            return 200;
          } else {
            return 0;
          }
        } else {
          return 100 - 7 * this.scrollInfo.delta.top;
        }
      }
    },
  },
  methods: {
    onScroll(info) {
      this.scrollInfo = info;
    },
    openUrl(url) {
      window.open(url, "_blank");
    },
  },
};
</script>
<style lang="css" scoped>
.bg-ctatraject {
  background-image: url("../../assets/illu/traject.svg");
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: 85% 80%;
}

.my-card-activity:hover {
  background-color: #f5f5f5;
  cursor: pointer;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.my-card-news {
  border-radius: 12px;
  min-height: 290px;
  min-width: 270px;
}

.my-card-news:hover {
  background-color: #f5f5f5;
  cursor: pointer;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.bg-camping {
  background-image: url("../../assets/hero-camping.svg");
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 0;
  bottom: -50px;
}

.q-field__after,
.q-field__append {
  padding-left: 0px;
}

.offerButton {
  height: 120px;
  width: 120px;
  border: none;
  background: none;
  cursor: pointer;
}

.offerButton:focus {
  outline: 2px dashed #17171d;
}

.offerButton:hover svg {
  transform: scale(1.1);
}

.offerButton::-moz-focus-inner {
  border: 0;
}

.offerButton svg {
  outline: none;
  transition: transform 0.15s linear;
}

.sr-only {
  height: 1px;
  overflow: hidden;
  position: absolute;
  width: 1px;
}

.offerButtonBackground {
  background-size: 120px 120px;
  background-position: center center;
  background-repeat: no-repeat;
}

.offerButtonSpeldatabank {
  background-image: url("../../assets/button-spellendatabank.svg");
}

.offerButtonSpelkisten {
  background-image: url("../../assets/button-spelkisten.svg");
}

.offerButtonProjecten {
  background-image: url("../../assets/button-projecten.svg");
}

.offerButtonMatchmaker {
  background-image: url("../../assets/button-matchmaker.svg");
}

.testButtonBackground {
  background-image: url("../../assets/button-spellendatabank.svg");
  background-size: 50px 50px;
  background-position: center center;
  background-repeat: no-repeat;
}

.testquote::before,
.testquote::after {
  content: " '' ";
  color: #ed6b6a;
  font-size: 40px !important;
}

.test-background {
  background-size: 20px 20px;
}

.footerBackground {
  background-image: url("../../assets/footer-team.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
}

.text-standard {
  color: #1c1e1c;
}

.spark-image-title {
  background-position: 0% 0%;
  height: 40px;
  background-size: contain;
}
</style>
