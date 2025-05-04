"use client";

import handIcon from "@/public/arm.svg";
import exitIcon from "@/public/exitIcon.svg";
import { useMain } from "@/src/components/Main/modal/useMain";
import useUserStore from "@/src/shared/store/userStore";
import classNames from "classnames";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import { useData } from "../modal/useData";
import styles from "./MainLayout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { navbarItems, logOut } = useData();
  useMain();
  const userEmail = useUserStore((state) => state.data.email);
  const username = useUserStore((state) => state.data.username);
  const pathname = usePathname();
  const navigate = useRouter();

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <div className={styles.emailBlock}>
          <p className={styles.email}>{userEmail ?? userEmail}</p>
          <p className={styles.username}>{username}</p>
        </div>
        <div className={styles.navbar}>
          <p className={styles.title}>Меню</p>
          <div className={styles.navbarItems}>
            {navbarItems.map((navbarItem) => (
              <button
                className={classNames(
                  styles.navbarItem,
                  pathname === navbarItem.route && styles.active
                )}
                key={navbarItem.title}
                onClick={() => {
                  if (navbarItem.is_route && navbarItem.route) {
                    navigate.push(navbarItem.route);
                  } else if (navbarItem.onClick) {
                    navbarItem.onClick();
                  }
                }}
              >
                {React.createElement(navbarItem.icon, {
                  fill:
                    pathname === navbarItem.route
                      ? "rgba(255, 0, 0, 1)"
                      : "rgba(255, 255, 255, 1)",
                })}
                <p className={styles.title}>{navbarItem.title}</p>
              </button>
            ))}
          </div>
          <div className={styles.info}>
            <div className={styles.infoBlock}>
              <div className={classNames(styles.red, styles.circle)}></div>
              <p className={styles.text}>Ошибка</p>
            </div>
            <div className={styles.infoBlock}>
              <div className={classNames(styles.orange, styles.circle)}></div>
              <p className={styles.text}>Загрузка</p>
            </div>
            <div className={styles.infoBlock}>
              <div className={classNames(styles.green, styles.circle)}></div>
              <p className={styles.text}>Готово</p>
            </div>
            <div className={styles.infoBlock}>
              <div className={classNames(styles.purple, styles.circle)}></div>
              <p className={styles.text}>В работе</p>
            </div>
            <div className={styles.infoBlock}>
              <div className={classNames(styles.pink, styles.circle)}></div>
              <p className={styles.text}>В очереди</p>
            </div>
          </div>
        </div>
      </aside>

      <main className={styles.content}>
        <div className={styles.innerContent}>
          <div className={styles.header}>
            <div className={styles.welcomeText}>
              Здравствуйте!
              <Image src={handIcon} alt="hand icon" width={25} height={25} />
            </div>
            <button onClick={() => logOut.mutate()}>
              <Image src={exitIcon} alt="exit icon" width={34} height={34} />
            </button>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
};
