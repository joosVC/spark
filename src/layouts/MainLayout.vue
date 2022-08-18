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

                <q-btn flat class="font-sister" label="Over ons" size="lg" icon="img:../customicons/nav-team.svg"></q-btn>

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
</style>
