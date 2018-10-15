'use strict';

/**
 * egg-tracer default config
 * @member Config#tracer
 * @property {String} SOME_KEY - some description
 */
exports.tracer = {
    getUser(ctx) {// 如何拿到用户的回调
        return ctx.session.user || '';
    },
    getIp(ctx) {// 如何拿到IP的回调
        if (ctx.app.config.proxy && ctx.request.ips) {
            return ctx.request.ips;
        }
        return ctx.request.ip || '';
    },
    async save(ctx, data) {// 如何存储数据的回调
        if (ctx.model && ctx.model.Tracer) {
            return await ctx.model.Tracer.create(data);
        }
    },
    async auth(ctx) {// 判断是否可以访问报告页面的回调
        return true;
    },
    async getData(ctx) {// 如何拿到数据的回调
        if (ctx.model && ctx.model.Tracer) {
            return await ctx.model.Tracer.findAll();
        }
        return [];
    },
    pathUrl: './tracer/_report'//报告页面所在的URL
};