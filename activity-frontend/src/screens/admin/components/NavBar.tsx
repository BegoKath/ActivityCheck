import { ReactElement, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import BookIcon from "@mui/icons-material/Book";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import GroupsIcon from '@mui/icons-material/Groups';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

interface itemList {
  label: string;
  icon: ReactElement<any, any>;
  key: number;
}
export const NavBar = () => {
  const [window, setWindow] = useState(false);

  let openClose = () => {
    if (window === false) {
      setWindow(true);
    } else {
      setWindow(false);
    }
  };
  const Item = ({ label, icon, key }: itemList) => {
    return (
      <div className="navbar__li-box" key={key}>
        {icon}
        <li
          className="navbar__li"
          style={{ display: window === false ? "inline-block" : "none" }}
        >
          {label}
        </li>
      </div>
    );
  };
  return (
    <nav
      className="navbar-menu"
      style={{ width: window === false ? 250 : 60, background: "#036A3F" }}
    >
      <div className="burger" onClick={() => openClose()}>
        <MenuIcon
          sx={{
            fontSize: 40,
            marginTop: "5px",
            cursor: "pointer",
            color: "whitesmoke",
          }}
        />
      </div>
      <ul className="navbar__list">
        <Item label={"Horarios"} icon={<QueryBuilderIcon style={iconLi} />} key={0} />
        <Item
          label={"Asignaturas"}
          icon={<BookIcon style={iconLi} />}
          key={1}
        />
        <Item
          label={"Docentes"}
          icon={<GroupsIcon style={iconLi} />}
          key={2}
        />
        <Item
          label={"Aulas"}
          icon={<MeetingRoomIcon style={iconLi} />}
          key={2}
        />
      </ul>
    </nav>
  );
};
const iconLi: React.CSSProperties = { fontSize: 20, color: "whitesmoke",marginLeft:"20px" };
