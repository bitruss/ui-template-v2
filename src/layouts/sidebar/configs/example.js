
import { CalendarIcon, CommandLineIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon ,ClipboardDocumentListIcon} from "@heroicons/vue/24/outline";

let example = [
  {
    name: "Examples",
    icon: FolderIcon,
    open: true,
    children: [
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
      {
        name: "Select",
        icon: CommandLineIcon,
        open: false,
        children: [
          { name: "simple", href: "/example/select/simple/simple_status_select" },
        ],
      },
      {
        name: "Input",
        icon: CommandLineIcon,
        open: false,
        children: [
          { name: "simple", href: "/example/input/simple" },
        ],
      },
    ],
  },
];

export default example;
