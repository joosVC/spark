<template>
  <q-layout view="lHh Lpr lFf">
    <q-header style="background-color: rgba(0, 0, 0, 0)">
      <q-toolbar>
        <q-toolbar-title>
          <div class="row justify-between">
            <div class="col">
              <q-item clickable v-ripple dense v-if="false">
                <q-item-section class="text-body1">
                  <div class="row items-end">
                    <div class="" style="width: 30px">
                      <q-img
                        src="../assets/nav-team.svg"
                        contain
                        height="24px"
                        width="24px"
                      />
                    </div>
                    <div class="text-info text-weight-bold nav-item">
                      ONS TEAM
                    </div>
                  </div></q-item-section
                >
              </q-item>
            </div>
            <div class="col text-info text-center">
              <q-img
                src="../assets/spark-color.svg"
                height="38px"
                width="84px"
                contain
              />
            </div>
            <div class="col text-right">
              <div class="row q-gutter-md text-info float-right">
                <q-item clickable v-ripple dense v-if="$q.screen.gt.sm">
                  <q-item-section class="text-body2">
                    <div class="row items-end">
                      <div class="" style="width: 30px">
                        <q-img
                          src="../assets/nav-aanbod.svg"
                          contain
                          height="24px"
                          width="24px"
                        />
                      </div>
                      <div class="text-info text-weight-bold nav-item">
                        AANBOD
                      </div>
                    </div></q-item-section
                  >
                </q-item>
                <q-item clickable v-ripple dense v-if="$q.screen.gt.sm" @click="$router.push('/badge')">
                  <q-item-section class="text-body2">
                    <div class="row items-end">
                      <div class="" style="width: 30px">
                        <q-img
                          src="../assets/nav-join.svg"
                          contain
                          height="24px"
                          width="24px"
                        />
                      </div>
                      <div class="text-info text-weight-bold nav-item">
                        BÅDGE ‘N BÛTTØN ACTIE
                      </div>
                    </div></q-item-section
                  >
                </q-item>
              </div>
              <q-btn
                v-if="$q.screen.lt.sm"
                flat
                dense
                round
                icon="menu"
                aria-label="Menu"
                color="info"
                @click="toggleLeftDrawer"
              />
            </div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered class="bg-bggreen">
      <q-list>
        <q-item-label header>
          <q-img src="../assets/spark-color.svg" width="100px" contain/>
        </q-item-label>
        <q-item
          v-for="link in links"
          :key="link.title"
          clickable
          tag="a"
          target="_blank"
          :href="link.link"
        >
          <q-item-section v-if="link.icon" avatar>
            <q-img
                          :src="link.icon"
                          contain
                          height="24px"
                          width="24px"
                        />
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-bgblue font-sister">{{ link.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <router-view />
  </q-layout>
</template>

<script>
const linksList = [
  {
    title: "Aanbod",
    icon: require('../assets/nav-aanbod-blue.svg'),
    link: "https://quasar.dev",
  },
  {
    title: "Doe mee",
    icon: require('../assets/nav-join-blue.svg'),
    link: "badge",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      links: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<style lang="scss">
.nav-item {
  line-height: 1;
  text-decoration: underline;
}
</style>
