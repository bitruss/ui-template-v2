import { InformationCircleIcon, ViewfinderCircleIcon, CommandLineIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon, ClipboardDocumentListIcon } from "@heroicons/vue/24/outline";

let example = [
  {
    name: "Examples",
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
        open: true,
        children: [
          { name: "style1", href: "/example/form/style1" },
          { name: "style2", href: "/example/form/style2" },
          { name: "style3", href: "/example/form/style3" },
          { name: "style4", href: "/example/form/style4" },
        ],
      },
    ],
  },
];

export default example;
