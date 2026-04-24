const products = [
  {
    "category": "Теплицы",
    "name": "Теплица «Компакт 1.5»",
    "price": 11580,
    "specs": [
      "Ширина: 1.5 м",
      "Шаг дуг: 65 см или 1 м",
      "Профиль: оцинкованная труба 20×20 мм"
    ],
    "badge": "Компактная",
    "id": 0,
    "type": "Компактные теплицы",
    "variants": [
      {
        "label": "2 м × ширина 1.5 м",
        "price": 11580
      },
      {
        "label": "4 м × ширина 1.5 м",
        "price": 16440
      },
      {
        "label": "6 м × ширина 1.5 м",
        "price": 21310
      }
    ]
  },
  {
    "category": "Теплицы",
    "name": "Теплица «Компакт 2»",
    "price": 12350,
    "specs": [
      "Ширина: 2 м",
      "Шаг дуг: 65 см или 1 м",
      "Профиль: оцинкованная труба 20×20 мм"
    ],
    "badge": "Популярно",
    "id": 1,
    "type": "Компактные теплицы",
    "variants": [
      {
        "label": "2 м × ширина 2 м",
        "price": 12350
      },
      {
        "label": "4 м × ширина 2 м",
        "price": 17540
      },
      {
        "label": "6 м × ширина 2 м",
        "price": 22720
      }
    ]
  },
  {
    "category": "Теплицы",
    "name": "Теплица «Оптима 2.1»",
    "price": 20280,
    "specs": [
      "Ширина: 2.1 м",
      "Шаг дуг: 65 см или 1 м",
      "Профиль: оцинкованная труба 20×20 мм"
    ],
    "badge": "Оптима",
    "id": 2,
    "type": "Компактные теплицы",
    "variants": [
      {
        "label": "2 м × ширина 2.1 м",
        "price": 20280
      },
      {
        "label": "4 м × ширина 2.1 м",
        "price": 28800
      },
      {
        "label": "6 м × ширина 2.1 м",
        "price": 37320
      }
    ]
  },
  {
    "category": "Теплицы",
    "name": "Теплица «Дачная дуга»",
    "price": 21040,
    "specs": [
      "Ширина: 2.5 м или 3 м",
      "Шаг дуг: 65 см или 1 м",
      "Профиль: оцинкованная труба 20×20 мм"
    ],
    "badge": "Для дачи",
    "id": 3,
    "type": "Компактные теплицы",
    "variants": [
      {
        "label": "2 м × ширина 2.5 м",
        "price": 21040
      },
      {
        "label": "4 м × ширина 2.5 м",
        "price": 29880
      },
      {
        "label": "6 м × ширина 2.5 м",
        "price": 38720
      },
      {
        "label": "2 м × ширина 3 м",
        "price": 22730
      },
      {
        "label": "4 м × ширина 3 м",
        "price": 32270
      },
      {
        "label": "6 м × ширина 3 м",
        "price": 41810
      }
    ]
  },
  {
    "category": "Теплицы",
    "name": "Теплица «Стрелка мини»",
    "price": 21660,
    "specs": [
      "Ширина: 2 м",
      "Шаг дуг: 65 см",
      "Профиль: оцинкованная труба 20×20 мм"
    ],
    "badge": "Стрелка",
    "id": 4,
    "type": "Стрелочные теплицы",
    "variants": [
      {
        "label": "2 м × ширина 2 м",
        "price": 21660
      },
      {
        "label": "4 м × ширина 2 м",
        "price": 30760
      },
      {
        "label": "6 м × ширина 2 м",
        "price": 39850
      }
    ]
  },
  {
    "category": "Теплицы",
    "name": "Теплица «Урожай»",
    "price": 21850,
    "specs": [
      "Ширина: 2.5 м или 3 м",
      "Шаг дуг: 1 м",
      "Профиль: оцинкованная труба 25×25 мм"
    ],
    "badge": "Урожай",
    "id": 5,
    "type": "Усиленные теплицы",
    "variants": [
      {
        "label": "2 м × ширина 2.5 м",
        "price": 21850
      },
      {
        "label": "4 м × ширина 2.5 м",
        "price": 31030
      },
      {
        "label": "6 м × ширина 2.5 м",
        "price": 40200
      },
      {
        "label": "2 м × ширина 3 м",
        "price": 23600
      },
      {
        "label": "4 м × ширина 3 м",
        "price": 33510
      },
      {
        "label": "6 м × ширина 3 м",
        "price": 43420
      }
    ]
  },
  {
    "category": "Теплицы",
    "name": "Теплица «Премиум»",
    "price": 23230,
    "specs": [
      "Ширина: 2.5 м или 3 м",
      "Шаг дуг: 65 см",
      "Профиль: оцинкованная труба 25×25 мм"
    ],
    "badge": "Популярно",
    "id": 6,
    "type": "Усиленные теплицы",
    "variants": [
      {
        "label": "2 м × ширина 2.5 м",
        "price": 23230
      },
      {
        "label": "4 м × ширина 2.5 м",
        "price": 32980
      },
      {
        "label": "6 м × ширина 2.5 м",
        "price": 42740
      },
      {
        "label": "2 м × ширина 3 м",
        "price": 25090
      },
      {
        "label": "4 м × ширина 3 м",
        "price": 35620
      },
      {
        "label": "6 м × ширина 3 м",
        "price": 46160
      }
    ]
  },
  {
    "category": "Теплицы",
    "name": "Теплица «Лидер» с краб-системой",
    "price": 23950,
    "specs": [
      "Ширина: 2.5 м или 3 м",
      "Шаг дуг: 65 см",
      "Профиль: 20×20 мм или 25×25 мм"
    ],
    "badge": "Краб-система",
    "id": 7,
    "type": "Усиленные теплицы",
    "variants": [
      {
        "label": "2 м × ширина 2.5 м",
        "price": 23950
      },
      {
        "label": "4 м × ширина 2.5 м",
        "price": 34010
      },
      {
        "label": "6 м × ширина 2.5 м",
        "price": 44070
      },
      {
        "label": "2 м × ширина 3 м",
        "price": 25870
      },
      {
        "label": "4 м × ширина 3 м",
        "price": 36730
      },
      {
        "label": "6 м × ширина 3 м",
        "price": 47590
      }
    ]
  },
  {
    "category": "Теплицы",
    "name": "Теплица «Северная» двойная дуга",
    "price": 25510,
    "specs": [
      "Ширина: 2.5 м или 3 м",
      "Шаг дуг: 65 см",
      "Профиль: 20×20 мм или 25×25 мм"
    ],
    "badge": "Двойные дуги",
    "id": 8,
    "type": "Усиленные теплицы",
    "variants": [
      {
        "label": "2 м × ширина 2.5 м",
        "price": 25510
      },
      {
        "label": "4 м × ширина 2.5 м",
        "price": 36220
      },
      {
        "label": "6 м × ширина 2.5 м",
        "price": 46930
      },
      {
        "label": "2 м × ширина 3 м",
        "price": 27550
      },
      {
        "label": "4 м × ширина 3 м",
        "price": 39120
      },
      {
        "label": "6 м × ширина 3 м",
        "price": 50690
      }
    ]
  },
  {
    "category": "Теплицы",
    "name": "Теплица «Стрелка»",
    "price": 25890,
    "specs": [
      "Ширина: 2.5 м или 3 м",
      "Шаг дуг: 65 см",
      "Профиль: оцинкованная труба 25×25 мм"
    ],
    "badge": "Популярно",
    "id": 9,
    "type": "Стрелочные теплицы",
    "variants": [
      {
        "label": "2 м × ширина 2.5 м",
        "price": 25890
      },
      {
        "label": "4 м × ширина 2.5 м",
        "price": 36760
      },
      {
        "label": "6 м × ширина 2.5 м",
        "price": 47630
      },
      {
        "label": "2 м × ширина 3 м",
        "price": 27960
      },
      {
        "label": "4 м × ширина 3 м",
        "price": 39700
      },
      {
        "label": "6 м × ширина 3 м",
        "price": 51440
      }
    ]
  },
  {
    "category": "Теплицы",
    "name": "Теплица «Люкс 40×20»",
    "price": 26880,
    "specs": [
      "Ширина: 3 м",
      "Шаг дуг: 65 см",
      "Профиль: оцинкованная труба 40×20 мм"
    ],
    "badge": "Люкс",
    "id": 10,
    "type": "Усиленные теплицы",
    "variants": [
      {
        "label": "2 м × ширина 3 м",
        "price": 26880
      },
      {
        "label": "4 м × ширина 3 м",
        "price": 38180
      },
      {
        "label": "6 м × ширина 3 м",
        "price": 49470
      }
    ]
  },
  {
    "category": "Теплицы",
    "name": "Теплица «Северная» двойная дуга + краб-система",
    "price": 29150,
    "specs": [
      "Ширина: 2.5 м или 3 м",
      "Шаг дуг: 65 см",
      "Профиль: 20×20 мм или 25×25 мм"
    ],
    "badge": "Усиленная",
    "id": 11,
    "type": "Усиленные теплицы",
    "variants": [
      {
        "label": "2 м × ширина 2.5 м",
        "price": 29150
      },
      {
        "label": "4 м × ширина 2.5 м",
        "price": 41390
      },
      {
        "label": "6 м × ширина 2.5 м",
        "price": 53630
      },
      {
        "label": "2 м × ширина 3 м",
        "price": 31480
      },
      {
        "label": "4 м × ширина 3 м",
        "price": 44700
      },
      {
        "label": "6 м × ширина 3 м",
        "price": 57920
      }
    ]
  },
  {
    "category": "Теплицы",
    "name": "Теплица «Домик» двускатная",
    "price": 33390,
    "specs": [
      "Ширина: 2.5 м или 3 м",
      "Шаг дуг: 65 см",
      "Профиль: оцинкованная труба 25×25 мм"
    ],
    "badge": "Двускатная",
    "id": 12,
    "type": "Двускатные теплицы",
    "variants": [
      {
        "label": "2 м × ширина 2.5 м",
        "price": 33390
      },
      {
        "label": "4 м × ширина 2.5 м",
        "price": 47420
      },
      {
        "label": "6 м × ширина 2.5 м",
        "price": 61440
      },
      {
        "label": "2 м × ширина 3 м",
        "price": 36060
      },
      {
        "label": "4 м × ширина 3 м",
        "price": 51210
      },
      {
        "label": "6 м × ширина 3 м",
        "price": 66360
      }
    ]
  },
  {
    "category": "Теплицы",
    "name": "Теплица «Стрелка Фермер»",
    "price": 41850,
    "specs": [
      "Ширина: 4 м",
      "Шаг дуг: 65 см",
      "Профиль: оцинкованная труба 25×25 мм"
    ],
    "badge": "Фермер",
    "id": 13,
    "type": "Стрелочные теплицы",
    "variants": [
      {
        "label": "4 м × ширина 4 м",
        "price": 41850
      },
      {
        "label": "6 м × ширина 4 м",
        "price": 56490
      },
      {
        "label": "8 м × ширина 4 м",
        "price": 70300
      }
    ]
  },
  {
    "category": "Теплицы",
    "name": "Теплица «Фермерская 4 м»",
    "price": 43040,
    "specs": [
      "Ширина: 4 м",
      "Шаг дуг: 65 см",
      "Профиль: оцинкованная труба 25×25 мм"
    ],
    "badge": "Фермер",
    "id": 14,
    "type": "Фермерские теплицы",
    "variants": [
      {
        "label": "4 м × ширина 4 м",
        "price": 43040
      },
      {
        "label": "6 м × ширина 4 м",
        "price": 58100
      },
      {
        "label": "8 м × ширина 4 м",
        "price": 72300
      }
    ]
  },
  {
    "category": "Теплицы",
    "name": "Теплица «Домик 40×20» с краб-системой",
    "price": 45080,
    "specs": [
      "Ширина: 3 м",
      "Шаг дуг: 65 см",
      "Профиль: оцинкованная труба 40×20 мм"
    ],
    "badge": "Краб-система",
    "id": 15,
    "type": "Двускатные теплицы",
    "variants": [
      {
        "label": "2 м × ширина 3 м",
        "price": 45080
      },
      {
        "label": "4 м × ширина 3 м",
        "price": 64010
      },
      {
        "label": "6 м × ширина 3 м",
        "price": 82940
      }
    ]
  },
  {
    "category": "Парники",
    "name": "Парник «Бабочка»",
    "price": 5820,
    "specs": [
      "Длина: 2 м, 4 м, 6 м",
      "Ширина: 1 м",
      "Высота: 0.8 м"
    ],
    "badge": "Парник",
    "id": 16,
    "type": "Парники для рассады",
    "variants": [
      {
        "label": "2 м",
        "price": 5820
      },
      {
        "label": "4 м",
        "price": 8270
      },
      {
        "label": "6 м",
        "price": 10600
      }
    ]
  },
  {
    "category": "Парники",
    "name": "Парник «Ранний урожай»",
    "price": 6220,
    "specs": [
      "Длина: 2 м, 4 м, 6 м",
      "Ширина: 1.03 м",
      "Высота: 1.02 м"
    ],
    "badge": "Парник",
    "id": 17,
    "type": "Парники для рассады",
    "variants": [
      {
        "label": "2 м",
        "price": 6220
      },
      {
        "label": "4 м",
        "price": 8840
      },
      {
        "label": "6 м",
        "price": 11320
      }
    ]
  },
  {
    "category": "Парники",
    "name": "Парник «Народный»",
    "price": 6510,
    "specs": [
      "Длина: 2 м, 4 м, 6 м",
      "Ширина: 1 м",
      "Высота: 0.8 м"
    ],
    "badge": "Парник",
    "id": 18,
    "type": "Парники для рассады",
    "variants": [
      {
        "label": "2 м",
        "price": 6510
      },
      {
        "label": "4 м",
        "price": 9240
      },
      {
        "label": "6 м",
        "price": 11840
      }
    ]
  },
  {
    "category": "Парники",
    "name": "Парник «Хлебница»",
    "price": 7362,
    "specs": [
      "Длина: 1.95 м",
      "Ширина: 1.15 м",
      "Высота: 1.05 м"
    ],
    "badge": "Хлебница",
    "id": 19,
    "type": "Парники-хлебницы",
    "variants": []
  },
  {
    "category": "Парники",
    "name": "Парник «Кабачок»",
    "price": 9120,
    "specs": [
      "Длина: 2 м, 4 м, 6 м",
      "Ширина: 1.45 м",
      "Высота: 1.1 м"
    ],
    "badge": "Парник",
    "id": 20,
    "type": "Парники для рассады",
    "variants": [
      {
        "label": "2 м",
        "price": 9120
      },
      {
        "label": "4 м",
        "price": 12950
      },
      {
        "label": "6 м",
        "price": 16600
      }
    ]
  },
  {
    "category": "Беседки",
    "name": "Беседка «Дачная классика»",
    "price": 14345,
    "specs": [
      "Вместимость: 4–6 чел.",
      "Размер: 2.5×2.1 м",
      "Высота: 2.06 м"
    ],
    "badge": "Дачная",
    "id": 21,
    "type": "Беседки 4–6 человек",
    "variants": []
  },
  {
    "category": "Беседки",
    "name": "Беседка «Летняя»",
    "price": 14345,
    "specs": [
      "Вместимость: 4–6 чел.",
      "Размер: 2.4×2.1 м",
      "Высота: 2.1 м"
    ],
    "badge": "Летняя",
    "id": 22,
    "type": "Беседки 4–6 человек",
    "variants": []
  },
  {
    "category": "Беседки",
    "name": "Беседка «Теремок»",
    "price": 15029,
    "specs": [
      "Вместимость: 4–6 чел.",
      "Размер: 2.42×2.1 м",
      "Высота: 2.15 м"
    ],
    "badge": "Теремок",
    "id": 23,
    "type": "Беседки 4–6 человек",
    "variants": []
  },
  {
    "category": "Беседки",
    "name": "Беседка «Комфорт» без стола и скамеек",
    "price": 15295,
    "specs": [
      "Вместимость: 4–6 чел.",
      "Размер: 2.1×2.34 м",
      "Высота: 2.14 м"
    ],
    "badge": "Без мебели",
    "id": 24,
    "type": "Беседки 4–6 человек",
    "variants": []
  },
  {
    "category": "Беседки",
    "name": "Беседка «Закрытая дачная»",
    "price": 16435,
    "specs": [
      "Вместимость: 4–6 чел.",
      "Размер: 2.5×2.1 м",
      "Высота: 2.06 м"
    ],
    "badge": "Закрытая",
    "id": 25,
    "type": "Закрытые беседки",
    "variants": []
  },
  {
    "category": "Беседки",
    "name": "Беседка «Садовая»",
    "price": 16815,
    "specs": [
      "Вместимость: 4–6 чел.",
      "Размер: 2.25×2.1 м",
      "Высота: 2.25 м"
    ],
    "badge": "Садовая",
    "id": 26,
    "type": "Беседки 4–6 человек",
    "variants": []
  },
  {
    "category": "Беседки",
    "name": "Беседка «Комфорт»",
    "price": 17195,
    "specs": [
      "Вместимость: 4–6 чел.",
      "Размер: 2.34×2.1 м",
      "Высота: 2.14 м"
    ],
    "badge": "Популярно",
    "id": 27,
    "type": "Беседки 4–6 человек",
    "variants": []
  },
  {
    "category": "Беседки",
    "name": "Беседка «Шестигранная»",
    "price": 21138,
    "specs": [
      "Вместимость: 4–6 чел.",
      "Размер: 2.02×2.02 м",
      "Высота: 2.7 м"
    ],
    "badge": "6 граней",
    "id": 28,
    "type": "Беседки 4–6 человек",
    "variants": []
  },
  {
    "category": "Беседки",
    "name": "Беседка «Усадьба»",
    "price": 24320,
    "specs": [
      "Вместимость: 8–12 чел.",
      "Размер: 2.5×3 м",
      "Высота: 2.52 м"
    ],
    "badge": "Большая",
    "id": 29,
    "type": "Большие беседки",
    "variants": []
  },
  {
    "category": "Беседки",
    "name": "Беседка «Комфорт плюс» с дополнительным местом",
    "price": 30970,
    "specs": [
      "Вместимость: 8–12 чел.",
      "Размер: 2.34×4.2 м",
      "Высота: 2.14 м"
    ],
    "badge": "Плюс",
    "id": 30,
    "type": "Большие беседки",
    "variants": []
  },
  {
    "category": "Беседки",
    "name": "Беседка «Комфорт плюс»",
    "price": 32870,
    "specs": [
      "Вместимость: 12–14 чел.",
      "Размер: 2.34×4.2 м",
      "Высота: 2.14 м"
    ],
    "badge": "12–14 чел.",
    "id": 31,
    "type": "Большие беседки",
    "variants": []
  },
  {
    "category": "Грядки и клумбы",
    "name": "Клумба шестигранная одноярусная оцинкованная",
    "price": 1241,
    "specs": [
      "Длина секций: 0.6 м",
      "Рёбра жёсткости: 8 шт.",
      "Высота борта: 20 см"
    ],
    "badge": "Оцинкованная",
    "id": 32,
    "type": "Клумбы",
    "variants": []
  },
  {
    "category": "Грядки и клумбы",
    "name": "Клумба шестигранная одноярусная цветная",
    "price": 1478,
    "specs": [
      "Длина секций: 0.6 м",
      "Рёбра жёсткости: 8 шт.",
      "Высота борта: 20 см"
    ],
    "badge": "Цветная",
    "id": 33,
    "type": "Клумбы",
    "variants": []
  },
  {
    "category": "Грядки и клумбы",
    "name": "Грядка оцинкованная 1×4 м",
    "price": 2518,
    "specs": [
      "Длина грядки: 4 м",
      "Ширина: 1 м",
      "Высота: 23 см"
    ],
    "badge": "Грядка",
    "id": 34,
    "type": "Грядки",
    "variants": []
  },
  {
    "category": "Грядки и клумбы",
    "name": "Клумба «Звезда» оцинкованная",
    "price": 1872,
    "specs": [
      "Длина секций: 0.6 м",
      "Рёбра жёсткости: 8 шт.",
      "Высота борта: 20 см"
    ],
    "badge": "Звезда",
    "id": 35,
    "type": "Клумбы",
    "variants": []
  },
  {
    "category": "Грядки и клумбы",
    "name": "Клумба «Звезда» цветная",
    "price": 2285,
    "specs": [
      "Длина секций: 0.6 м",
      "Рёбра жёсткости: 8 шт.",
      "Высота борта: 20 см"
    ],
    "badge": "Цветная",
    "id": 36,
    "type": "Клумбы",
    "variants": []
  },
  {
    "category": "Грядки и клумбы",
    "name": "Клумба шестигранная трёхъярусная оцинкованная",
    "price": 2972,
    "specs": [
      "Длина секций: 0.3–0.5–0.7 м",
      "Рёбра жёсткости: 8 шт.",
      "Высота борта: 20 см"
    ],
    "badge": "3 яруса",
    "id": 37,
    "type": "Клумбы",
    "variants": []
  },
  {
    "category": "Грядки и клумбы",
    "name": "Клумба квадратная четырёхъярусная цветная",
    "price": 4655,
    "specs": [
      "Длина секций: 1.5×1.5 / 1.1×1.1 / 0.7×0.7 / 0.3×0.3 м",
      "Рёбра жёсткости: 8 шт.",
      "Высота борта: 20 см"
    ],
    "badge": "4 яруса",
    "id": 38,
    "type": "Клумбы",
    "variants": []
  },
  {
    "category": "Грядки и клумбы",
    "name": "Клумба шестигранная трёхъярусная цветная",
    "price": 3471,
    "specs": [
      "Длина секций: 0.3–0.5–0.7 м",
      "Рёбра жёсткости: 8 шт.",
      "Высота борта: 20 см"
    ],
    "badge": "Цветная",
    "id": 39,
    "type": "Клумбы",
    "variants": []
  },
  {
    "category": "Грядки и клумбы",
    "name": "Клумба прямоугольная четырёхъярусная цветная",
    "price": 5510,
    "specs": [
      "Размер секций: 2×1.5 / 1.6×1.1 / 1.2×0.7 / 0.8×0.3 м",
      "Рёбра жёсткости: 8 шт.",
      "Высота борта: 20 см"
    ],
    "badge": "4 яруса",
    "id": 40,
    "type": "Клумбы",
    "variants": []
  },
  {
    "category": "Летние души",
    "name": "Летний душ «Дачный»",
    "price": 16815,
    "specs": [
      "Дверь кабинки: на петлях",
      "Профиль: оцинкованная труба 25×25 мм",
      "Соединения каркаса: на болтах и гайках"
    ],
    "badge": "Душ",
    "id": 41,
    "type": "Летние души",
    "variants": []
  },
  {
    "category": "Проветривание и полив",
    "name": "Боковая форточка 65 см",
    "price": 950,
    "specs": [
      "Размер: 65 см",
      "Профиль: оцинкованная труба 20×20 мм",
      "Для дополнительного проветривания теплицы"
    ],
    "badge": "Форточка",
    "id": 42,
    "type": "Проветривание и полив",
    "variants": []
  },
  {
    "category": "Проветривание и полив",
    "name": "Автоматический термопривод для форточки",
    "price": 2565,
    "specs": [
      "Автоматическое открывание форточки",
      "Для теплиц и парников",
      "Без подключения к электричеству"
    ],
    "badge": "Авто",
    "id": 43,
    "type": "Проветривание и полив",
    "variants": []
  },
  {
    "category": "Другие товары для дачи",
    "name": "Скамейка-перевёртыш для огорода",
    "price": 1852,
    "specs": [
      "Длина: 60 см",
      "Ширина: 27 см",
      "Высота: 42 см"
    ],
    "badge": "Скамейка",
    "id": 44,
    "type": "Скамейки и лавочки",
    "variants": []
  },
  {
    "category": "Другие товары для дачи",
    "name": "Лавочка «Отдых»",
    "price": 3325,
    "specs": [
      "Длина: 1.5 м",
      "Ширина: 68 см",
      "Высота: 65 см"
    ],
    "badge": "Лавочка",
    "id": 45,
    "type": "Скамейки и лавочки",
    "variants": []
  },
  {
    "category": "Другие товары для дачи",
    "name": "Скамейка со спинкой «Аллея»",
    "price": 4085,
    "specs": [
      "Длина: 2 м",
      "Ширина: 60 см",
      "Высота: 90 см"
    ],
    "badge": "Скамейка",
    "id": 46,
    "type": "Скамейки и лавочки",
    "variants": []
  },
  {
    "category": "Поликарбонат и комплектующие",
    "name": "Поликарбонат и комплектующие",
    "price": null,
    "specs": [
      "Подберём комплектующие под выбранную конструкцию",
      "Цена зависит от толщины, листа и комплектации",
      "Уточняйте наличие и расчёт в сообщениях"
    ],
    "badge": "По запросу",
    "id": 47,
    "type": "Комплектующие",
    "variants": []
  }
];

const tabsEl = document.getElementById('categoryTabs');
const typeTabsEl = document.getElementById('typeTabs');
const gridEl = document.getElementById('catalogGrid');
const searchInput = document.getElementById('searchInput');
const burger = document.querySelector('.burger');
const mobileMenu = document.getElementById('mobileMenu');
const featuredEl = document.getElementById('featuredCategories');
const catalogMeta = document.getElementById('catalogMeta');
let activeCategory = 'Теплицы';
let activeType = 'Все виды';
const categories = [...new Set(products.map(item => item.category)), 'Все'];
const categoryInfo = {
  'Теплицы': { icon: '🌿', text: 'От компактных моделей для небольшого участка до усиленных и фермерских теплиц.' },
  'Беседки': { icon: '🏡', text: 'Готовые беседки для отдыха на даче: компактные, закрытые и увеличенные.' },
  'Парники': { icon: '🍅', text: 'Удобные парники под рассаду, зелень и ранний урожай.' },
  'Грядки и клумбы': { icon: '🪴', text: 'Аккуратные грядки и клумбы, чтобы участок выглядел собранно.' },
  'Поликарбонат и комплектующие': { icon: '📦', text: 'Комплектующие, поликарбонат и расходники под выбранную конструкцию.' },
  'Летние души': { icon: '🚿', text: 'Летний душ для дачи: простая и практичная конструкция на сезон.' },
  'Проветривание и полив': { icon: '💧', text: 'Форточки и автоматика, чтобы в теплице было легче держать комфортный климат.' },
  'Другие товары для дачи': { icon: '🪑', text: 'Скамейки, лавочки и полезные товары для участка.' }
};
function formatPrice(value) { return value == null ? 'по запросу' : new Intl.NumberFormat('ru-RU').format(value) + ' ₽'; }
function getCategoryProducts(category) { return category === 'Все' ? products : products.filter(item => item.category === category); }
function minCategoryPrice(category) { return getCategoryProducts(category).filter(item => item.price != null).sort((a, b) => a.price - b.price)[0]?.price; }
function getAvailableTypes() { return ['Все виды', ...new Set(getCategoryProducts(activeCategory).map(item => item.type).filter(Boolean))]; }
function renderFeaturedCategories() {
  const featured = categories.filter(cat => cat !== 'Все').slice(0, 8);
  featuredEl.innerHTML = featured.map(category => {
    const info = categoryInfo[category] || { icon: '📌', text: 'Товары для дачи и загородного участка.' };
    const count = getCategoryProducts(category).length;
    const minPrice = minCategoryPrice(category);
    return `<article class="direction-item" data-category="${category}" role="button" tabindex="0" aria-label="Открыть категорию ${category}"><div class="direction-icon">${info.icon}</div><b>${category}</b><span>${info.text}</span><strong>${minPrice ? `от ${formatPrice(minPrice)}` : 'расчёт индивидуально'} • ${count} поз.</strong></article>`;
  }).join('');
}
function renderTabs() { tabsEl.innerHTML = categories.map(category => `<button class="tab ${category === activeCategory ? 'active' : ''}" type="button" data-category="${category}">${category}</button>`).join(''); }
function renderTypeTabs() {
  const types = getAvailableTypes();
  if (activeCategory === 'Все') { typeTabsEl.innerHTML = ''; return; }
  if (!types.includes(activeType)) activeType = 'Все виды';
  typeTabsEl.innerHTML = types.map(type => `<button class="type-tab ${type === activeType ? 'active' : ''}" type="button" data-type="${type}">${type}</button>`).join('');
}
function getFilteredProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const typeOrder = ['Компактные теплицы','Стрелочные теплицы','Усиленные теплицы','Двускатные теплицы','Фермерские теплицы','Парники для рассады','Парники-хлебницы','Беседки 4–6 человек','Закрытые беседки','Большие беседки','Грядки','Клумбы','Летние души','Проветривание и полив','Скамейки и лавочки','Комплектующие'];
  const filtered = products.filter(item => {
    const categoryMatch = activeCategory === 'Все' || item.category === activeCategory;
    const typeMatch = activeType === 'Все виды' || item.type === activeType;
    const variantsText = (item.variants || []).map(v => v.label).join(' ');
    const text = [item.name, item.category, item.type, ...item.specs, item.badge, variantsText].join(' ').toLowerCase();
    return categoryMatch && typeMatch && (!query || text.includes(query));
  });
  if (activeCategory !== 'Все') {
    filtered.sort((a, b) => typeOrder.indexOf(a.type) - typeOrder.indexOf(b.type));
  }
  return filtered;
}
function renderMeta(count) { const suffix = activeCategory === 'Все' ? 'во всём каталоге' : `в категории «${activeCategory}»`; catalogMeta.textContent = `Показано ${count} ${suffix}`; }

function findSpec(item, prefix) {
  const spec = (item.specs || []).find(text => text.toLowerCase().startsWith(prefix.toLowerCase()));
  return spec ? spec.replace(/^[^:]+:\s*/, '') : '';
}
function cleanProductName(item) {
  return item.name.replace(/^Теплица\s+/, '').replace(/^Беседка\s+/, '').replace(/^Парник\s+/, '').replace(/^Летний душ\s+/, '').trim();
}
function descriptionIntro(item) {
  const n = cleanProductName(item).replace(/[«»]/g, '');
  if (item.category === 'Теплицы') {
    if (item.type === 'Компактные теплицы') return `${n} — аккуратная теплица для небольшого участка, когда хочется нормальную рабочую зону под овощи и зелень, но без огромной конструкции на пологорода.`;
    if (item.type === 'Стрелочные теплицы') return `${n} — вариант для тех, кто хочет более уверенную форму крыши: стрелочная геометрия помогает снегу легче сходить с поверхности и делает теплицу визуально выше и собраннее.`;
    if (item.type === 'Усиленные теплицы') return `${n} — теплица для регулярного дачного использования. Её выбирают, когда важны запас прочности, нормальный шаг дуг и спокойствие в сезон ветра и снега.`;
    if (item.type === 'Двускатные теплицы') return `${n} — теплица в форме домика. Внутри удобнее работать в полный рост, а внешний вид получается более основательным и “садовым”.`;
    if (item.type === 'Фермерские теплицы') return `${n} — просторная модель для больших посадок, рассады, сезонного выращивания и участков, где нужна не маленькая тепличка, а полноценная рабочая площадь.`;
    return `${n} — практичная теплица для выращивания овощей, зелени и рассады на дачном участке.`;
  }
  if (item.category === 'Беседки') {
    if (item.type === 'Большие беседки') return `${n} — вместительная беседка для семьи, гостей и летних посиделок на участке. Хороший вариант, если нужна не просто лавочка под крышей, а полноценная зона отдыха.`;
    if (item.type === 'Закрытые беседки') return `${n} — более защищённый формат для участка: внутри уютнее в ветреную погоду, а сама беседка смотрится более законченно.`;
    return `${n} — компактная беседка для дачи: поставить стол, собрать семью, спрятаться от солнца и сделать на участке нормальное место для отдыха.`;
  }
  if (item.category === 'Парники') return `${n} — небольшой парник для ранней рассады, зелени и сезонных посадок. Хорош для тех, кому не нужна большая теплица, но хочется ускорить старт сезона.`;
  if (item.category === 'Грядки и клумбы') return `${n} помогает аккуратно разграничить посадки, держать землю в форме и сделать участок визуально опрятнее без сложного благоустройства.`;
  if (item.category === 'Летние души') return `${n} — простой сезонный душ для дачи, который можно поставить на участке без капитального строительства.`;
  if (item.category === 'Проветривание и полив') return `${n} — полезное дополнение для теплицы, чтобы поддерживать более комфортный микроклимат и меньше бегать к форточкам вручную.`;
  if (item.category === 'Другие товары для дачи') return `${n} — практичная вещь для участка, которая делает дачный быт удобнее и аккуратнее.`;
  return `${n} подбирается под конкретную конструкцию и комплектацию.`;
}
function productDetails(item) {
  const width = findSpec(item, 'Ширина');
  const height = findSpec(item, 'Высота');
  const step = findSpec(item, 'Шаг дуг');
  const profile = findSpec(item, 'Профиль');
  const size = findSpec(item, 'Размер');
  const capacity = findSpec(item, 'Вместимость');
  const variants = item.variants && item.variants.length ? item.variants.map(v => v.label).join(', ') : '';
  let blocks = [];
  blocks.push(`<p>${descriptionIntro(item)}</p>`);
  if (item.category === 'Теплицы') {
    blocks.push(`<div class="details-grid"><div><b>Размеры</b><span>${width ? `ширина ${width}` : 'размер подбирается под задачу'}${height ? `, высота ${height}` : ', высота обычно около 2 м'}${variants ? `. Доступные варианты: ${variants}.` : '.'}</span></div><div><b>Каркас</b><span>${profile ? `используется ${profile}` : 'каркас подбирается по модели'}${step ? `, шаг дуг — ${step}` : ''}. Конструкция рассчитана на дачное сезонное использование.</span></div></div>`);
    blocks.push(`<p>Такую модель удобно выбирать под томаты, огурцы, перцы, зелень и рассаду. Перед заказом лучше сразу уточнить длину, ширину, шаг дуг, монтаж, фундамент и поликарбонат — так расчёт будет точнее.</p>`);
  } else if (item.category === 'Беседки') {
    blocks.push(`<div class="details-grid"><div><b>Габариты</b><span>${size ? `размер ${size}` : 'размер зависит от модели'}${height ? `, высота ${height}` : ''}.</span></div><div><b>Для кого</b><span>${capacity ? `рассчитана примерно на ${capacity.replace('чел.', 'человек')}` : 'подойдёт для семейного отдыха на участке'}.</span></div></div>`);
    blocks.push(`<p>Беседку можно использовать как готовую зону отдыха: для стола, лавочек, вечерних посиделок и защиты от солнца. Перед покупкой стоит обсудить, нужна ли мебель, закрытый вариант и доставка.</p>`);
  } else if (item.category === 'Парники') {
    blocks.push(`<div class="details-grid"><div><b>Размеры</b><span>${width ? `ширина ${width}` : 'ширина зависит от модели'}${height ? `, высота ${height}` : ''}${variants ? `. Варианты длины: ${variants}.` : '.'}</span></div><div><b>Назначение</b><span>для рассады, зелени, кабачков, ранних посадок и защиты растений в начале сезона.</span></div></div>`);
  } else {
    blocks.push(`<div class="details-grid"><div><b>Характеристики</b><span>${(item.specs || []).join('; ')}.</span></div><div><b>Подбор</b><span>поможем уточнить наличие, комплектацию и итоговую стоимость под ваш участок.</span></div></div>`);
  }
  return `<div class="product-details" aria-hidden="true"><div class="details-inner">${blocks.join('')}</div></div>`;
}

function variantButtons(item) {
  if (!item.variants || !item.variants.length) return '';
  return `<div class="variant-block"><small>Размер:</small><div class="variant-options">${item.variants.map((variant, index) => `<button type="button" class="variant-option ${index === 0 ? 'active' : ''}" data-price="${variant.price}" data-label="${variant.label}">${variant.label}</button>`).join('')}</div></div>`;
}
function renderProducts() {
  const filtered = getFilteredProducts();
  renderMeta(filtered.length);
  if (!filtered.length) { gridEl.innerHTML = '<div class="empty">Ничего не найдено. Попробуйте другой запрос или откройте вкладку «Все» в конце списка.</div>'; return; }
  let currentType = null; let html = '';
  filtered.forEach(item => {
    if (activeCategory !== 'Все' && item.type !== currentType) { currentType = item.type; html += `<div class="catalog-group-title"><span>${currentType}</span></div>`; }
    const defaultVariant = item.variants?.[0];
    const price = defaultVariant?.price ?? item.price;
    html += `<article class="product-card" data-category="${item.category}" data-details-card="true"><div class="product-visual"><span class="badge">${item.badge}</span><span class="type-badge">${item.type}</span></div><div class="product-content"><h3>${item.name}</h3><ul class="specs">${item.specs.map(spec => `<li>${spec}</li>`).join('')}</ul>${variantButtons(item)}<button class="details-toggle" type="button" aria-expanded="false">Подробнее о товаре</button>${productDetails(item)}<div class="price-row"><div class="price"><small>${item.price == null ? 'расчёт' : 'стоимость'}</small><strong data-price-text>${formatPrice(price)}</strong>${defaultVariant ? `<em data-variant-text>${defaultVariant.label}</em>` : ''}</div><a class="mini-cta" href="#contacts">Рассчитать</a></div></div></article>`;
  });
  gridEl.innerHTML = html;
}
function selectCategory(category) { activeCategory = category; activeType = 'Все виды'; renderTabs(); renderTypeTabs(); renderProducts(); document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
tabsEl.addEventListener('click', event => { const button = event.target.closest('.tab'); if (!button) return; activeCategory = button.dataset.category; activeType = 'Все виды'; renderTabs(); renderTypeTabs(); renderProducts(); });
typeTabsEl.addEventListener('click', event => { const button = event.target.closest('.type-tab'); if (!button) return; activeType = button.dataset.type; renderTypeTabs(); renderProducts(); });
featuredEl.addEventListener('click', event => { const card = event.target.closest('.direction-item'); if (!card) return; selectCategory(card.dataset.category); });
featuredEl.addEventListener('keydown', event => { const card = event.target.closest('.direction-item'); if (!card) return; if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); selectCategory(card.dataset.category); } });
gridEl.addEventListener('click', event => {
  const variantButton = event.target.closest('.variant-option');
  if (variantButton) {
    const card = variantButton.closest('.product-card');
    card.querySelectorAll('.variant-option').forEach(el => el.classList.remove('active'));
    variantButton.classList.add('active');
    const price = Number(variantButton.dataset.price);
    const priceText = card.querySelector('[data-price-text]');
    const variantText = card.querySelector('[data-variant-text]');
    if (priceText) priceText.textContent = formatPrice(price);
    if (variantText) variantText.textContent = variantButton.dataset.label;
    return;
  }
  if (event.target.closest('.mini-cta')) return;
  const card = event.target.closest('.product-card[data-details-card="true"]');
  if (!card) return;
  const details = card.querySelector('.product-details');
  const toggle = card.querySelector('.details-toggle');
  const isOpen = card.classList.toggle('details-open');
  if (details) details.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  if (toggle) { toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false'); toggle.textContent = isOpen ? 'Свернуть описание' : 'Подробнее о товаре'; }
});
searchInput.addEventListener('input', renderProducts);
burger?.addEventListener('click', () => { const isOpen = mobileMenu.classList.toggle('open'); burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false'); });
mobileMenu?.addEventListener('click', event => { if (event.target.matches('a')) { mobileMenu.classList.remove('open'); burger?.setAttribute('aria-expanded', 'false'); } });
renderFeaturedCategories(); renderTabs(); renderTypeTabs(); renderProducts();
