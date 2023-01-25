var example_router = [
  {
    path: "/example/tippy",
    name: "example_tippy",
    component: () => import("../../pages/example/tippy/TippyPage.vue"),
  },

  //form
  {
    path: "/example/form/style1",
    name: "example_form_style1",
    component: () => import("../../pages/example/form/Style1Page.vue"),
  },
  {
    path: "/example/form/style2",
    name: "example_form_style2",
    component: () => import("../../pages/example/form/Style2Page.vue"),
  },
  {
    path: "/example/form/style3",
    name: "example_form_style3",
    component: () => import("../../pages/example/form/Style3Page.vue"),
  },
  {
    path: "/example/form/style4",
    name: "example_form_style4",
    component: () => import("../../pages/example/form/Style4Page.vue"),
  },

  //select
  {
    path: "/example/select/simple/simple_plain_select",
    name: "example_select_simple_simple_plain_select",
    component: () => import("../../pages/example/select/simple/SimplePlainSelectPage.vue"),
  },
  {
    path: "/example/select/simple/simple_status_select",
    name: "example_select_simple_simple_status_select",
    component: () => import("../../pages/example/select/simple/SimpleStatusSelectPage.vue"),
  },
  //select
  {
    path: "/example/select/simple/simple_secondary_select",
    name: "example_select_simple_simple_secondary_select",
    component: () => import("../../pages/example/select/simple/SimpleSecondarySelectPage.vue"),
  },
  //input
  {
    path: "/example/input/simple",
    name: "example_input_simple",
    component: () => import("../../pages/example/input/SimplePage.vue"),
  },
  {
    path: "/example/input/validator",
    name: "example_input_validator",
    component: () => import("../../pages/example/input/ValidatorPage.vue"),
  },
  {
    path: "/example/input/checkbox",
    name: "example_input_checkbox",
    component: () => import("../../pages/example/input/CheckBoxPage.vue"),
  },
  {
    path: "/example/input/radio",
    name: "example_input_radio",
    component: () => import("../../pages/example/input/RadioPage.vue"),
  },
  //button
  {
    path: "/example/button/main",
    name: "example_input_main",
    component: () => import("../../pages/example/button/MainButtonPage.vue"),
  },
  //modal
  {
    path: "/example/modal/simple",
    name: "example_modal_simple",
    component: () => import("../../pages/example/modal/ModalSimplePage.vue"),
  },
  //toast
  {
    path: "/example/toast/simple",
    name: "example_toast_simple",
    component: () => import("../../pages/example/toast/SimplePage.vue"),
  },
  //card
  {
    path: "/example/card/simple",
    name: "example_card_simple",
    component: () => import("../../pages/example/card/SimpleCardPage.vue"),
  },
  {
    path: "/example/card/gridstyle1",
    name: "example_card_gridstyle1",
    component: () => import("../../pages/example/card/GridCardStyle1Page.vue"),
  },
  {
    path: "/example/card/gridstyle2",
    name: "example_card_gridstyle2",
    component: () => import("../../pages/example/card/GridCardStyle2Page.vue"),
  },
  {
    path: "/example/card/gridstyle3",
    name: "example_card_gridstyle3",
    component: () => import("../../pages/example/card/GridCardStyle3Page.vue"),
  },
  //icon
  {
    path: "/example/icon/outline",
    name: "example_icon_outline",
    component: () => import("../../pages/example/icon/OutlineIconPage.vue"),
  },
  {
    path: "/example/icon/solid",
    name: "example_icon_solid",
    component: () => import("../../pages/example/icon/SolidIconPage.vue"),
  },
  {
    path: "/example/icon/color",
    name: "example_icon_color",
    component: () => import("../../pages/example/icon/ColorIconPage.vue"),
  },
  //tab
  {
    path: "/example/tab/style1",
    name: "example_tab_style1",
    component: () => import("../../pages/example/tab/Style1Page.vue"),
  },
  //step
  {
    path: "/example/step/steptab",
    name: "example_step_steptab",
    component: () => import("../../pages/example/step/StepTabPage.vue"),
  },
];

export default example_router;
