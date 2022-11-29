import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'xg5dbll2',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skuHy5ETkw7FgHHxPnuaOGvDYIT62U9L5zYaZp5ZzcLw86VA5pnCxDw9p6WMNv3hyMXGDTC8DZv1c4OSO1WwktFByXUA5mZP252HYhsdn0dqA10HtnuGRh1e8dXAKgcxEbULXtEBg85xu9IAlTfYCyh4e3fWayF2JUlc7ljeR5a0xE8O2riv',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
