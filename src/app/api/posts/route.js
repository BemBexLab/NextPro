export const revalidate = 900;

export async function GET() {
  const allPosts = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    let res;

    try {
      res = await fetch(`https://olive-peafowl-546702.hostingersite.com/wp-json/wp/v2/posts?per_page=100&page=${page}`, {
        next: { revalidate: 900 },
      });
    } catch {
      break;
    }

    if (!res.ok) break;

    const posts = await res.json();
    allPosts.push(...posts);

    if (posts.length < 100) hasMore = false;
    else page++;
  }

  return new Response(JSON.stringify(allPosts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "s-maxage=900, stale-while-revalidate=3600",
    },
  });
}
