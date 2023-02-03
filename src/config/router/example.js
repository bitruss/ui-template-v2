export default [
  {
    path: "/example/adminv",
    component: () => import("../../pages/example/admin/AdminVisablePage.vue"),
  },
  //
  {
    path: "/example/tippy",
    component: () => import("../../pages/example/tippy/TippyPage.vue"),
  },
  //form
  {
    path: "/example/form/style1",
    component: () => import("../../pages/example/form/Style1Page.vue"),
  },
  {
    path: "/example/form/style2",
    component: () => import("../../pages/example/form/Style2Page.vue"),
  },
  {
    path: "/example/form/style3",
    component: () => import("../../pages/example/form/Style3Page.vue"),
  },
  {
    path: "/example/form/style4",
    component: () => import("../../pages/example/form/Style4Page.vue"),
  },
  //select
  {
    path: "/example/select/single_select",
    component: () => import("../../pages/example/select/SingleSelectPage.vue"),
  },
  //multi-select
  {
    path: "/example/select/multi_select",
    component: () => import("../../pages/example/select/MultiSelectPage.vue"),
  },
  //input
  {
    path: "/example/input/simple",
    component: () => import("../../pages/example/input/SimplePage.vue"),
  },
  {
    path: "/example/input/validator",
    component: () => import("../../pages/example/input/ValidatorPage.vue"),
  },
  {
    path: "/example/input/checkbox",
    component: () => import("../../pages/example/input/CheckBoxPage.vue"),
  },
  {
    path: "/example/input/radio",
    component: () => import("../../pages/example/input/RadioPage.vue"),
  },
  {
    path: "/example/input/datetime",
    component: () => import("../../pages/example/input/DateTimePage.vue"),
  },
  //button
  {
    path: "/example/button/main",
    component: () => import("../../pages/example/button/MainButtonPage.vue"),
  },
  //modal
  {
    path: "/example/modal/simple",
    component: () => import("../../pages/example/modal/ModalSimplePage.vue"),
  },
  //toast
  {
    path: "/example/toast/simple",
    component: () => import("../../pages/example/toast/SimplePage.vue"),
  },
  //card
  {
    path: "/example/card/simple",
    component: () => import("../../pages/example/card/SimpleCardPage.vue"),
  },
  {
    path: "/example/card/gridstyle1",
    component: () => import("../../pages/example/card/GridCardStyle1Page.vue"),
  },
  {
    path: "/example/card/gridstyle2",
    component: () => import("../../pages/example/card/GridCardStyle2Page.vue"),
  },
  {
    path: "/example/card/gridstyle3",
    component: () => import("../../pages/example/card/GridCardStyle3Page.vue"),
  },
  //icon
  {
    path: "/example/icon/outline",
    component: () => import("../../pages/example/icon/OutlineIconPage.vue"),
  },
  {
    path: "/example/icon/solid",
    component: () => import("../../pages/example/icon/SolidIconPage.vue"),
  },
  {
    path: "/example/icon/color",
    component: () => import("../../pages/example/icon/ColorIconPage.vue"),
  },
  //tab
  {
    path: "/example/tab/style1",
    component: () => import("../../pages/example/tab/Style1Page.vue"),
  },
  {
    path: "/example/tab/modal",
    component: () => import("../../pages/example/tab/ModalTabPage.vue"),
  },
  //step
  {
    path: "/example/step/steptab",
    component: () => import("../../pages/example/step/StepTabPage.vue"),
  },  
  //table
  {
    path: "/example/table/simple",
    component: () => import("../../pages/example/table/SimpleTablePage.vue"),
  },
  {
    path: "/example/table/remote",
    component: () => import("../../pages/example/table/RemoteTablePage.vue"),
  },
  //chart
  {
    path: "/example/chart/bar",
    component: () => import("../../pages/example/chart/BarChartPage.vue"),
  },
  {
    path: "/example/chart/line",
    component: () => import("../../pages/example/chart/LineChartPage.vue"),
  },
  //
  {
    path: "/example/progress/progress",
    component: () => import("../../pages/example/progress/ProgressPage.vue"),
  },

];
