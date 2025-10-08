import { createRouter, createWebHistory } from 'vue-router';
import Layout from "@/views/Layout.vue";
import NotFound from "@/views/NotFound.vue";
import MarkdownEditor from "@/views/MarkdownEditor.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'layout', component: Layout},
    {path: '/:pathMatch(.*)*', name: 'notFound', component: NotFound},
    {path: '/markdown-editor', name: 'markdownEditor', component: MarkdownEditor},
  ],
});

export default router;
