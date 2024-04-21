'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', (strapi) => ({
    confirmOrder: async (ctx, next) => {
        ctx.body = "OK";
    }
}));
