import { reactive } from "vue";
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon ,ClipboardDocumentListIcon} from "@heroicons/vue/24/outline";

///////////do your configs here///////

///lan constants

///menu config
let menu_config = [
  { name: "Welcome", icon: HomeIcon, href: "/" },
  {
    name: "Examples",
    icon: FolderIcon,
    current: false,
    children: [
      { name: "Form",icon:ClipboardDocumentListIcon, 
        children:[
          { name: "style1", href: "/example/form/style1" },
          { name: "Calendar", href: "#" },
          { name: "Settings", href: "#" },
        ]
      }
    ],
  }
];

///////////////////////////
let m_counter = 0;
function assign_menu_id(mconfig, p_mid) {
  mconfig.forEach(function (item, index) {
    m_counter++;
    item.mid = m_counter;
    item.p_mid = p_mid;
    if (item.children) {
      assign_menu_id(item.children, item.mid);
    }
  });
}

assign_menu_id(menu_config, m_counter);
let r_menu_config = reactive(menu_config);

////////////////////////////

function find_item(mid, menu_config) {
  let result = null;

  menu_config.forEach(function (item, index) {
    if (item.mid == mid) {
      result = item;
    }
    if (item.children) {
      let hit_item = find_item(mid, item.children);
      if (hit_item != null) {
        result = hit_item;
      }
    }
  });

  return result;
}

function clear_all_active(menu_config){
    menu_config.forEach(function (item, index) {
        item.current=false;
        if (item.children) {
            clear_all_active(item.children)
        }
      });
}

function set_active(mid) {
  let item = find_item(mid, r_menu_config);
  if (item != null) {
    clear_all_active(r_menu_config);
    item.current = true;
  }
}

export { r_menu_config, set_active };
