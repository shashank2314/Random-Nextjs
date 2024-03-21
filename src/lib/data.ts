// import Items from "@/models/items";

// // handlers
// export const getPosts = async() => {
//     return await Items.find()
// };

// export const addPost = (post:any ) => {
//     posts.push(post);
// }

// export const deletePost = (id:string) => {
//     posts = posts.filter((post)=> post.id != id);
// }

// export const updatePost = (id:string , name:string , items:number ,type:string, statistic:string ) => {
//     const post = posts.find((post)=> post.id === id);
//     if(post){
//         post.name = name;
//         post.items = items;
//         post.type = type;
//         post.statistic = statistic;
//     }
//     else{
//         throw new Error("NO POST FOUND");
//     }
// }

// export const getById = (id:string) => {
//     const post = posts.find((post)=> post.id === id);
//     if(post){
//         return post;
//     }
//     else{
//         throw new Error("NO POST FOUND");
//     }
// }

