export const profileMenus = () => {
  return [
    {
      key: "dashboard",
      label: <span className={"ml-8"}>Dashboard</span>,
      icon: <img className={"dropdown-menu-icon"} src="/images/preference-icon.png" alt={"logout"} />,
    },
    {
      key: "log-out",
      label: <span className={"ml-8"}>Log out</span>,
      icon: <img className={"dropdown-menu-icon"} src="/images/logout-ic.png" alt={"logout"} />,
    },
  ];
};

export const adminNavigations: any[] = [];

export const getAdminNavigations = (currentRole: number) => {
  return adminNavigations.filter((navigation) => navigation.roles.includes(currentRole));
};
