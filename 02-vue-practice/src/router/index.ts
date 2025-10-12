import { createRouter, createWebHistory } from 'vue-router';
import Layout from "@/views/Layout.vue";
import NotFound from "@/views/NotFound.vue";
import MarkdownEditor from "@/views/MarkdownEditor.vue";
import FetchingData from "@/views/FetchingData.vue";
import GridDemo from "@/views/GridDemo.vue";
import TreeDemo from "@/views/TreeDemo.vue";
import SqlFormatter from "@/views/SqlFormatter.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'layout', component: Layout},
    {path: '/:pathMatch(.*)*', name: 'notFound', component: NotFound},
    {path: '/markdown-editor', name: 'markdownEditor', component: MarkdownEditor},
    {path: '/fetching-data', name: 'fetchingData', component: FetchingData},
    {path: '/grid', name: 'grid', component: GridDemo},
    {path: '/tree', name: 'tree', component: TreeDemo},
    {path: '/sql-formatter', name: 'sqlFormatter', component: SqlFormatter},
  ],
});

export default router;
