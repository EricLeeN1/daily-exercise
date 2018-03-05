const routes = [{
    path: './',
    meta: {
        title: "歌匣子微现场"
    },
    component: (resolve) => require(['./app.vue'], resolve)
}];
export default routes;