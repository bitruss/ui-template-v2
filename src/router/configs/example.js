var example_router = [

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
  //input
  {
    path: "/example/input/simple",
    name: "example_input_simple",
    component: () => import("../../pages/example/input/SimplePage.vue"),
  },


];

export default example_router;
