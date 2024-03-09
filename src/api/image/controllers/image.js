'use strict';

/**
 * image controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::image.image', ({ strapi }) =>  ({
    // Your existing controller methods here
  
    // Custom method to fetch all images
    async findAll(ctx) {
      try {
        // Fetch all entries from the 'image' content type
        const { data, meta } = await super.find(ctx);
  
        // Optionally, you can add any additional logic here, such as filtering or processing the data
  
        // Return the fetched data along with any meta information
        ctx.body = { data, meta };
      } catch (error) {
        ctx.throw(500, error);
      }
    },
  }));
  