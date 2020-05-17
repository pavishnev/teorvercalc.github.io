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
    redirect: { name: "Sochetania-theory" },
    components: {
      default: () => import("@/views/theory/theory.view.vue"),
      sidebar: () =>
        import("@/components/tvc-sidebar/tvc-sidebar.component.vue")
    },
    meta: {
      friendlyName: "Теория"
    },
    children: [
      //////////////////////////////////1.1-perestanovki
      {
        path: "perestanovki/theory",
        name: "Perestanovki-theory",
        component: () =>
          import(
            "@/content/1.1-perestanovki/theory/1.1-perestanovki.theory.content.vue"
          ),
        meta: {
          friendlyTitle: "1. Элементы комбинаторики", //
          friendlyName: "1.1 Перестановки",
          articleTitle: "1.1 Перестановки - Теория"
        }
      },
      {
        path: "perestanovki/calc",
        name: "Perestanovki-calc",
        component: () =>
          import(
            "@/content/1.1-perestanovki/calc/1.1-perestanovki.calc.content.vue"
          ),
        meta: {
          articleTitle: "1.1 Перестановки - Калькулятор"
        }
      },
      //////////////////////////////////1.2-perestanovki-dup
      {
        path: "perestanovki-dup/theory",
        name: "Perestanovki-dup-theory",
        component: () =>
          import(
            "@/content/1.2-perestanovki-dup/theory/1.2-perestanovki-dup.theory.content.vue"
          ),
        meta: {
        //  friendlyTitle: "1. Элементы комбинаторики", //
          friendlyName: "1.2 Перестановки с повторениями",
          articleTitle: "1.2 Перестановки с повторениями - Теория"
        }
      },
      {
        path: "perestanovki-dup/calc",
        name: "Perestanovki-dup-calc",
        component: () =>
          import(
            "@/content/1.2-perestanovki-dup/calc/1.2-perestanovki-dup.calc.content.vue"
          ),
        meta: {
          articleTitle: "1.2 Перестановки с повторениями - Калькулятор"
        }
      },
      //////////////////////////////////1.3-sochetania
      {
        path: "sochetania/theory",
        name: "Sochetania-theory",
        component: () =>
          import(
            "@/content/1.3-sochetania/theory/1.3-sochetania.theory.content.vue"
          ),
        meta: {
        //friendlyTitle: "1. Элементы комбинаторики",
          friendlyName: "1.3 Сочетания",
          articleTitle: "1.3 Сочетания - Теория"
        }
      },
      {
        path: "sochetania/calc",
        name: "Sochetania-calc",
        component: () =>
          import(
            "@/content/1.3-sochetania/calc/1.3-sochetania.calc.content.vue"
          ),
        meta: {
          articleTitle: "1.3 Сочетания - Калькулятор"
        }
      },
      //////////////////////////////////1.4-sochetania-dup
      {
        path: "sochetania-dup/theory",
        name: "Sochetania-dup-theory",
        component: () =>
          import(
            "@/content/1.4-sochetania-dup/theory/1.4-sochetania-dup.theory.content.vue"
          ),
        meta: {
        //friendlyTitle: "1. Элементы комбинаторики",
          friendlyName: "1.4 Сочетания с повторениями",
          articleTitle: "1.4 Сочетания с повторениями - Теория"
        }
      },
      {
        path: "sochetania-dup/calc",
        name: "Sochetania-dup-calc",
        component: () =>
          import(
            "@/content/1.4-sochetania-dup/calc/1.4-sochetania-dup.calc.content.vue"
          ),
        meta: {
          articleTitle: "1.4 Сочетания с повторениями - Калькулятор"
        }
      },
      //////////////////////////////////1.5-razmechenia
      {
        path: "razmechenia/theory",
        name: "Razmechenia-theory",
        component: () =>
          import(
            "@/content/1.5-razmechenia/theory/1.5-razmechenia.theory.content.vue"
          ),
        meta: {
          //friendlyTitle: "1. Элемепппппппнты комбинаторики", //
          friendlyName: "1.5 Размещения",
          articleTitle: "1.5 Размещения - Теория"
        }
      },
      {
        path: "razmechenia/calc",
        name: "Razmechenia-calc",
        component: () =>
          import(
            "@/content/1.5-razmechenia/calc/1.5-razmechenia.calc.content.vue"
          ),
        meta: {
          articleTitle: "1.5 Размещения - Калькулятор"
        }
      },
        //////////////////////////////////1.6-razmechenia-dup
      {
        path: "razmechenia-dup/theory",
        name: "Razmechenia-dup-theory",
        component: () =>
          import(
            "@/content/1.6-razmechenia-dup/theory/1.6-razmechenia-dup.theory.content.vue"
          ),
        meta: {
          //friendlyTitle: "1. Элемепппппппнты комбинаторики", //
          friendlyName: "1.6 Размещения с повторениями",
          articleTitle: "1.6 Размещения с повторениями - Теория"
        }
      },
      {
        path: "razmechenia-dup/calc",
        name: "Razmechenia-dup-calc",
        component: () =>
          import(
            "@/content/1.6-razmechenia-dup/calc/1.6-razmechenia-dup.calc.content.vue"
          ),
        meta: {
          articleTitle: "1.6 Размещения с повторениями - Калькулятор"
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
          import("@/content/2.1-hypergeom/calc/2.1-hypergeom.calc.content.vue"),
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
          import("@/content/2.2-bernulli/calc/2.2-bernulli.calc.content.vue"),
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
      //////////////////////////////////3.2-laplas_integral
      {
        path: "laplas_integral/theory",
        name: "Laplas_integral-theory",
        component: () =>
          import(
            "@/content/3.2-laplas_integral/theory/3.2-laplas_integral.theory.content.vue"
          ),
        meta: {
          //friendlyTitle: "3.1 Граничные теоремы", //
          friendlyName: "3.2 Интегральная теорема Лапласа",
          articleTitle: "3.2 Интегральная теорема Лапласа - Теория"
        }
      },
      {
        path: "laplas_integral/calc",
        name: "Laplas_integral-calc",
        component: () =>
          import(
            "@/content/3.2-laplas_integral/calc/3.2-laplas_integral.calc.content.vue"
          ),
        meta: {
          articleTitle: "3.2 Интегральная теорема Лапласа - Калькулятор"
        }
      },
      ////////////////////////////////// 3.3-puasson
      {
        path: "puasson/theory",
        name: "Puasson-theory",
        component: () =>
          import("@/content/3.3-puasson/theory/3.3-puasson.theory.content.vue"),
        meta: {
          //friendlyTitle: "3.3 Граничные теоремы", //
          friendlyName: "3.3 Теорема Пуассона",
          articleTitle: "3.3 Теорема Пуассона - Теория"
        }
      },
      {
        path: "puasson/calc",
        name: "Puasson-calc",
        component: () =>
          import("@/content/3.3-puasson/calc/3.3-puasson.calc.content.vue"),
        meta: {
          articleTitle: "3.3 Теорема Пуассона - Калькулятор"
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
