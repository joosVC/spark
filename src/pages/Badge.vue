<template>
  <q-page-container class="bg-bgyellow">
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
            * Deze actie loopt nog t.e.m. 5 december 2021.
          </div>
        </div>
        <div class="col-12 col-sm-6">
          <div style="position: relative; width: 100%">
            <q-img contain src="../assets/hero-badge.png" />

            <img
              :style="
                $q.screen.lt.sm
                  ? 'vertical-align: top; position: absolute;right: 50px; top: -25px; height:120px;'
                  : 'vertical-align: top; position: absolute;right: 25px; top: -55px;height:250px;'
              "
              src="../assets/badge-heart.svg"
            />
            <img
              :style="
                $q.screen.lt.sm
                  ? 'vertical-align: bottom; position: absolute;right: 15px; bottom: -25px; height:120px;'
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
                ? 'text-h5 text-sred q-pb-lg'
                : 'text-h3 text-sred q-pb-xl'
            "
          >
            WÄT
          </div>
          <div
            :class="{
              'text-h5': $q.screen.gt.sm,
              'text-body1': $q.screen.lt.sm,
              'text-standard': true,
              'text-weight-regular': true,
              'font-josefin': true,
              'q-pb-md': $q.screen.gt.sm,
              'q-pb-sm': $q.screen.lt.sm,
            }"
          >
            Spark wil jeugdbewegingen aan het maken krijgen, daarom geven we
            alle leden van een jeugdbeweging de kans om een supercoole
            gepersonaliseerde button of badge te maken in een maakplaats. Op die manier ontdek je wat de maakplaats in jouw buurt te bieden heeft!
          </div>
          <div
            :class="{
              'text-h5': $q.screen.gt.sm,
              'text-body1': $q.screen.lt.sm,
              'text-standard': true,
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
                ? 'text-h5 text-sred q-pb-lg'
                : 'text-h3 text-sred q-pb-xl'
            "
          >
            HOE WERKT HET?
          </div>

          <div class="row justify-center">
            <div class="col-12 col-sm-6 q-pa-lg" v-for="step in steps" :key="step.number">

              <div :class="$q.screen.lt.sm ? 'row q-pt-lg': 'row q-px-xl q-pt-xl'">
                <div class="col-12">
                            <div style="position: relative; width: 100%">
            <q-img contain :src="step.hero" />

            <img
              :style="
                $q.screen.lt.sm
                  ? 'vertical-align: top; position: absolute;left: 0px; top: -15px; height:100px;'
                  : 'vertical-align: top; position: absolute;left: 0px; top: -45px;height:150px;'
              "
              :src="step.img"
            />
          </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 text-h3 text-darkyellow">
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
                ? 'text-h5 text-sred q-pb-lg'
                : 'text-h3 text-sred q-pb-xl'
            "
          >
            <span><q-img src="../assets/badge-step1-red.svg" height="60px" width="60px" contain /></span> WAAR KAN JE AAN DE SLAG?
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
            Hieronder vind je de lijst van maakplaatsen die deelnemen aan het project, kijk ook goed na welke werktuigen elke maakplaats ter beschikking heeft om jouw creatie te maken.
          </div>
      WEG

        </div>
      </div>

      <div class="row q-pa-md q-pr-xl q-my-xl q-pb-xl container-max-width">
        <div class="col-12 col-sm-12">
          <div
            :class="
              $q.screen.lt.sm
                ? 'text-h5 text-sred q-pb-lg'
                : 'text-h3 text-sred q-pb-xl'
            "
          >
             <span><q-img src="../assets/badge-step2-red.svg" height="60px" width="60px" contain /></span> HOE TEKEN JE JOUW ONTWERP?
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
            <p>Om een ontwerp te snijplotten, laseren of borduren heb je een tekening in vectorformaat nodig (.svg of .dxf bestand). Dat betekent dat je een <span class="text-weight-bold">schets op papier</span> of een <span class="text-weight-bold">tekening die je op het internet vond</span> nog moet <span class="text-weight-bold">'digitaliseren'</span>. Dat kan je doen door gebruik te maken van software zoals <span class="text-weight-bold">Inkscape of Adobe Illustrator</span>. De <span class="text-weight-bold">tutorials</span> hieronder leggen exact uit wat je moet doen, het is makkelijker dan je denkt!</p>
            <p>We vragen om jouw <span class="text-weight-bold">tekening thuis te digitaliseren</span> en het <span class="text-weight-bold">.dxf of .svg bestand</span> mee te nemen naar de maakplaats (op USB of in je mailbox).</p>
            <p><span class="text-weight-bold">Zit je vast?</span> Neem dan contact op met de maakplaats uit je buurt. De <span class="text-weight-bold">begeleiders van de maakplaats helpen jou graag verder met het afwerken van je tekening</span>.</p>
          </div>



          <div class="row justify-center">
            <div :class="{'col-12':true, 'col-sm-6': true, 'q-pa-lg': $q.screen.gt.sm, 'q-py-lg': $q.screen.lt.sm }">
              <q-card :class="$q.screen.lt.sm ? 'tutorial-card': 'q-pa-md tutorial-card'" style="min-height:570px;" @click="openUrl('https://drive.google.com/file/d/1VOeOA3SIWvOHWJTvWDTfVLM0Z0NQNF-g/view?usp=sharing')">
                                  <q-card-section>
                    <q-chip
                      class="q-mb-sm text-body1 text-weight-bold"
                      color="darkyellow"
                      text-color="white"
                      >Inkscape</q-chip
                    >
                    <q-img
                      class="rounded-borders"
                      src="../assets/tut-inkscape.png"
                      :ratio="16 / 9"
                    />
                  </q-card-section>
                  <q-card-section class="q-py-none">
                    <div class="text-h5 text-weight-bold">
                      Handleiding Inkscape
                    </div>
                    <div class="text-body1 text-weight-semibold">
                      Leer een tekening maken met Inkscape, dat is gratis software om een vectortekening te maken. Via de link vind je een basishandleiding om laserwerk vorm te geven, maar je kan de handleiding ook gebruiken om een tekening te maken die je kan snijplotten of borduren.
                    </div>
                  </q-card-section>

                  <q-card-actions
                    style="position: absolute; left: 0px; bottom: 0px"
                  >
                  </q-card-actions>
              </q-card>
            </div>
            <div :class="{'col-12':true, 'col-sm-6': true, 'q-pa-lg': $q.screen.gt.sm, 'q-py-lg': $q.screen.lt.sm }">
              <q-card :class="$q.screen.lt.sm ? 'tutorial-card': 'q-pa-md tutorial-card'"  style="min-height:570px;"  @click="openUrl('https://maakbibapp.web.app/activiteiten')">
                  <q-card-section>
                    <q-chip
                      class="q-mb-sm text-body1 text-weight-bold"
                      color="darkyellow"
                      text-color="white"
                      >Inkscape</q-chip
                    >
                    <q-img
                      class="rounded-borders"
                      src="../assets/tut-voorbeeld.png"
                      :ratio="16 / 9"
                    />
                  </q-card-section>
                  <q-card-section class="q-py-none">
                    <div class="text-h5 text-weight-bold">
                      Voorbeelden Inkscape
                    </div>
                    <div class="text-body1 text-weight-semibold">
                      Op deze pagina vind je tal van voorbeelden om met Inkscape aan de slag te gaan. Volg de stappen in het voorbeeld om jouw eigen tekening vorm te geven. Klik via de link door op "Sleutelhanger maken met Inkscape en de lasercutter" of "theelichthouder maken met de lasercutter". Deze voorbeelden kan je ook perfect volgen om een tekening te maken die je kan borduren of snijplotten.
                    </div>
                  </q-card-section>

                  <q-card-actions
                    style="position: absolute; left: 0px; bottom: 0px"
                  >
                  </q-card-actions>
              </q-card>
            </div>
          </div>

        </div>
      </div>

      <div class="row q-pa-md q-pr-xl q-my-xl q-pb-xl container-max-width">
        <div class="col-12 col-sm-12">
          <div
            :class="
              $q.screen.lt.sm
                ? 'text-h5 text-sred q-pb-lg'
                : 'text-h3 text-sred q-pb-xl'
            "
          >
            <span><q-img src="../assets/badge-step3-red.svg" height="60px" width="60px" contain /></span> WAT KAN JE MAKEN?
          </div>

                <div
            :class="{
              'text-h5': $q.screen.gt.sm,
              'text-body1': $q.screen.lt.sm,
              'text-darkyellow': true,
              'text-weight-regular': true,
              'font-josefin': true
            }"
          >
            <p>Niet elke maakplaats heeft dezelfde machines om jouw badge of button te maken, hieronder <span class="text-weight-bold">ontdek je alle opties</span>. Kijk op de <span class="text-weight-bold">kaart in stap 1 om te ontdekken over welke machines de maakplaats in jouw buurt beschikt.</span></p>
          </div>

          <div class="row">
            <div :class="{'col-12':true, 'col-sm-4':true, 'q-px-xl':$q.screen.gt.sm, 'q-pb-xl':true, 'q-pt-lg': $q.screen.gt.sm}" v-for="tool in tools" :key="tool.name">
              <div class="row justify-between items-center">

                <q-chip color="darkyellow" text-color="white" class="text-weight-bold text-uppercase">{{tool.name}}</q-chip>

              </div>
              <div class="text-h4">
                {{tool.info}}
              <q-chip color="darkyellow" size="xs" outline class="text-weight-bold text-uppercase">{{tool.count}} van de {{numberOfMaakbibs}} deelnemende maakplaatsen kunnen dit</q-chip>

              </div>
              <div>
                <q-img contain :src="tool.img" />
              </div>


            </div>
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
    <q-list>


      <q-expansion-item
        group="somegroup"
        label="Mag ik in groep naar de maakplaats?"
        header-class=" text-darkyellow text-h6 text-weight-bold"
      >
        <q-card class="bg-bgyellow">
          <q-card-section>
            Neen, het is makkelijker om met 2 tot 4 personen langs te gaan. Wil je toch in groep? Neem dan contact op met de maakplaats in jouw buurt om de mogelijkheden te verkennen. Vermeld er zeker bij dat je informeert in verband met de 'badge en button actie van Spark'.
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-separator />

      <q-expansion-item
        group="somegroup"
        label="Mag ik meerdere badges en buttons maken?"
        header-class=" text-darkyellow text-h6 text-weight-bold"
      >
        <q-card class="bg-bgyellow">
          <q-card-section>
            Neen, in principe heeft elke persoon die in de maakplaats langskomt recht op 1 badge of button. Je kan dus niet alleen gaan en dezelfde badge of button 30 keer laten maken, toch alleszins niet gratis.
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-separator />

      <q-expansion-item
        group="somegroup"
        label="Help, wat moet ik doen als mijn vectortekening niet lukt?"
        header-class=" text-darkyellow text-h6 text-weight-bold"
      >
        <q-card class="bg-bgyellow">
          <q-card-section>
          Probeer thuis eerst zelfstandig jouw vectortekening te maken met Inkscape of Illustrator. Zit je toch vast? Neem dan contact op met de maakplaats in je buurt (of ga langs) en daar helpen ze jou met alle plezier verder!
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-separator />

      <q-expansion-item
        group="somegroup"
        label="Is het echt gratis?"
        header-class=" text-darkyellow text-h6 text-weight-bold"
      >
        <q-card class="bg-bgyellow">
          <q-card-section>
          Ja, volledig gratis. Spark betaalt de kost van jouw badge of button. Uiteraard, we maken maar 1 badge of button per persoon die aanwezig is in de maakplaats. Vermeld bij aankomst in de maakplaats dat je langskomt om deel te nemen aan de "badge 'n button actie van Spark".
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-separator />

      <q-expansion-item
        group="somegroup"
        label="Mag ik ontwerpen wat ik wil?"
        header-class=" text-darkyellow text-h6 text-weight-bold"
      >
        <q-card class="bg-bgyellow">
          <q-card-section>
          Ja, je kiest zelf wat je tekent en wil maken. Wij vermelden een badge of button, maar als jij een coole knoop voor je sjaaltje (of iets anders) wil lasersnijden, dan mag dat uiteraard ook. Zorg er ook voor dat je jouw ontwerp op USB of in je mailbox bij hebt in .svg of .dxf formaat.
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-separator />

      <q-expansion-item
        group="somegroup"
        label="Hoe groot mag mijn ontwerp zijn?"
        header-class=" text-darkyellow text-h6 text-weight-bold"
      >
        <q-card class="bg-bgyellow">
          <q-card-section>
          We raden aan om een ontwerp te maken dat kleiner is dan 10 bij 10 cm. Zorg er ook voor dat je jouw ontwerp op USB of in je mailbox bij hebt in .svg of .dxf formaat.
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-separator />

        <q-expansion-item
        group="somegroup"
        label="Hoe maak ik een vectortekening?"
        header-class=" text-darkyellow text-h6 text-weight-bold"
      >
        <q-card class="bg-bgyellow">
          <q-card-section>
          Om een vectortekening te maken heb je een softwarepakket nodig. We raden het gratis tekenprogramma Inkscape aan, hierboven vind je enkele tutorials om hiermee aan de slag te gaan.
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-separator />

        <q-expansion-item
        group="somegroup"
        label="Wat breng ik mee naar de maakplaats?"
        header-class=" text-darkyellow text-h6 text-weight-bold"
      >
        <q-card class="bg-bgyellow">
          <q-card-section>
           Zorg er voor dat je jouw ontwerp op USB of in je mailbox bij hebt in .svg of .dxf formaat.
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-separator />



    </q-list>

        </div>
    </div>




    </q-page>
  </q-page-container>
</template>

<script>

export default {
  name: "Badge",
  data() {
    return {
     email: "",
     numberOfMaakbibs: 13,
      steps: [
        {
          number: "1",
          title: "Vind een maakplaats",
          instruction:
            "Een maakplaats stelt machines en materialen ter beschikking voor jullie, zodat je zelf een badge, sticker of button kan maken. Je vindt de lijst van de deelnemende maakplaatsen hieronder.",
          img: require("../assets/badge-step1.svg"),
          hero: require("../assets/step1.png"),
          linkref: "step1"
        },
        {
          number: "2",
          title: "Teken jouw badge thuis",
          instruction:
            "Ontwerp een tekening waar je een button of badge wil van maken. Let op, dit moet een vectortekening zijn. Weet je niet hoe je dit doet? Volg dan de tutorials die je hieronder vindt om je op weg te helpen.",
          img: require("../assets/badge-step2.svg"),
          hero: require("../assets/step2.png"),
          linkref: "step2"
        },
        {
          number: "3",
          title: "Maak jouw badge in de maakplaats",
          instruction:
            "Breng jouw vectorafbeelding mee naar de maakplaats, ga langs tijdens de bezoekmomenten. Je kan die nu zelf lasercutten, borduren of snijplotten, hoe cool is dat! Kijk goed na welke machines ze hebben in jouw maakplaats.",
          img: require("../assets/badge-step3.svg"),
          hero: require("../assets/step3.png"),
          linkref: "step3"
        },
        {
          number: "4",
          title: "Deel jouw badge met ons online",
          instruction:
            "Deel jullie mooie creaties met ons via social media (vergeet ons niet te taggen @spark.vlaanderen).",
          img: require("../assets/badge-step4.svg"),
          hero: require("../assets/step4.png"),
          linkref: "step4"
        },
      ],
      tools: [
        {
          name: "lasersnijden",
          img: require("../assets/tool-laseren1.png"),
          info: "Je kan een button of ontwerp lasersnijden",
          count: "13"
        },
        {
          name: "snijplotten",
          img: require("../assets/tool-snijplotten.png"),
          info: "Je kan een badge snijplotten en op je hemd strijken",
          count: "13"
        },
        {
          name: "borduren",
          img: require("../assets/tool-borduren.png"),
          info: "Je kan een badge borduren op je hemd",
          count: "3"
        },
      ]
    };
  },
  computed: {

  },
  methods: {
        openUrl(url){
      window.open(url, '_blank');
    }
  },
};
</script>
<style lang="css" scoped>

.tutorial-card {
  border-radius: 15px;
}

.tutorial-card:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
</style>
