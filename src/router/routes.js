export default [
  {
    path: "/",
    name: "Main",
    component: () => import("@/views/main/main.view.vue"),
    meta: {
      friendlyName: "Главная"
    }
  },
  {
    path: "/theory",
    name: "Theory",
    component: () => import("@/views/theory/theory.view.vue"),
    meta: {
      friendlyName: "Теория"
    },
    children: [
      {
        path: "sochetania/theory",
        name: "Sochetania-theory",
        component: () =>
          import(
            "@/content/1.1-sochetania/theory/1.1-sochetania.theory.content.vue"
          ),
        meta: {
          friendlyTitle: "1. Элементы комбинаторики",
          friendlyName: "1.1 Сочетания",
          articleTitle: "1.1 Сочетания - Теория"
        }
      },
      {
        path: "sochetania/calc",
        name: "Sochetania-calc",
        component: () =>
          import(
            "@/content/1.1-sochetania/calc/1.1-sochetania.calc.content.vue"
          ),
        meta: {
          articleTitle: "1.1 Сочетания - Калькулятор"
        }
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/about/about.view.vue"),
    meta: {
      friendlyName: "О нас"
    }
  }
];
