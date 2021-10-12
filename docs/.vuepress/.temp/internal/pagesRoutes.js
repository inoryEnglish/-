import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-325bb9aa","/group/%E6%8A%80%E8%83%BD%E7%AF%87.html","",["/group/技能篇.html","/group/%E6%8A%80%E8%83%BD%E7%AF%87","/group/技能篇.md","/group/%E6%8A%80%E8%83%BD%E7%AF%87.md"]],
  ["v-38c76460","/group/%E8%8B%B1%E9%9B%84%E7%AF%87.html","",["/group/英雄篇.html","/group/%E8%8B%B1%E9%9B%84%E7%AF%87","/group/英雄篇.md","/group/%E8%8B%B1%E9%9B%84%E7%AF%87.md"]],
  ["v-b9ea0422","/group/%E8%A3%85%E5%A4%87%E7%AF%87.html","介绍",["/group/装备篇.html","/group/%E8%A3%85%E5%A4%87%E7%AF%87","/group/装备篇.md","/group/%E8%A3%85%E5%A4%87%E7%AF%87.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
