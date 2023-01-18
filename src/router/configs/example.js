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
  //card
  {
    path: "/example/card/simple",
    name: "example_card_simple",
    component: () => import("../../pages/example/card/SimpleCardPage.vue"),
  },
  //icon
  {
    path: "/example/icon/simple",
    name: "example_icon_simple",
    component: () => import("../../pages/example/icon/SimpleIconPage.vue"),
  },
];

export default example_router;
