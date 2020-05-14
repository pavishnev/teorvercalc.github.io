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
    components: {
      default: () => import("@/views/theory/theory.view.vue"),
      sidebar: () =>
        import("@/components/tvc-sidebar/tvc-sidebar.component.vue")
    },
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
      },
//////////////////////////////////1.2-perestanovki
      {
        path: "perestanovki/theory",
        name: "Perestanovki-theory",
        component: () =>
          import(
            "@/content/1.2-perestanovki/theory/1.2-perestanovki.theory.content.vue"
          ),
        meta: {
          //friendlyTitle: "1. Элемепппппппнты комбинаторики", //
          friendlyName: "1.2 Перестановки",
          articleTitle: "1.2 Перестановки - Теория"
        }
      },
      {
        path: "perestanovki/calc",
        name: "Perestanovki-calc",
        component: () =>
          import(
            "@/content/1.2-perestanovki/calc/1.2-perestanovki.calc.content.vue"
          ),
        meta: {
          articleTitle: "1.2 Перестановки - Калькулятор"
        }
      },
      //////////////////////////////////1.3-razmechenia
      {
        path: "razmechenia/theory",
        name: "Razmechenia-theory",
        component: () =>
          import(
            "@/content/1.3-razmechenia/theory/1.3-razmechenia.theory.content.vue"
          ),
        meta: {
          //friendlyTitle: "1. Элемепппппппнты комбинаторики", //
          friendlyName: "1.3 Размещения",
          articleTitle: "1.3 Размещения - Теория"
        }
      },
      {
        path: "razmechenia/calc",
        name: "Razmechenia-calc",
        component: () =>
          import(
            "@/content/1.3-razmechenia/calc/1.3-razmechenia.calc.content.vue"
          ),
        meta: {
          articleTitle: "1.3 Размещения - Калькулятор"
        }
      },
      //////////////////////////////////2.1-hypergeom
      {
        path: "hypergeom/theory",
        name: "Hypergeom-theory",
        component: () =>
          import(
            "@/content/2.1-hypergeom/theory/2.1-hypergeom.theory.content.vue"
          ),
        meta: {
          friendlyTitle: "2. Элементы теории вероятности", //
          friendlyName: "2.1 Гипергеометрическое распределение",
          articleTitle: "2.1 Гипергеометрическое распределение - Теория"
        }
      },
      {
        path: "hypergeom/calc",
        name: "Hypergeom-calc",
        component: () =>
          import(
            "@/content/2.1-hypergeom/calc/2.1-hypergeom.calc.content.vue"
            ),
        meta: {
          articleTitle: "2.1 Гипергеометрическое распределение - Калькулятор"
        }
      },
      //////////////////////////////////2.2-bernulli 
      {
        path: "bernulli/theory",
        name: "Bernulli-theory",
        component: () =>
          import(
            "@/content/2.2-bernulli/theory/2.2-bernulli.theory.content.vue"
          ),
        meta: {
         // friendlyTitle: "2. Элементы теории вероятности", //
          friendlyName: "2.2 Схема Бернулли",
          articleTitle: "2.2 Схема Бернулли - Теория"
        }
      },
      {
        path: "bernulli/calc",
        name: "Bernulli-calc",
        component: () =>
          import(
            "@/content/2.2-bernulli/calc/2.2-bernulli.calc.content.vue"
            ),
        meta: {
          articleTitle: "2.2 Схема Бернулли - Калькулятор"
        }
      },
       //////////////////////////////////3.1-laplas_border
      {
        path: "laplas_border/theory",
        name: "Laplas_border-theory",
        component: () =>
          import(
            "@/content/3.1-laplas_border/theory/3.1-laplas_border.theory.content.vue"
          ),
        meta: {
          friendlyTitle: "3.1 Граничные теоремы", //
          friendlyName: "3.1 Граничная теорема Лапласа",
          articleTitle: "3.1 Граничная теорема Лапласа - Теория"
        }
      },
      {
        path: "laplas_border/calc",
        name: "Laplas_border-calc",
        component: () =>
          import(
            "@/content/3.1-laplas_border/calc/3.1-laplas_border.calc.content.vue"
            ),
        meta: {
          articleTitle: "3.1 Граничная теорема Лапласа - Калькулятор"
        }
      },
      ////////////////////////////////// 3.2-puasson
      {
        path: "puasson/theory",
        name: "Puasson-theory",
        component: () =>
          import(
            "@/content/3.2-puasson/theory/3.2-puasson.theory.content.vue"
          ),
        meta: {
          //friendlyTitle: "3.2 Граничные теоремы", //
          friendlyName: "3.2 Теорема Пуассона",
          articleTitle: "3.2 Теорема Пуассона - Теория"
        }
      },
      {
        path: "puasson/calc",
        name: "Puasson-calc",
        component: () =>
          import(
            "@/content/3.2-puasson/calc/3.2-puasson.calc.content.vue"
            ),
        meta: {
          articleTitle: "3.2 Теорема Пуассона - Калькулятор"
        }
      },
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
