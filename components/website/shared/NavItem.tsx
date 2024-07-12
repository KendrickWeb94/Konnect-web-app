import React from "react";
import { Navlink } from "../Data/NavbarData";

const NavItems: React.FC<{ links: Navlink[] }> = ({ links }) => {
  return (
    <div>
      
      <ul className=" flex md:items-center gap-7 text-sm ds:flex-col bg-zinc-950 rounded-md p-4 md:flex-row">
        {links.map((link) => (
          <li
            key={link.id}
            className=" font-medium hover:text-slate-600  rounded-md  smooth "
          >
            <a href={link.url}>{link.linktag}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavItems;
