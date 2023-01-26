import { AdjustmentsHorizontalIcon, ChevronDoubleRightIcon, PlayIcon, WindowIcon, ChatBubbleLeftIcon, PhotoIcon, InformationCircleIcon, StopIcon, ViewfinderCircleIcon, CommandLineIcon, FolderIcon, ClipboardDocumentListIcon } from "@heroicons/vue/24/outline";

let example = [
  {
    name: "examples",
    icon: FolderIcon,
    open: true,
    children: [
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
          {
            name: "simple",
            children: [
              { name: "simple_plain", href: "/example/select/simple/simple_plain_select" },
              { name: "simple_secondary", href: "/example/select/simple/simple_secondary_select" },
              { name: "simple_status", href: "/example/select/simple/simple_status_select" },
            ],
          },
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
        icon: AdjustmentsHorizontalIcon,
        open: false,
        children: [{ name: "style1", href: "/example/tab/style1" }],
      },
      {
        name: "Step",
        icon: ChevronDoubleRightIcon,
        open: false,
        children: [{ name: "step tab", href: "/example/step/steptab" }],
      },
    ],
  },
];

export default example;