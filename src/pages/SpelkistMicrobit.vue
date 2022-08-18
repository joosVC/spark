<template>
  <q-page-container class="q-pt-xl bg-sgreen">
    <q-page class="" style="z-index: 5; min-height: 100px;">
      <div class="
          row
          font-josefin
          text-weight-bold
          container-max-width
          q-pa-xl
        ">
        <div class="col-11 col-sm-6">
          <div class="text-h3 text-white">Micro:bit spelkist</div>
          <div class="text-h6 text-white q-pt-xl">Met een Micro:bit - een mini-computer met tal van ingebouwde sensoren
            - maak je spelen nog interactiever, leuker en uniek. Je bindt een micro:bit rond je arm, upload een
            spelletje en start met spelen. Laat iets verschijnen op het LED-scherm, detecteer beweging, meet hoever
            iedereen van elkaar zit, maak een tof geluidje, enzoverder. Kies een spel dat reeds geprogrammeerd is of
            bedenk en codeer je eigen game voor in de jeugdbeweging! </div>
        </div>
        <div class="absolute col-11 col-sm-5 offset-sm-6" style="z-index:10;">
          <div class="" style="position: relative; width: 100%; ">
            <q-img style="margin-top: 96px;" contain src="../assets/spellendatabank.png" />
            <div class="
                flex flex-center
                absolute-top-left
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
        " fill="#DDE7DC" />
      </svg>
      <div class="bg-bgblue row">
        <div class="col-12 text-center">
          <q-btn flat icon="south" color="sgreen" size="lg"></q-btn>
        </div>
      </div>
    </q-page>

    <q-page class="bg-bgblue q-pt-xl" style="z-index: 4">
      <div :class="{ 'row': true, 'justify-center': true, 'container-max-width': true }">
        <div class="col-11 col-sm-11 bg-yellow">
          <q-card flat class="bg-bgblue">
            <q-card-section style="padding:0% 24% 12% 0%;">
              <q-img contain src="../assets/spellendatabank.png" style="max-width:750px;max-height:750px;">
                <div class="absolute-center" style="background-color:rgba(0,0,0,0)">
                  <q-btn icon="play_arrow" flat stack color="sgreen" size="100px"><span
                      class="text-h6 text-white font-josefin text-weight-bold">Speel video</span></q-btn>
                </div>
              </q-img>
            </q-card-section>
            <q-card-section class="container-background flex flex-center absolute-right" style="bottom:50%; right:10%">
              <div class=" text-h4 q-pa-xl text-white">
                <span>Wat kan je doen met de Micro:bit spelkist?</span>
              </div>
            </q-card-section>
          </q-card>
        </div>


      </div>
      <div class="row q-px-xl container-max-width">
        <div class="col-12">
          <div :class="
            $q.screen.lt.sm
              ? 'text-h5 text-sgreen q-pb-lg'
              : 'text-h3 text-sgreen q-pb-xl'
          ">
            HOE WERKT HET?
          </div>

          <div class="row justify-center">
            <div class="col-12 col-sm-4 q-pr-xl" v-for="step in steps" :key="step.number">

              <div class="row">
                <div class="" style="width:60px;">
                  <q-img :src="step.img" style="width:48px;"></q-img>
                </div>
                <div class="col text-h5 text-sred">
                  {{ step.title }}
                </div>
              </div>
              <div :class="{
                'text-h5': $q.screen.gt.sm,
                'text-body1': $q.screen.lt.sm,
                'text-weight-regular': true,
                'q-pt-md': true,
                'font-josefin': true,
                'q-pb-md': $q.screen.gt.sm,
                'q-pb-sm': $q.screen.lt.sm,
                'text-standard': true,
              }">
                {{ step.instruction }}
                <div class="q-gutter-sm q-pt-md" v-if="step.linkActive">
                  <q-btn v-for="link in step.links" :key="link.linkText" class="font-sister q-mt-md" size="lg" no-caps
                    rounded color="sred" :label="link.linkText"></q-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-page>


    <q-page class="bg-bgblue q-pt-xl" style="z-index: 4">
      <div class="row container-max-width q-px-xl q-pt-xl">
        <div class="col-12 text-left">
          <div :class="
            $q.screen.lt.sm
              ? 'text-h5 text-sgreen q-pb-lg'
              : 'text-h3 text-sgreen q-pb-xl'
          ">
            Micro:bit spelletjes
          </div>
        </div>
      </div>
      <div
        :class="{ 'row': true, 'justify-center': true, 'container-max-width': true, 'q-gutter-lg': $q.screen.gt.sm, 'q-gutter-sm': $q.screen.lt.sm }">

        <q-card flat style="width:344px;margin-top:198px;border-radius:20px;" v-for="n in 12" :key="n">
          <div class="mask1 absolute" style="top:-170px;">
            <img src="https://via.placeholder.com/344" alt="Cinque Terre" width="344" height="344">
          </div>
          <q-card-section>
            <div style="padding-top:174px;"></div>
            <div class="text-h4">Mijnenveld</div>
            <div class="text-h6">Doorkruis een touwenparcours, als je de touwen raakt gaat de bom af.</div>
          </q-card-section>
        </q-card>

      </div>
      <div class="row container-max-width justify-center q-pa-xl">
        <div class="col-12 maakspel-background flex flex-center text-h3 text-white" style="height:260px;">
          Maak je eigen spel
        </div>
      </div>
      <div class="row container-max-width justify-center q-pa-xl">

            <div class="col-12 col-sm-12 q-py-xl">
              <div class="row">
                <div class="col-12">
                  <div class="text-h3 text-sgreen q-pb-lg">FAQ</div>
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
    </q-page>

    <q-scroll-observer @scroll="onScroll" />
  </q-page-container>
</template>

<script>

export default {
  name: "PageIndex",
  data() {
    return {
      steps: [
        {
          number: "1",
          title: "Reserveer gratis jouw Micro:bit spelkist",
          instruction:
            "Wil je één middag of enkele weken met de Micro:bit spelkist aan de slag? Dien jouw aanvraag in en we nemen contact met jou op voor de praktische regeling.",
          img: require("../assets/badge-step1-red.svg"),
          hero: require("../assets/step1.png"),
          links: [
            {
              linkRef: "step1",
              linkText: "Reserveer de Micro:bit spelkist",
            }
          ],
          linkActive: true
        },
        {
          number: "2",
          title: "Leer werken met de Micro:bit spelkist",
          instruction:
            "Leiders kunnen ter voorbereiding korte introfilmpjes volgen die duidelijk maken hoe je met de Micro:bit spelkist aan de slag kan. Zo haal je maximaa plezier uit de spelkist.",
          img: require("../assets/badge-step2-red.svg"),
          hero: require("../assets/step2.png"),
          links: [
            {
              linkRef: "step2",
              linkText: "Bekijk de instructiefilmpjes",
            }
          ],
          linkActive: true
        },
        {
          number: "3",
          title: "Speel met de Micro:bit spelkist",
          instruction:
            "Speel een Micro:bit spel uit onze databank of bedenk en programmeer jouw eigen spel. Het kan allemaal! Deel jouw spel met de tags: #micro:bit @spark.vlaanderen.",
          img: require("../assets/badge-step3-red.svg"),
          hero: require("../assets/step3.png"),
          links: [
            {
              linkRef: "Sdf",
              linkText: "Kies een spel",
            },
            {
              linkRef: "dfs",
              linkText: "Bedenk een spel"
            }
          ],
          linkActive: true
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

.container-background {
  background-image: url("../assets/footer-team-green.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  transform: rotate(15deg);
}

.maakspel-background {
  background-image: url("../assets/background-maakspel.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
}
</style>
