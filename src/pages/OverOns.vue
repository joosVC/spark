<template>
  <q-page-container class="q-pt-xl">
    <q-page class="bg-bggreen" style="z-index: 5; min-height: 100px;">
      <div class="
          row
          font-josefin
          text-weight-bold
          container-max-width
          q-pa-xl
          justify-center
        ">
        <div class="col-11">
          <div class="row items-center">
            <div class="col-12 text-center q-py-xl">
              <q-img src="../assets/spark-color.svg" style="width:44vw"></q-img>
            </div>
            <div class="col-12 col-sm-6">
              <div class="text-h4 text-sgreen">Een vonk</div>
              <div class="text-h6 q-py-lg text-white">SPARK wil een vonk voor technologie en wetenschap, of kortweg
                STEM, laten overslaan naar de grote groep maatschappelijk bewogen jongeren uit de
                jeugdbeweging.<br /><br />STEM speelt een belangrijke rol in onze maatschappij. Niet elke jongeren
                krijgt de kans om voorbeelden te zien van wat je met STEM kan doen, nu en in de toekomst. Sommige
                jongeren zien STEM ook als iet complex of saai, of misschien denken ze dat ze niet goed zijn in
                STEM.<br /><br />Met ons SPARK-aanbod willen we jongeren spelenderwijs laten ontdekken hoe ze zelf STEM
                kunnen toepassen om het leven van mens en natuur te verbeteren.
              </div>
            </div>
            <div class="col-12 col-sm-5 offset-sm-1">
              <q-img src="../assets/projecten.png"></q-img>
            </div>
            <div class="col-12 col-sm-5" v-if="$q.screen.gt.sm">
              <q-img src="../assets/matchmaker.png"></q-img>
            </div>
            <div class="col-12 col-sm-6 offset-sm-1">

              <div class="text-h4 text-sgreen">Een brug</div>
              <div class="text-h6 q-py-lg text-white">Om dit te realiseren slaan wij een brug tussen de jongeren in
                jeugdbewegingen
                en maakplaatsen overal in Vlaanderen. <br /><br />Heel wat jongeren in jeugdbewegingen zijn sociaal en
                maatschappelijk geëngageerd. SPARK wil deze jongeren inspireren rond STEM. Dit doen we door STEM
                oplossingen te bieden voor door hen gekozen sociaal maatschappelijke problemen, binnen het kader van de
                3 door VLAIO aangeduide transitieprioriteiten (digitaliseren, circulaire economie en energie &
                klimaat).<br /><br />We betrekken hierbij de maakleerplekken en maakbibs, als booming capaciteit binnen
                Vlaanderen, die over de nodige expertise en infrastructuur beschikken om deze STEM-activiteiten te laten
                plaatsvinden. SPARK biedt ondersteuning door STEM-activiteiten en opleidingen te ontwikkelen voor
                educatieve medewerkers.<br /><br />Naast jeugdbewegingen, maakbibs en maakplekken, betrekken we ook
                bedrijven en bedrijvenorganisaties die het project actief ondersteunen. </div>
            </div>
            <div class="col-12 q-py-lg">
              <div class="text-h4 text-sgreen text-center">Via participatie</div>
              <div class="text-h6 q-py-lg text-white">
                Via de vergadertechniek ‘Lego Serious Play’ en andere co-creatietechnieken gingen we in 2021 met
                jongeren in gesprek rond wat hen plezier brengt in de jeugdbeweging. Thema’s als vriendschap, zich
                kunnen uitleven en even ontsnappen van thuis werden tastbaar. Die thema’s dienen ook als basishefbomen
                waarrond SPARK activiteiten ontwikkelt. <br /><br />In een tweede stap vroegen we de jongeren hun
                droomactiviteit uit te bouwen, om ook deze input te analyseren en mee te nemen bij het ontwerp van
                activiteiten. Daarnaast onderzochten we de favoriete activiteiten van leden en leiders van
                jeugdbewegingen aan de hand van een vragenlijst. We polsten hier ook naar hun standpunt tegenover het
                idee om binnen de jeugdbewegingen zaken te onderzoeken en maken (STEM). We bevroegen 31 leden en 90
                leiders. <br /><br />STEM is geen ‘one-size-fits-all' verhaal. We willen een aanbod ontwikkelen dat elk
                lid en leider in een jeugdbeweging op het eigen interesse- en vaardigheids-niveau aanspreekt om met STEM
                aan de slag te gaan. We willen absoluut het open en vrije karakter dat leeft in jeugdbewegingen
                respecteren. In SPARK kiezen de leden en leiders zelf wat ze willen doen. SPARK wil enkel inspireren met
                een aanbod op maat en faciliteren waar nodig. Zo’n aanbod op maat voor jeugdbewegingen vertrekt vanuit
                creatieve en actieve spelvormen.
              </div>
            </div>
            <div class="col-12">
              <q-img src="../assets/spellendatabank.jpg" style="border-radius:60px;height:550px;"></q-img>
            </div>

          </div>
        </div>
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
    <q-page class="bg-bgyellow">
      <div class="
          row
          font-josefin
          text-weight-bold
          container-max-width
          q-pa-xl
          justify-center
        ">
        <div class="col-11">
          <div class="row">
            <div class="col-12 text-h2 text-bggreen q-py-xl text-center">
              Het SPARK-aanbod
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-4">
              <q-img src="../assets/spellendatabank.png"></q-img>
            </div>
            <div class="col-12 col-sm-8">
              <div class="text-h4 text-sgreen">De STEM-speldatabank</div>
              <div class="text-h6">
                We ontwikkelen, testen en publiceren een reeks van 20 laagdrempelige en aantrekkelijke spelletjes die
                leden en leiders het plezier van maken, ontwerpen en onderzoeken laten ontdekken, de basis van STEM.
                <br /><br />Dit is een eerste laagdrempelige stap om STEM te introduceren binnen jeugdbewegingen.
                Bedoeling is dat deze STEM-spelletjes ter plaatste tijdens de ‘vergadering’ van de jeugdbeweging worden
                uitgevoerd en dat hiervoor geen extra STEM-materiaal nodig is. We pimpen bestaande populaire
                jeugdbewegingspelletjes én ontwikkelen nieuwe innovatieve spelen. Hierbij worden leiders mét en zonder
                interesse in of affiniteit met STEM aangesproken. We zorgen er ook voor dat er telkens ook een
                STEM-verdieping van het spel beschikbaar is, maar de nadruk ligt op plezier.<br /><br />Een eerste reeks
                STEM-spelletjes voor de STEM-databank worden deze zomer al ontwikkeld én uitgetest door De Creatieve
                Stem.
              </div>
            </div>
            <div class="col-12 col-sm-4 q-pt-xl">
              <q-img src="../assets/matchmaker.png"></q-img>
            </div>
            <div class="col-12 col-sm-8 q-pt-xl">
              <div class="text-h4 text-sgreen">De STEM-spelkist</div>
              <div class="text-h6">
                We ontwikkelen, testen en verdelen ook twee uitdagende en aantrekkelijke 2 STEM-spelkisten. Een
                STEM-spelkist wordt een uit te lenen koffer vol onmiddellijk bruikbaar STEM-materiaal die met of zonder
                externe begeleiding door leiders tijdens hun vergadering op hun eigen terrein kunnen
                gebruiken.<br /><br />We vertrekken vanuit een typische jeugdbeweging activiteit (bv. sjorren) of we
                introduceren innovatie (bv. activiteit met een micro:bit) in een uitdagend STEM-spel. Ook hebben we hier
                nog meer de mogelijkheid om de transitie prioriteiten van de overheid (circulaire economie,
                digitaliseren, klimaat en energie) via een spelvorm onder de aandacht te brengen. Maakplaatsen kunnen
                ideale locaties zijn om de STEM-spelkist te verspreiden.<br /><br />TWA UCLL zal in het voorjaar 2022 de
                STEM-spelkoffers uittesten met jeugdbewegingen, en als team testen we ook de dienstverlening en het
                uitleensysteem uit.
              </div>
            </div>

            <div class="col-12 col-sm-4 q-pt-xl">
              <q-img src="../assets/projecten.png"></q-img>
            </div>
            <div class="col-12 col-sm-8 q-pt-xl">
              <div class="text-h4 text-sgreen">Het STEM-project</div>
              <div class="text-h6">
                We ontwikkelen, testen, promoten en trainen leiders om twee aantrekkelijke STEM-projecten uit te voeren
                die een groepje leden en leiders uitdaagt om het plezier van maken, ontwerpen en onderzoeken laten
                ontdekken.<br /><br />Met de STEM-projecten gaan we weer een stapje verder in ons STEM-verhaal voor
                jeugdbewegingen. De STEM-projecten kunnen ter plaatse, maar ook in de maakplekken worden uitgevoerd. Of
                een project kan voorbereid worden in de maakplekken en uiteindelijk met de leden op kamp of op weekend
                uitgevoerd worden. Zo’n STEM-project wordt gespreid over meerdere sessies, met gebruik van innovatief
                materiaal en gereedschap en training en coaching van de leiding. We moedigen de jeugdbewegingen om
                projecten uit te werken in lijn met hun eigen activiteiten en jaarthema’s (bv. een warmwaterdouche op
                kamp) of iets volledig nieuws (bv. een duurzaam buurtproject).<br /><br />De STEM-projecten en
                trainingen van leiding en maakplekkers worden ontwikkeld door de begeleide ingenieurstudenten van KU
                Leuven gedurende schooljaar 2021-2022.
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>
    </q-page>

    <q-page class="bg-bgblue">
      <div class="
          row
          font-josefin
          text-weight-bold
          container-max-width
          q-pa-xl
          justify-center
        ">
        <div class="col-11">
          <div class="row">
            <div class="col-12 text-h2 text-bggreen text-center">Partners</div>
          </div>
          <div class="row">
            <div class="col-6 q-pr-xl" v-for="p in team" :key="p.name">
            <div class="row">
              <div class="col-6 q-pt-xl q-pb-md">
                <q-img contain :src="p.src" style="height:68px; width: 144px"></q-img>
              </div>
            </div>
            <div class="row">
              <div class="col-12 text-body1">{{p.info}}</div>
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
      team: [
        {
          name: "Brightlab (RVO-society vzw)",
          src: require("../assets/team-brightlab.png"),
          info: 'Brightlab, het STEM-onderwijslabo van RVO-Society, is kernpartner in Edison voor het ondersteunen van  STEM-vrijetijdsactiviteiten. Brightlab is een didactisch labo waar nieuwe STEM-activiteiten voor de vrije tijd worden ontwikkeld, uitgetest en dan via ‘teach the teacher’ doorgegeven aan STEM-academies. Brightlab wil alle meisjes en jongens de kans geven om hun STEM-talent te ontdekken. Brightlab werkt mee in het ontwikkelen van het STEM-traject voor jeugdbewegingen en maakplekken, zet haar expertise rond communicatie en dessiminatie in en haar ervaring in samenwerken in quadrupel helix verband en is coördinator van SPARK.',
        },
        {
          name: "KU Leuven",
          src: require("../assets/team-kul.png"),
          info: "De faculteit Industriële ingenieurswetenschappen van KU Leuven heeft al enkele jaren ervaring met het uitwerken van STEM-activiteiten voor jongeren. Onder meer de verschillende studententeams die de faculteit rijk is werken zulke activiteiten uit met ondersteuning van docenten en Technovation Hub vzw (zie www.technovationhub.be). De Leuvense campus Groep T van de faculteit en Technovation Hub zijn momenteel volop bezig om in de nieuwe maakleerplek van Stad Leuven een High Tech Lab uit te bouwen, en dit in samenwerking met enkele van deze studententeams. Dit nieuwe High Tech Lab, dat zal focussen op het recycleren van plastics, biedt een mooie opportuniteit om nieuwe STEM-trajecten te ontplooien. KU Leuven engageert zich dan ook om in SPARK één of meer trajecten uit te werken voor de betreffende doelgroepen, met de nodige ondersteuning van coaches van de universiteit en Technovation Hub, en met nauwe betrokkenheid van studententeams."
        },
        {
                   name: "De Creatieve STEM",
          src: require("../assets/team-dcs.png"),
          info: "De Creatieve STEM is trekker van de STEM-partnerschap Maakbib. De vereniging wenst een kader te creëren waarbinnen meisjes en jongen hun talenten in techniek, wetenschap en talen ontwikkelen. De STEM-activiteiten die De Creatieve Stem ontwikkelt, sluiten perfect aan bij de transitieprioriteiten van de Vlaamse overheid en bevatten altijd een technologische en digitale component; de focus ligt op de zogenaamde ‘Key Enabling Technologies’ zoals gepromoot door de UN en Europa.  De Creatieve STEM is verder onder meer ook uitbater van de Ingegnomaakplek  te Drongen, partner van Flanders Make voor STEM activiteiten in scholen,  trekker van het internationale consortium achter het Erasmus+ project Girls in STEM  en erkend als FabLab door de internationale Fab Foundation. De Creatieve STEM is één van de twee Belgische nodes met toelating om de internationale opleiding FabAcademy in te richten. De vzw heeft tenslotte ook ervaring met het coördineren van projecten met verschillende stakeholders. Met haar sterke participatie in SPARK  wil de Creatieve STEM de Maakbibs verder versterken, ondersteunen, activeren en professionaliseren."
        },
        {
                    name: "UCLL",
          src: require("../assets/team-ucll.png"),
          info: "De Techniek- en WetenschapsAcademie, de STE(A)M-Academie van Hogeschool UCLL, coördineert het STEM-partnerschap Edison en fungeert als inhoudelijke partner. Als inhoudelijke partner maken we de vertaalslag van relevante en actuele onderwerpen en thema’s naar interactieve workshops waarin onderzoekend en ontwerpend leren centraal staan. Hogeschool UCLL zal vooral inzetten op het verankeren van SPARK in de bestaande STEM-academies en partnerschappen en de mogelijkheden en drempels onderzoeken van het bereiken van kinderen en jongeren in kwetsbare doelgroepen. Hogeschool UCLL zet haar expertise als inrichter van de techniek en wetenschapsacademie in voor het ontwikkelen van één van de STEM-trajecten, dit mee uittesten en piloteren en haar communicatiekanalen ter beschikking stellen. "
        },
        {
          name: "Scholengroep RHIZO",
          src: require("../assets/team-rhizo.png"),
          info: "RHIZO is een secundaire scholengroep uit Kortrijk en werkt vanuit haar visie op leren en persoonlijke ontwikkeling diverse innovatieprojecten uit, zowel in huis en als externe dienstverleners. Zo realiseren we GoIT Belgium, het STEM-programma van Tata Consultancy Services, en de Dopper Changemaker Challenge Junior, een CSR onderwijsprogramma van Dopper. RHIZO is samen met Antwerp Management School en Mentor vzw mede-oprichter van JUMPLab, een dienstverlening die vroegtijdige schoolverlaters wil activeren via open innovation challenges uit organisaties en via ontwerpdenken. RHIZO ondersteunt Maakbibs via workshops, opleidingen en een netwerk. Als experts in ontwerpend en onderzoekend leren vinden ze het hun rol om samen met Brightlab de expertise uit Maakbib te delen en te verankeren SPARK."
        }
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
</style>
