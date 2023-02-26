import { ReactElement } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import BookIcon from "@mui/icons-material/Book";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import GroupsIcon from "@mui/icons-material/Groups";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { useApp } from "../../../hooks/useApp";

interface itemList {
  label: string;
  icon: ReactElement<any, any>;
  keys: number;
}
export const NavBar = () => {
  const {
    state: { navBarAdmin },
    showNavBarAdmin,
    closeNavBarAdmin,
    showSubjectBody,
    closeSubjectBody,
    showTeacherBody,
    closeTeacherBody,
    showClassroomBody,
    closeClassroomBody
  } = useApp();

  let openClose = () => {
    if (navBarAdmin === false) {
      showNavBarAdmin();
    } else {
      closeNavBarAdmin();
    }
  };
  const onChangeBody = (label: string) => {
    if (label === "Asignaturas") {
      closeTeacherBody();
      closeClassroomBody();
      showSubjectBody();
    } else if (label === "Docentes") {
      closeSubjectBody();
      closeClassroomBody();
      showTeacherBody();
    } else if(label==="Aulas"){
      closeSubjectBody();
      closeTeacherBody();
      showClassroomBody();
    }else {
      closeSubjectBody();
      closeTeacherBody();
    }
  };
  const Item = ({ label, icon, keys }: itemList) => {
    return (
      <div className="navbar__li-box" onClick={() => onChangeBody(label)}>
        {icon}
        <li
          key={keys}
          className="navbar__li"
          style={{ display: navBarAdmin === false ? "inline-block" : "none" }}
        >
          {label}
        </li>
      </div>
    );
  };
  return (
    <nav
      className="navbar-menu"
      style={{
        width: navBarAdmin === false ? "15%" : "3%",
        background: "#036A3F",
      }}
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
        <Item
          label={"Horarios"}
          icon={<QueryBuilderIcon style={iconLi} />}
          keys={0}
        />
        <Item
          label={"Asignaturas"}
          icon={<BookIcon style={iconLi} />}
          keys={1}
        />
        <Item label={"Docentes"} icon={<GroupsIcon style={iconLi} />} keys={2} />
        <Item
          label={"Aulas"}
          icon={<MeetingRoomIcon style={iconLi} />}
          keys={3}
        />
      </ul>
    </nav>
  );
};
const iconLi: React.CSSProperties = {
  fontSize: 20,
  color: "whitesmoke",
  marginLeft: "20px",
};
