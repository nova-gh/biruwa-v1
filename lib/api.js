const POST_FIELDS = `
items{
  title
  date
  slug
  summary
  content
  img{
    url
    title
  }
}
`;
const PLANT_FIELDS = `
items {
  name
  img {
    url
  }
  description
  slug
}
`;
async function fetchGraphQl(query) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}
//POSTS
//get all latest/featured post
export async function getLatestPost() {
  const posts = await fetchGraphQl(
    `query{
      postCollection(where:{slug_exists:true}, order:sys_firstPublishedAt_DESC,limit:2){
       ${POST_FIELDS}
      }
    }`
  );
  return posts?.data?.postCollection?.items;
}

// get all posts
export async function getAllPost() {
  const posts = await fetchGraphQl(
    `query{
      postCollection(where:{slug_exists:true}, order:sys_firstPublishedAt_DESC){
       ${POST_FIELDS}
      }
    }`
  );
  return posts?.data?.postCollection?.items;
}

//get post by slug
export async function getPostBySlug(slug) {
  const post = await fetchGraphQl(
    `query{
      postCollection(where:{slug:"${slug}"},limit:1){
        ${POST_FIELDS}
      }
    }`
  );
  return post?.data?.postCollection?.items[0];
}

//Plants

//get featured plants
export async function getLatestPlants() {
  const plant = await fetchGraphQl(
    `query{
      testCollection(where:{slug_exists:true}, order:sys_firstPublishedAt_DESC,limit:4){
       ${PLANT_FIELDS}
      }
    }`
  );
  return plant?.data?.testCollection?.items;
}
//get all plants
export async function getAllPlants() {
  const plants = await fetchGraphQl(
    `query{
      testCollection(where:{slug_exists:true}, order:name_ASC){
       ${PLANT_FIELDS}
      }
    }`
  );
  return plants?.data?.testCollection?.items;
}

//get plant by slug
export async function getPlantBySlug(slug) {
  const post = await fetchGraphQl(
    `query{
      testCollection(where:{slug:"${slug}"},limit:1){
        ${PLANT_FIELDS}
      }
    }`
  );
  return post?.data?.testCollection?.items[0];
}
