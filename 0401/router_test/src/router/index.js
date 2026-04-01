import { createRouter, createWebHistory } from 'vue-router';
// HomeView는 '/' 경로에서 보여줄 컴포넌트이므로 직접 import 해야 합니다.
// 파일 위치는 프로젝트 구조에 맞게 조정하세요.
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Members from '@/pages/Members.vue';
import Videos from '@/pages/Videos.vue';
// 라우터 인스턴스를 생성합니다.
const router = createRouter({
  // 주소창을 깔끔하게 쓰는 히스토리 모드
  // import.meta.env.BASE_URL은 Vite 프로젝트의 기본 경로입니다.
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/members', component: Members },
    { path: '/videos', component: Videos },
  ],
});

// 만든 라우터를 다른 파일(main.js 등)에서 사용할 수 있게 내보냅니다.
export default router;
