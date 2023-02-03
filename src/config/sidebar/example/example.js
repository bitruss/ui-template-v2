import { ViewColumnsIcon,TableCellsIcon, ChartBarIcon, FlagIcon, AdjustmentsHorizontalIcon, ChevronDoubleRightIcon, PlayIcon, WindowIcon, ChatBubbleLeftIcon, PhotoIcon, InformationCircleIcon, StopIcon, ViewfinderCircleIcon, CommandLineIcon, FolderIcon, ClipboardDocumentListIcon } from "@heroicons/vue/24/outline";

let example = [
  {
    name: "examples",
    icon: FolderIcon,
    open: true,
    children: [
      {
        name: "Admin Visable",
        icon: FlagIcon,
        open: false,
        href: "/example/adminv",
        auth: function (user) {
          return user.roles.includes("admin");
        },
      },
      {
        name: "Tippy",
        icon: InformationCircleIcon,
        open: false,
        href: "/example/tippy",
      },
      {
        name: "Select",
        icon: ViewfinderCircleIcon,
        open: false,
        children: [
          { name: "single", href: "/example/select/single_select" },
          { name: "multi", href: "/example/select/multi_select" },
        ],
      },
      {
        name: "Input",
        icon: CommandLineIcon,
        open: false,
        children: [
          { name: "simple", href: "/example/input/simple" },
          { name: "validator", href: "/example/input/validator" },
          { name: "checkbox", href: "/example/input/checkbox" },
          { name: "radio", href: "/example/input/radio" },
          { name: "date_time", href: "/example/input/datetime" },
        ],
      },
      {
        name: "Form",
        icon: ClipboardDocumentListIcon,
        open: false,
        children: [
          { name: "style1", href: "/example/form/style1" },
          { name: "style2", href: "/example/form/style2" },
          { name: "style3", href: "/example/form/style3" },
          { name: "style4", href: "/example/form/style4" },
        ],
      },
      {
        name: "Buttons",
        icon: PlayIcon,
        open: false,
        children: [{ name: "main_style", href: "/example/button/main" }],
      },
      {
        name: "Modals",
        icon: WindowIcon,
        open: false,
        children: [{ name: "simple", href: "/example/modal/simple" }],
      },
      {
        name: "Toast",
        icon: ChatBubbleLeftIcon,
        open: false,
        children: [{ name: "simple", href: "/example/toast/simple" }],
      },
      {
        name: "Card",
        icon: StopIcon,
        open: false,
        children: [
          { name: "simple", href: "/example/card/simple" },
          { name: "grid card style1", href: "/example/card/gridstyle1" },
          { name: "grid card style2", href: "/example/card/gridstyle2" },
          { name: "grid card style3", href: "/example/card/gridstyle3" },
        ],
      },
      {
        name: "Icon",
        icon: PhotoIcon,
        open: false,
        children: [
          { name: "outline", href: "/example/icon/outline" },
          { name: "solid", href: "/example/icon/solid" },
          { name: "color", href: "/example/icon/color" },
        ],
      },
      {
        name: "Tab",
        icon: ViewColumnsIcon,
        open: false,
        children: [
          { name: "style1", href: "/example/tab/style1" },
          { name: "modal", href: "/example/tab/modal" },
        ],
      },
      {
        name: "Step",
        icon: ChevronDoubleRightIcon,
        open: false,
        children: [{ name: "step tab", href: "/example/step/steptab" }],
      },
      {
        name: "Table",
        icon: TableCellsIcon,
        open: false,
        children: [
          { name: "simple local table", href: "/example/table/simple" },
          { name: "simple remote table", href: "/example/table/remote" },
        ],
      },
      {
        name: "Chart",
        icon: ChartBarIcon,
        open: false,
        children: [
          { name: "bar", href: "/example/chart/bar" },
          { name: "line", href: "/example/chart/line" },
        ],
      },
      {
        name: "Progress",
        icon: AdjustmentsHorizontalIcon,
        open: false,
        children: [{ name: "progress", href: "/example/progress/progress" }],
      },
    ],
  },
];

export default example;
