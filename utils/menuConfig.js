const menuConfig = {
  superadmin: [
    { name: "Dashboard", path: "/superadmin/dashboard", icon: "dashboard" },
    { name: "Manage Admins", path: "/superadmin/admins", icon: "users" },
    { name: "Vendors", path: "/superadmin/vendors", icon: "store" },
    { name: "Settings", path: "/superadmin/settings", icon: "settings" },
  ],

  admin: [
    { name: "Dashboard", path: "/admin/dashboard", icon: "dashboard" },
    { name: "Vendors", path: "/admin/vendors", icon: "store" },
    { name: "Projects", path: "/admin/projects", icon: "folder" },
    { name: "Reports", path: "/admin/reports", icon: "report" },
  ],

  vendor: [
    { name: "Dashboard", path: "/vendor/dashboard", icon: "dashboard" },
    { name: "Catalog", path: "/vendor/catalog", icon: "list" },
    { name: "Orders", path: "/vendor/orders", icon: "shopping-cart" },
    { name: "Profile", path: "/vendor/profile", icon: "user" },
  ],
};

module.exports = menuConfig;
