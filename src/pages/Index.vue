<template>
  <q-page-container class="bg-bgblue">
    <q-page class="flex flex-center" style="z-index: 6">
      <div
        class="absolute-bottom-left bg-camping"
        :style="
          $q.screen.lt.sm && portraitMode
            ? 'height: 50vh; width: 50vh; margin-left: 0vw; margin-bottom: 7vh'
            : 'height: 50vw; width: 50vw; margin-left: 0vw; margin-bottom: 0vh'
        "
      ></div>

      <div
        class="absolute-top-left"
        style="margin-left: 30vw; top: -50px"
        v-if="$q.screen.gt.sm"
      >
        <q-img src="../assets/hero-bulb.svg" height="7vw" width="7vw" />
      </div>
      <div
        class="absolute-top-right"
        style="margin-right: 2vw; margin-top: 2vh"
      >
        <q-img
          src="../assets/hero-kite.svg"
          style="z-index: 2"
          contain
          :height="$q.screen.lt.sm && portraitMode ? '25vh' : '25vw'"
          :width="$q.screen.lt.sm && portraitMode ? '25vh' : '25vw'"
        />
      </div>
      <div
        class="absolute-bottom-right"
        style="margin-right: 5vw; margin-bottom: 5vh"
        v-if="$q.screen.gt.sm"
      >
        <q-img
          src="../assets/hero-plantHedgehog.svg"
          style="z-index: 2"
          contain
          height="7vw"
          width="12vw"
        />
      </div>

      <div
        class="row justify-center q-pb-xl q-mb-xl container-max-width"
        :style="
          $q.screen.lt.sm ? 'padding-bottom: 150px; z-index: 1;' : 'z-index: 1'
        "
      >
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 q-pa-md">
          <q-carousel
            v-model="slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            animated
            infinite
            :height="$q.screen.lt.sm ? '144px' : '210px'"
            :autoplay="2500"
            style="background-color: rgba(0, 0, 0, 0)"
          >
            <q-carousel-slide
              :name="title.title"
              class="q-pa-none"
              v-for="title in titles"
              :key="title.title"
            >
              <div
                :style="
                  $q.screen.lt.sm ? 'margin-left: 30px' : 'margin-left: 100px'
                "
              >
                <q-img :src="title.img" cover height="100px" width="100px" />
              </div>
              <div
                :class="
                  $q.screen.lt.sm ? 'text-h4 text-sred' : 'text-h1 text-sred'
                "
              >
                {{ title.title }}
              </div>
            </q-carousel-slide>
          </q-carousel>
          <div
            :class="$q.screen.lt.sm ? 'text-h4 text-standard' : 'text-h1 text-standard'"
          >
            <span class="text-standard">spellen en projecten</span> <br />voor jeugdbewegingen.
          </div>
        </div>
      </div>
      <curve
        :scrollInfo="scrollInfo"
        :colorUp="'#DDE7DC'"
        :colorDown="'#2E564B'"
      ></curve>
    </q-page>

    <q-page class="bg-bggreen flex flex-center text-center" style="z-index: 5">
      <div class="absolute-top-left" style="margin-left: 2vw">
        <q-img
          src="../assets/s1-balloon.svg"
          style="z-index: 2"
          contain
          :height="$q.screen.lt.sm && portraitMode ? '25vh' : '25vw'"
          :width="$q.screen.lt.sm && portraitMode ? '25vh' : '25vw'"
        />
      </div>
      <div class="absolute-top-right" style="margin-right: 2vw">
        <q-img
          src="../assets/s1-explosion.svg"
          style="z-index: 2"
          contain
          :height="$q.screen.lt.sm && portraitMode ? '18vh' : '18vw'"
          :width="$q.screen.lt.sm && portraitMode ? '22vh' : '22vw'"
        />
      </div>
      <div class="absolute-bottom-left">
        <q-img
          src="../assets/s1-camping.svg"
          style="z-index: 2"
          contain
          :height="$q.screen.lt.sm && portraitMode ? '25vh' : '25vw'"
          :width="$q.screen.lt.sm && portraitMode ? '25vh' : '25vw'"
        />
      </div>
      <div
        class="absolute-bottom-right"
        style="margin-bottom: 4vh; margin-right: 5vw"
      >
        <q-img
          src="../assets/s1-sailboat.svg"
          style="z-index: 2"
          contain
          :height="$q.screen.lt.sm && portraitMode ? '17vh' : '17vw'"
          :width="$q.screen.lt.sm && portraitMode ? '17vh' : '17vw'"
        />
      </div>
      <div
        class="
          row
          justify-center
          font-josefin
          text-weight-bold
          container-max-width
        "
      >
        <div
          :class="{
            'col-12': true,
            'col-sm-8': true,
            'text-h4': $q.screen.lt.sm,
            'q-px-sm': $q.screen.lt.sm,
            'text-h1': $q.screen.gt.sm,
          }"
        >
          <span class="text-bgblue">Ontdek de fun in </span>
          <span class="text-white"
            >maken, onderzoeken
            <span class="text-bgblue">en</span> ontwerpen</span
          >
          <div class="">
            <q-btn
              color="white"
              rounded
              :size="$q.screen.lt.sm ? 'md' : 'lg'"
              outline
              class="q-px-lg q-ma-lg q-mt-xl"
              >Lees meer over onze missie</q-btn
            >
            <div class="flex flex-center">
              <q-item clickable v-ripple dense>
                <q-item-section class="text-body1">
                  <div class="row items-end">
                    <div class="" style="width: 30px">
                      <q-img
                        src="../assets/s1-team.svg"
                        contain
                        height="24px"
                        width="24px"
                      />
                    </div>
                    <div class="text-sgreen text-weight-bold nav-item">
                      ONS TEAM
                    </div>
                  </div></q-item-section
                >
              </q-item>
            </div>
          </div>
        </div>
      </div>
      <curve
        :scrollInfo="scrollInfo"
        :colorUp="'#2E564B'"
        :colorDown="'#ECEEBF'"
      ></curve>
    </q-page>

    <q-page class="bg-bgyellow q-pt-xl" style="z-index: 4">
      <div class="row q-pa-md q-pr-xl q-mt-xl container-max-width">
        <div class="col-12 col-sm-7">
          <div class="text-subtitle1 text-sred">AANBOD</div>
          <div
            :class="
              $q.screen.lt.sm
                ? 'text-h4 text-bggreen q-pb-lg'
                : 'text-h2 text-bggreen q-pb-xl'
            "
          >
            Groei als spelbegeleider en als wereldverbeteraar
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
            Ons aanbod vormt een traject om leiders en leden van jeugdbewegingen
            te laten groeien als spelbegeleider en als wereldverbeteraars, door
            spelenderwijs nieuwe STEM-vaardigheden aan te leren.
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
            Ons aanbod laat jongeren ontdekken hoe ze zelf technologie &amp;
            wetenschap kunnen toepassen om het leven van mens en natuur te
            verbeteren.
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
            We zijn naarstig aan het werk om jeugdbewegingen unieke activiteiten
            &amp; projecten aan te bieden.
          </div>

          <div
            style="max-width: 500px"
            :class="$q.screen.lt.sm ? 'q-mt-md' : 'q-mt-xl'"
            v-if="false"
          >
            <q-input
              rounded
              borderless
              v-model="email"
              clear-icon="send"
              bottom-slots
              placeholder="Laat je mailadres achter"
              :input-style="{
                borderRadius: '40px 0px 0px 40px',
                backgroundColor: 'white',
                paddingLeft: '15px',
              }"
              class="text-body1"
            >
              <template v-slot:append>
                <div
                  class="bg-sgreen flex flex-center"
                  style="
                    border-radius: 0px 40px 40px 0px;
                    height: 100%;
                    padding-left: 15px;
                    padding-right: 15px;
                  "
                >
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
        <div class="col-12 col-sm-5 q-pa-md q-mt-lg">
          <q-img src="../assets/offer-hero.svg" contain></q-img>
        </div>
      </div>
      <curve
        :scrollInfo="scrollInfo"
        :colorUp="'#ECEEBF'"
        :colorDown="'#DDE7DC'"
      ></curve>
    </q-page>

    <q-page style="z-index: 3">
      <div class="row q-pa-md q-py-xl container-max-width">
        <div class="col-12 col-sm-4">
          <div class="row items-end">
            <div class="col-2">
              <div class="text-subtitle1 text-syellow">SPARK</div>
            </div>
            <div class="col-10">
              <div style="margin-left: 40px; bottom: -40px">
                <q-img
                  src="../assets/deco-spellendatabank.svg"
                  height="40px"
                  width="40px"
                />
              </div>
            </div>
          </div>
          <div class="text-h4 text-sred">Spellendatabank</div>
          <div class="text-h5 q-pt-md font-josefin">
            Een collectie spellen met een twist, om dit weekend extra veel
            plezier te beleven.
          </div>
        </div>
        <div class="col-12 col-sm-6 offset-sm-2">
          <div style="position: relative; width: 100%">
            <q-img contain src="../assets/spelkisten.png" />

            <img
              :style="
                $q.screen.lt.sm
                  ? 'vertical-align: top; position: absolute;left: -15px; top: -25px; height:250px;'
                  : 'vertical-align: top; position: absolute;left: -75px; top: -55px;'
              "
              src="../assets/offer-spellendatabank.svg"
            />

            <div
              class="
                flex flex-center
                absolute-bottom-right
                offerButtonBackground
                offerButtonSpeldatabank
              "
              :style="
                $q.screen.lt.sm
                  ? 'right: 5px; bottom: 5px'
                  : 'right: 55px; bottom: 55px'
              "
            >
              <q-btn
                class="q-pa-xl text-standard"
                size="lg"
                no-caps
                flat
                stack
                icon-right="east"
                ><span class="text-underline font-sister text-standard"
                  >Spellen</span
                ></q-btn
              >
            </div>
          </div>
        </div>
      </div>

      <div
        :class="{
          row: true,
          'q-pa-md': true,
          'q-py-xl': $q.screen.gt.sm,
          'q-py-md': $q.screen.lt.sm,
          'container-max-width': true,
          reverse: $q.screen.gt.sm,
        }"
      >
        <div class="col-12 col-sm-4 offset-sm-2">
          <div class="row items-end">
            <div class="col-2">
              <div class="text-subtitle1 text-syellow">SPARK</div>
            </div>
            <div class="col-10">
              <div style="margin-left: 40px; bottom: -40px">
                <q-img
                  src="../assets/deco-spelkisten.svg"
                  height="40px"
                  width="40px"
                />
              </div>
            </div>
          </div>
          <div class="text-h4 text-sgreen">Spelkisten</div>
          <div class="text-h5 q-pt-md font-josefin">
            Next-level spelactiviteiten om een ongelofelijk boeiende en unieke
            namiddag te beleven.
          </div>
        </div>
        <div class="col-12 col-sm-6">
          <div style="position: relative; width: 100%">
            <q-img contain src="../assets/spelkisten.png" />

            <q-img
              :style="
                $q.screen.lt.sm
                  ? 'vertical-align: top; position: absolute; top: 25px; left: -10px; width:250px;'
                  : 'vertical-align: top; position: absolute; top: -75px; left: -50px;'
              "
              src="../assets/offer-spelkisten.svg"
            />

            <div
              class="
                flex flex-center
                absolute-bottom-right
                offerButtonBackground
                offerButtonSpelkisten
              "
              :style="
                $q.screen.lt.sm
                  ? 'right: 5px; bottom: 5px'
                  : 'right: 55px; bottom: 55px'
              "
            >
              <q-btn
                class="q-pa-xl text-standard"
                size="lg"
                no-caps
                flat
                stack
                icon-right="east"
                ><span class="text-underline font-sister text-standard"
                  >Spelkisten</span
                ></q-btn
              >
            </div>
          </div>
        </div>
      </div>

      <div
        :class="{
          row: true,
          'q-pa-md': true,
          'q-py-xl': $q.screen.gt.sm,
          'q-py-md': $q.screen.lt.sm,
          'container-max-width': true,
        }"
      >
        <div class="col-12 col-sm-4">
          <div class="row items-end">
            <div class="col-2">
              <div class="text-subtitle1 text-syellow">SPARK</div>
            </div>
            <div class="col-10">
              <div style="margin-left: 40px; bottom: -40px">
                <q-img
                  src="../assets/deco-projecten.svg"
                  height="40px"
                  width="40px"
                />
              </div>
            </div>
          </div>
          <div class="text-h4 text-sblue">Projecten</div>
          <div class="text-h5 q-pt-md font-josefin">
            Help jouw groep en de wereld vooruit door samen deze projecten uit
            te voeren.
          </div>
        </div>
        <div class="col-12 col-sm-6 offset-sm-2">
          <div style="position: relative; width: 100%">
            <q-img contain src="../assets/projecten.png" />

            <q-img
              :style="
                $q.screen.lt.sm
                  ? 'vertical-align: top; position: absolute; top: -15px; left: -10px; width:250px;'
                  : 'vertical-align: top; position: absolute; top: -100px; left: -100px;'
              "
              src="../assets/offer-projecten.svg"
            />

            <div
              class="
                flex flex-center
                absolute-bottom-right
                offerButtonBackground
                offerButtonProjecten
              "
              :style="
                $q.screen.lt.sm
                  ? 'right: 5px; bottom: 5px'
                  : 'right: 55px; bottom: 55px'
              "
            >
              <q-btn
                class="q-pa-xl text-standard"
                size="lg"
                no-caps
                flat
                stack
                icon-right="east"
                ><span class="text-underline font-sister text-standard"
                  >Projecten</span
                ></q-btn
              >
            </div>
          </div>
        </div>
      </div>

      <div
        :class="{
          row: true,
          'q-pa-md': true,
          'q-pb-xl': $q.screen.lt.sm,
          'q-py-xl': $q.screen.gt.sm,
          'q-py-md': $q.screen.lt.sm,
          'container-max-width': true,
          reverse: $q.screen.gt.sm,
        }"
      >
        <div class="col-12 col-sm-4 offset-sm-2">
          <div class="row items-end">
            <div class="col-2">
              <div class="text-subtitle1 text-syellow">SPARK</div>
            </div>
            <div class="col-10">
              <div style="margin-left: 40px; bottom: -40px">
                <q-img
                  src="../assets/deco-matchmaker.svg"
                  height="40px"
                  width="40px"
                />
              </div>
            </div>
          </div>
          <div class="text-h4 text-sorange">Matchmaker</div>
          <div class="text-h5 q-pt-md font-josefin">
            Heb je een creatief idee, maar geen idee hoe je eraan begint? Wij
            helpen jouw groep vooruit met kennis en materialen.
          </div>
        </div>
        <div class="col-12 col-sm-6">
          <div style="position: relative; width: 100%">
            <q-img contain src="../assets/matchmaker.png" />

            <q-img
              :style="
                $q.screen.lt.sm
                  ? 'vertical-align: top; position: absolute; top: -5px; left: -25px; width:250px;'
                  : 'vertical-align: top; position: absolute; top: -250px; left: -100px;'
              "
              src="../assets/offer-matchmaker.svg"
            />

            <div
              class="
                flex flex-center
                absolute-bottom-right
                offerButtonBackground
                offerButtonMatchmaker
              "
              :style="
                $q.screen.lt.sm
                  ? 'right: 5px; bottom: 5px'
                  : 'right: 55px; bottom: 55px'
              "
            >
              <q-btn
                class="q-pa-xl text-standard"
                size="lg"
                no-caps
                flat
                stack
                icon-right="east"
                ><span class="text-underline font-sister text-standard"
                  >Match!</span
                ></q-btn
              >
            </div>
          </div>
        </div>
      </div>

      <curve
        :scrollInfo="scrollInfo"
        :colorUp="'#DDE7DC'"
        :colorDown="'#ECEEBF'"
      ></curve>
    </q-page>

    <q-page class="bg-bgyellow" style="z-index: 2">
      <div class="q-pa-md row q-py-xl container-max-width">
        <div class="col-12 col-sm-4">
          <div class="text-subtitle1 text-sred">ONZE COMMUNITY</div>
          <div :class="$q.screen.lt.sm ? 'text-h4' : 'text-h2'">
            <span class="text-bggreen">Samen de vonk voor</span>
            <span class="text-sred"> STEM in jeugdbewegingen</span
            ><span class="text-bggreen"> aanwakkeren!</span>
          </div>
          <div>
            <div class="q-pa-xl">
              <q-img src="../assets/community-camping.svg" />
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-5 offset-sm-3">
          <div style="position: relative">
            <q-img
              style="background-size: 180px"
              src="../assets/spelkisten.png"
            />

            <div
              class="absolute-top-left flex flex-center testButtonBackground"
              :style="
                $q.screen.lt.sm
                  ? 'left: 10px; top: 10px'
                  : 'left: 40px; top: 40px'
              "
            >
              <q-btn
                class="q-pa-xl text-standard"
                size="lg"
                no-caps
                flat
                stack
                icon-right="west"
              ></q-btn>
            </div>
            <div
              class="
                absolute-bottom-right
                flex flex-center
                testButtonBackground
              "
              :style="
                $q.screen.lt.sm
                  ? 'right: 10px; bottom: 10px'
                  : 'right: 40px; bottom: 40px'
              "
            >
              <q-btn
                class="q-pa-xl text-standard"
                size="lg"
                no-caps
                flat
                stack
                icon-right="east"
              ></q-btn>
            </div>
          </div>

          <div class="row justify-center">
            <div class="col-8">
              <div
                :class="{
                  testquote: true,
                  'font-sister': true,
                  'text-h5': $q.screen.gt.sm,
                  'text-body1': $q.screen.lt.sm,
                  'text-bggreen': true,
                }"
              >
                De experimenten die niet mogen op school doen we nu in de
                jeugdbeweging.
              </div>
              <div
                :class="
                  $q.screen.lt.sm
                    ? 'text-body1 q-pt-md text-underline text-sred'
                    : 'text-h5 q-pt-md text-underline text-sred'
                "
              >
                Laurens, KSA Dadizele
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 q-py-xl q-mt-xl">
          <div class="row justify-center">
            <div class="col-12 col-sm-8">
              <div
                :class="{
                  'text-h4': $q.screen.gt.sm,
                  'text-h5': $q.screen.lt.sm,
                  'font-sister': true,
                  'text-bggreen': true,
                  'text-center': true,
                }"
              >
                Sprankel jij van nieuwsgierigheid naar onze activiteiten? Volg
                ons op sociale media!
              </div>
              <div class="row justify-center q-gutter-lg q-py-lg">
                <q-img
                  v-for="social in socialMedia"
                  :key="social.channel"
                  :src="social.src"
                  :height="$q.screen.lt.sm ? '30px' : '40px'"
                  :width="$q.screen.lt.sm ? '30px' : '40px'"
                  @click="openUrl(social.link)"
                />
              </div>
              <div
                :class="{
                  'text-h5': $q.screen.gt.sm,
                  'text-body1': $q.screen.lt.sm,
                  'text-bggreen': true,
                  'text-center': true,
                  'q-pb-md': true,
                }"
                v-if="false"
              >
                Geef je op voor onze Spark Nieuwsbrief (4 per jaar).
              </div>
              <div
                v-if="false"
                class="justify-center"
                :style="
                  $q.screen.lt.sm
                    ? 'width: 300px; margin: auto'
                    : 'width: 500px; margin: auto'
                "
              >
                <q-input
                  rounded
                  borderless
                  v-model="email"
                  clear-icon="send"
                  placeholder="Laat je mailadres achter"
                  :input-style="{
                    borderRadius: '40px 0px 0px 40px',
                    backgroundColor: 'white',
                    paddingLeft: '15px',
                  }"
                  class="text-subtitle1"
                >
                  <template v-slot:append>
                    <div
                      class="bg-sred flex flex-center"
                      style="
                        border-radius: 0px 40px 40px 0px;
                        height: 100%;
                        padding-left: 15px;
                        padding-right: 15px;
                      "
                    >
                      <div>
                        <p
                          class="
                            q-ma-none
                            font-sister
                            text-white text-subtitle1 text-underline
                          "
                        >
                          aanmelden
                        </p>
                      </div>
                    </div>
                  </template>
                </q-input>
              </div>
            </div>
          </div>
        </div>
      </div>
      <curve
        :scrollInfo="scrollInfo"
        :colorUp="'#ECEEBF'"
        :colorDown="'#2E564B'"
      ></curve>
    </q-page>
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
    <q-scroll-observer @scroll="onScroll" />
  </q-page-container>
</template>

<script>
import curve from "../components/CurvedBackground.vue";

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
      titles: [
        {
          title: "Verwonderlijke",
          img: require("../assets/title-verwonderlijke.svg"),
        },
        {
          title: "Spectaculaire",
          img: require("../assets/title-spectaculaire.svg"),
        },
        {
          title: "Hilarische",
          img: require("../assets/title-hillarische.svg"),
        },
        {
          title: "Spannende",
          img: require("../assets/title-spannende.svg"),
        },
        {
          title: "Gewaagde",
          img: require("../assets/title-gewaagde.svg"),
        },
        {
          title: "Unieke",
          img: require("../assets/title-unieke.svg"),
        },
      ],
      socialMedia: [
        {
          channel: "Instagram",
          link: "https://www.instagram.com/spark_laat_de_vonk_overslaan/",
          src: require("../assets/sm-insta-red.svg"),
        },
      ],
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
      this.window.open(url, "_blank");
    },
  },
};
</script>
<style lang="css" scoped>
.bg-ctatraject {
  background-image: url("../assets/illu/traject.svg");
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
  background-image: url("../assets/hero-camping.svg");
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
  background-image: url("../assets/button-spellendatabank.svg");
}

.offerButtonSpelkisten {
  background-image: url("../assets/button-spelkisten.svg");
}

.offerButtonProjecten {
  background-image: url("../assets/button-projecten.svg");
}

.offerButtonMatchmaker {
  background-image: url("../assets/button-matchmaker.svg");
}

.testButtonBackground {
  background-image: url("../assets/button-spellendatabank.svg");
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
  background-image: url("../assets/footer-team.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
}

.text-standard {
  color: #1c1e1c;
}

</style>
