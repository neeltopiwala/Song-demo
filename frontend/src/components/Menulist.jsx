import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import { Ellipsis } from "lucide-react";

function Menulist() {
  return (
    <Menu
      direction={"bottom"}
      align={"start"}
      menuClassName={`box-border z-50 text-sm bg-white py-3 rounded-md shadow-lg select-none focus:outline-none min-w-[9rem]`}
      menuButton={
        <MenuButton className="absolute top-[78%] right-[9%] -translate-x-1 -translate-y-1">
          <Ellipsis
            size={25}
            color="#fff"
            strokeWidth={3}
            className="invisible group-hover:visible"
          />
        </MenuButton>
      }
    >
      <MenuItem className="bg-white px-4 py-2 text-xs font-medium text-left hover:bg-[#b5f9ee]">
        Add to library
      </MenuItem>

      <MenuItem className="bg-white px-4 py-2 text-xs font-medium text-left hover:bg-[#b5f9ee]">
        Play album
      </MenuItem>

      <MenuItem className="bg-white px-4 py-2 text-xs font-medium text-left hover:bg-[#b5f9ee]">
        Add to queue
      </MenuItem>

      <MenuItem className="bg-white px-4 py-2 text-xs font-medium text-left hover:bg-[#b5f9ee]">
        Add to playlist
      </MenuItem>
    </Menu>
  );
}

export default Menulist;
