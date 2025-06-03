
export default async function getAllBlog() {
    const result = await fetch("https://dummyjson.com/posts")
    return result.json()
}