export const revalidate = 900;

export async function GET() {
  try {
    const allPosts = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const res = await fetch(`https://olive-peafowl-546702.hostingersite.com/wp-json/wp/v2/posts?per_page=100&page=${page}`, {
        next: { revalidate: 900 },
      });

      if (!res.ok) break;

      const posts = await res.json();
      allPosts.push(...posts);

      // If fewer than 100 returned, this is the last page
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
  } catch (error) {
    console.error("API Route Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
