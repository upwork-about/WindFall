import { AppHeader, AppFooter } from "@/components";
import style from "./index.module.scss";
import { ModalContextProvider } from "@/components/modal/useModalContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <ModalContextProvider>
      <div className={style["app-wrap"]}>
        <AppHeader />
        <main className={`app-page`}>{children}</main>
        <AppFooter />
      </div>
    </ModalContextProvider>
  );
};
export default MainLayout;
