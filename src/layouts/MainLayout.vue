<template>
  <q-layout view="lHh Lpr lFf">

    <q-header style="background-color: rgba(0, 0, 0, 0)">
      <q-toolbar class="bg-bgblue">
        <q-toolbar-title>
          <div class="row justify-between">
            <div class="col">
              <q-item clickable v-ripple dense v-if="false">
                <q-item-section class="text-body1">
                  <div class="row items-end">
                    <div class="" style="width: 30px">
                      <q-img src="../assets/nav-team.svg" contain height="24px" width="24px" />
                    </div>
                    <div class="text-standard text-weight-bold nav-item">
                      ONS TEAM
                    </div>
                  </div>
                </q-item-section>
              </q-item>
            </div>
            <div class="col text-standard text-center" style="cursor:pointer;"
              @click="$router.currentRoute.path === '/' ? '' : $router.push('/')">
              <q-img class="logo-spark" src="../assets/spark-color.svg" height="38px" width="84px" contain />
            </div>
            <div class="col">
              <div class="row q-gutter-md text-standard float-right">
                <q-btn-dropdown flat class="font-sister" label="Aanbod" icon="img:../customicons/nav-aanbod.svg" size="lg">
                  <q-list class="bg-bgblue font-sister text-h6">
                    <q-item clickable v-close-popup @click="$router.currentRoute.path === '/spellen' ? '' : $router.push('/spellen')">
                      <q-item-section>
                        <q-item-label >Speldatabank</q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-item clickable v-close-popup @click="$router.currentRoute.path === '/microbit' ? '' : $router.push('/microbit')">
                      <q-item-section>
                        <q-item-label>Micro:bit spelkist</q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-item clickable v-close-popup @click="$router.currentRoute.path === '/maak' ? '' : $router.push('/maak')">
                      <q-item-section>
                        <q-item-label>Projectoproep</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>

                <q-btn flat class="font-sister" label="Over ons" size="lg" icon="img:../customicons/nav-team.svg" @click="$router.currentRoute.path === '/spark' ? '' : $router.push('/spark')"></q-btn>

              </div>
              <q-btn v-if="$q.screen.lt.sm" flat dense round icon="menu" aria-label="Menu" color="standard"
                @click="drawerLeft = !drawerLeft" />
            </div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawerLeft" bordered class="bg-bggreen">
      <q-list>
        <q-item-label header>
          <q-img src="../assets/spark-color.svg" width="100px" contain />
        </q-item-label>
        <q-item v-for="link in links" :key="link.title" clickable tag="a" :href="link.link">
          <q-item-section v-if="link.icon" avatar>
            <q-img :src="link.icon" contain height="24px" width="24px" style="color:#333" />
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-standard font-sister">{{ link.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <div class="bg-sred">
      <router-view />
    </div>

      <q-page class="bg-bggreen" style="z-index: 1">
      <div
        class="
          row
          q-pa-md q-py-xl
          text-center
          justify-center
          container-max-width
        "
      >
        <div
          :class="{
            'col-12': true,
            'text-center': true,
            'text-uppercase': true,
            'text-h5': $q.screen.gt.sm,
            'text-h6': $q.screen.lt.sm,
            'font-josefin': true,
            'q-pb-md': true,
            'text-sgreen': true,
          }"
        >
          Iedereen een onderzoeker en maker
        </div>
        <div
          :class="{
            'col-12': true,
            'col-sm-10': true,
            'text-h2': $q.screen.gt.sm,
            'text-h5': $q.screen.lt.sm,
            'text-uppercase': true,
            'q-pb-lg': true,
            'text-white': true,
          }"
        >
          Ik wil ontdekken hoe ik technologie &amp; wetenschap kan toepassen om
          het leven mens en natuur te verbeteren
        </div>
        <div class="col-12">
          <svg height="10" width="300">
            <line
              x1="0"
              x2="300"
              y1="0"
              y2="0"
              style="stroke: #41b37e; stroke-width: 10"
            />
          </svg>
        </div>
      </div>
      <div class="row justify-center text-center">
        <div
          :class="{
            'col-12': true,
            'q-pb-lg': true,
            'col-sm-10': true,
            'text-h5': $q.screen.gt.sm,
            'text-h6': $q.screen.lt.sm,
            'text-weight-bold': true,
            'text-uppercase': true,
            'font-josefin': true,
            'text-bgblue': true,
          }"
        >
          Laat de vonk overslaan
        </div>
        <div
          class="
            col-12 col-sm-8
            text-subtitle1
            font-josefin
            text-bgblue
            q-pb-lg q-px-xl
          "
        >
          Technologie en wetenschap, of kortweg STEM, speelt een grote rol in
          onze maatschappij. Niet elke jongere krijgt de kans om voorbeelden te
          zien wat je met STEM kan doen, nu en in hun toekomst. Sommige jongeren
          zien STEM ook als iets complex of saai, of misschien hebben ze ergens
          het idee gekregen dat ze niet goed zijn in STEM.
        </div>
        <div
          class="
            col-12 col-sm-8
            text-subtitle1
            q-pb-xl
            font-josefin
            text-bgblue
            q-px-xl
          "
        >
          SPARK wil een vonk voor technologie en wetenschap laten overslaan naar
          de grote groep maatschappelijk bewogen jongeren uit jeugdbewegingen.
          Ons doel is om jongeren spelenderwijs te laten ontdekken hoe ze zelf
          technologie en wetenschap kunnen toepassen om het leven van mens en
          natuur te verebteren.
        </div>
      </div>
      <div class="row justify-center text-center container-max-width">
        <div class="col-12 text-h2 text-weight-bold font-josefin text-white">
          Team &amp; partners
        </div>
      </div>
      <div class="row q-pb-xl q-pt-md q-mb-xl q-px-sm container-max-width">
        <div class="col-12 footerBackground" style="height: 200px">
          <div class="flex flex-center">
            <div class="row q-pa-xl" style="width: 100%">
              <div
                class="col-12 col-sm-5"
                :style="{
                  'min-width': '300px',
                  'border-right': $q.screen.lt.sm
                    ? '0px solid black'
                    : '1px solid black',
                }"
              >
                <div class="row items-center">
                  <div
                    class="col-4 q-px-sm q-pb-sm"
                    v-for="member in team"
                    :key="member.name"
                  >
                    <div class="flex flex-center">
                      <img
                        :src="member.src"
                        style="
                          max-height: 60px;
                          background-size: contain;
                          background-position: center center;
                          overflow: hidden;
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-7" :style="{ 'min-width': '300px' }">
                <div class="row items-center">
                  <div
                    class="col-2 q-px-sm q-pb-sm"
                    v-for="partner in partners"
                    :key="partner.name"
                  >
                    <div class="flex flex-center">
                      <img
                        :src="partner.src"
                        style="
                          max-height: 60px;
                          background-size: contain;
                          background-position: center center;
                          overflow: hidden;
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-page>

  </q-layout>
</template>


<script>
export default {
  name: "MainLayout",
  watch: {
    $route(to, from) {
      var currentpath = this.$router.currentRoute.path;
      switch (currentpath) {
        case "/":
          this.background = "cesium";
          break;
        case "/aanbod":
          this.background = "rose";
          break;
        case "/traject":
          this.background = "ice";
          break;
        default:
          this.background = "cesium";
      }
    },
  },
  data() {
    return {
            team: [
        {
          name: "Brightlab",
          src: require("../assets/team-brightlab.png"),
        },
        {
          name: "KU Leuven",
          src: require("../assets/team-kul.png"),
        },
        {
          name: "UCLL",
          src: require("../assets/team-ucll.png"),
        },
        {
          name: "De Creatieve STEM",
          src: require("../assets/team-dcs.png"),
        },
        {
          name: "Scholengroep RHIZO",
          src: require("../assets/team-rhizo.png"),
        },
        {
          name: "Techniek- en wetenschapsacademie Leuven Limburg",
          src: require("../assets/team-tewa.png"),
        },
      ],
      partners: [
        {
          name: "Stad Leuven",
          src: require("../assets/partners/partner-stadleuven.png"),
        },
        {
          name: "Formaat",
          src: require("../assets/partners/partner-formaat.png"),
        },
        {
          name: "Link in de kabel",
          src: require("../assets/partners/partner-linkindekabel.png"),
        },
        {
          name: "Chiro",
          src: require("../assets/partners/partner-chiro.png"),
        },
        {
          name: "KSA",
          src: require("../assets/partners/partner-ksa.png"),
        },
        {
          name: "Scouts & gidsen Vlaanderen",
          src: require("../assets/partners/partner-scouts.png"),
        },
        {
          name: "MaakBib",
          src: require("../assets/partners/partner-maakbib.svg"),
        },
        {
          name: "Agoria",
          src: require("../assets/partners/partner-agoria.jpeg"),
        },
        {
          name: "De Krook",
          src: require("../assets/partners/partner-dekrook.jpeg"),
        },
        {
          name: "Imec",
          src: require("../assets/partners/partner-imec.png"),
        },
        {
          name: "Flanders Make",
          src: require("../assets/partners/partner-flandersmake.jpeg"),
        },
        {
          name: "STEM-Platform",
          src: require("../assets/partners/partner-stemplatform.png"),
        },
      ],
      background: "cesium",
      drawerLeft: false,
      menuStart: [
        { title: "Activiteiten", icon: "build_circle", link: "https://app.maakbib.be/activiteiten" },
        { title: "Handboeken", icon: "book", link: "https://app.maakbib.be/handboeken" },
        { title: "Hulpmiddelen", icon: "medical_services", link: "https://app.maakbib.be/hulpmiddelen" },
        { title: "Activiteiten 2020", icon: "history", link: "https://activiteiten.decreatievestem.be/" },
        { title: "Word Vrijwilliger", icon: "volunteer_activism", link: "dialog" }
      ],
      menuTraining: [
        { title: "Opleidingen", icon: "school", link: "https://app.maakbib.be/opleidingen" },
        {
          title: "Coachtraject",
          icon: "stars",
          link: "/traject",
        },
      ],
      menuMaakbib: [
        { title: "Nieuws", icon: "feed", link: '/nieuws' },
        { title: "Over Ons", icon: "groups", link: "/maakbib" },
        { title: "Ons Aanbod", icon: "computer", link: "/aanbod" },
      ],
      links: [
        {
          title: "BÅDGE ‘N BÛTTØN ACTIE",
          icon: require('../assets/nav-join.svg'),
          link: "/badge",
        },
      ]
    };
  },
  methods: {
    pageMinHeight() {
      return { minHeight: '50vh' }
    },
    openMaakBib() {
      window.open('https://www.maakbib.be', '_blank').focus();
    },
    dialogVolunteer() {
      this.$q
        .dialog({
          title:
            "Zin om als vrijwilliger aan te sluiten bij een MaakBib?",
          message: "Heb jij interesse in maken en ben je creatief? Dan willen wij jou opleiden om met maaktoestellen te werken. Zo kan je anderen weer verder helpen. We introduceren jou graag in een MaakBib in je buurt. Neem contact op als je nieuwsgierig bent.",
          cancel: true,
        })
        .onOk(() => {
          this.openUrl("mailto:cristina@decreatievestem.be?subject=vrijwilliger%20worden")
        });
    },
    menuRouting(link) {
      if (link.charAt(0) === "/") {
        this.$router.push(link);
      } else if (link === "dialog") {
        this.dialogVolunteer();
      } else {
        window.open(link, '_self');
      }
    },
    openUrl(link) {
      window.open(link, '_blank');
    },
    onItemClick(){
      console.log("dropdown clicked");
    }
  }
};
</script>
<style lang="css">
.bg-footer {
  background-image: url("../assets/layout/bg-footer.svg");
  background-size: cover;
  background-repeat: no-repeat;
}

.nav-item {
  line-height: 1;
  text-decoration: underline;
}

.logo-spark {
  transform: scale(1);
  background-color: rgba(0, 0, 0, 0);
  border-radius: 2px;
  transition: 0.25s;
}

.logo-spark:hover {
  transform: scale(1.02);
  background-color: rgba(0, 0, 0, 0.1);
}

.footerBackground {
  background-image: url("../assets/footer-team.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
}
</style>
