import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getProducts() {
  try {
    const entries = await client.getEntries({
      content_type: 'pageProduct',
      select: 'fields.name, fields.emoji, fields.description, fields.price, fields.slug, fields.featuredProductImage, fields.icon'
    });
    return entries.items;
  } catch (error) {
    console.error('Error fetching products:', error.response ? error.response.data : error);
    return [];
  }
}

export async function getFeaturedProducts() {
  try {
    // Fetch the homepage entry
    const homepageEntry = await client.getEntries({
      content_type: 'pageLanding', // Assuming this is the ID of the content type for homepage
      'fields.internalName': 'Homepage', // Filtering to get the specific entry named "homepage"
      select: 'fields.products', // Fetch only the products field
    });

    // Ensure the entry exists and has products
    const homepage = homepageEntry.items[0];
    if (!homepage || !homepage.fields.products) {
      console.warn('No featured products found on homepage.');
      return [];
    }

    // Extract the product references (linked entries)
    const productReferences = homepage.fields.products.map((product) => product.sys.id);

    // Fetch the actual product data for the referenced IDs
    const products = await client.getEntries({
      content_type: 'pageProduct',
      'sys.id[in]': productReferences.join(','), // Filter by the list of product IDs
      select: 'fields.name, fields.emoji, fields.description, fields.price, fields.slug, fields.featuredProductImage, fields.icon',
    });

    return products.items;
  } catch (error) {
    console.error('Error fetching featured products:', error.response ? error.response.data : error);
    return [];
  }
}

export async function getProjects() {
  try {
    const entries = await client.getEntries({
      content_type: 'project',
      select: 'fields.projectName, fields.projectBrief, fields.slug, fields.projectImage, fields.tags'
    });
    return entries.items;
  } catch (error) {
    console.error('Error fetching projects:', error.response ? error.response.data : error);
    return [];
  }
}

export async function getProductBySlug(slug) {
  try {
    const res = await client.getEntries({
      content_type: 'pageProduct', // Ensure this matches your Contentful content type
      'fields.slug': slug, // Adjust this if slug is stored differently
    });
    
    return res.items[0] || null;
  } catch (error) {
    console.error('Error fetching products:', error.response ? error.response.data : error);
    return null;
  }
}

export async function getProjectBySlug(slug) {
  try {
    const res = await client.getEntries({
      content_type: 'project', // Ensure this matches your Contentful content type
      'fields.slug': slug, // Adjust this if slug is stored differently
    });
    
    return res.items[0] || null;
  } catch (error) {
    console.error('Error fetching Projects:', error.response ? error.response.data : error);
    return null;
  }
}


export async function getAllCategories() {
  try {
    console.log('Fetching all categories...');
    const response = await client.getEntries({
      content_type: 'category', // Update this to the correct content type ID
      include: 2,               // Resolves references to the featured product
    });
    return response.items.map(category => {
      // Extract category name and featured product image if available
      const categoryName = category.fields.name;
      const featuredProductImage = category.fields.featuredProject?.fields?.featuredProductImage?.fields?.file?.url;
      const slug = category.fields.slug;
      const categoryId = category.sys.id;

      return {
        name: categoryName,
        featuredProductImage: featuredProductImage ? `https:${featuredProductImage}` : null,
        slug,
        id: categoryId,
      };
    });
  } catch (error) {
    console.error('Error fetching project categories:', error.response ? error.response.data : error);
    return [];
  }
}


export async function getCategoryEntries(categoryId) {
  try {
    const entries = await client.getEntries({
      content_type: 'pageProduct',
      select: 'fields.name, fields.emoji, fields.price, fields.slug, fields.featuredProductImage',
      'fields.category.sys.id': categoryId,
    });
    return entries.items;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}