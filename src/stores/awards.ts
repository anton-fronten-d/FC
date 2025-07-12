import { defineStore } from 'pinia'

export const useAwardsStore = defineStore('awards', {
  state: () => ({
    awards: [
      {
        id: 1,
        icon: '🏆',
        title: 'Чемпион Лиги',
        year: '2023',
        description: 'Первое место в национальном чемпионате',
      },
      {
        id: 2,
        icon: '🥇',
        title: 'Кубок Европы',
        year: '2022',
        description: 'Победа в престижном европейском турнире',
      },
      {
        id: 3,
        icon: '⚽',
        title: 'Лучший клуб года',
        year: '2023',
        description: 'Награда от Федерации футбола',
      },
      {
        id: 4,
        icon: '🌟',
        title: 'Суперкубок',
        year: '2022',
        description: 'Победа над чемпионом кубка',
      },
      {
        id: 5,
        icon: '🎖️',
        title: 'Кубок Легенд',
        year: '2021',
        description: 'Турнир среди исторических команд',
      },
      {
        id: 6,
        icon: '🏅',
        title: 'Приз Fair Play',
        year: '2023',
        description: 'За честную игру и спортивность',
      },
    ],
  }),
})
