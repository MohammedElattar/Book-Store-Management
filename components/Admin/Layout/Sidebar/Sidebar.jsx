import Image from "next/image";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { BiCategoryAlt } from "react-icons/bi";
import { IoPower } from "react-icons/io5";
import ActiveLink from "../../../ActiveLink";
import s from "./Sidebar.module.scss";
import { apiHttp } from "../../../../utils/utils";
import { useRouter } from "next/router";
import { AwesomeButton } from "react-awesome-button";
function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const logout = async () => {
    const res = await apiHttp.post("/logout");
    console.log(`Logout Response =>`, res);
    router.push("/admin/login");
  };

  return (
    <aside className={`${s.sidebar} ${!isOpen ? s.sidebarClosed : ""}`}>
      <div>
        <header className={s.header}>
          <Image
            src="/images/asfar-logo.png"
            alt="asfar"
            width={128}
            height={43}
            className={s.logo}
          />
          {isOpen ? (
            <button
              className={s.icon}
              type="button"
              onClick={() => setIsOpen(false)}
            >
              <AiFillEyeInvisible />
            </button>
          ) : (
            <button
              className={s.icon}
              type="button"
              onClick={() => setIsOpen(true)}
            >
              <AiFillEye />
            </button>
          )}
        </header>
        <ActiveLink href="/admin/dashboard" activeClassName={s.activeLink}>
          <MdSpaceDashboard />
          <span>لوحة التحكم</span>
        </ActiveLink>
        <ActiveLink href="/admin/products" activeClassName={s.activeLink}>
          <SiBookstack />
          <span>المنتجات</span>
        </ActiveLink>
        <ActiveLink href="/admin/users" activeClassName={s.activeLink}>
          <FaUser />
          <span>المستخدمين</span>
        </ActiveLink>
        <ActiveLink href="/admin/categories" activeClassName={s.activeLink}>
          <BiCategoryAlt />
          <span>الاقسام</span>
        </ActiveLink>
      </div>
      <div className={s.btnContainer}>
        <AwesomeButton
          onPress={logout}
          type="primary"
          size="small"
          className={s.logout}
        >
          <span className={s.text}>تسجيل خروج</span>
          <IoPower />
        </AwesomeButton>
      </div>
    </aside>
  );
}
export default Sidebar;
