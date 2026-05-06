// app/api/projects/[slug]/route.ts
export const revalidate = 900;

export async function GET(_, { params }
) {
  const wpRes = await fetch(
    `https://olive-peafowl-546702.hostingersite.com/index.php/wp-json/wp/v2/projects?slug=${params.slug}`,
    { next: { revalidate: 900 } }
  );
  const data = await wpRes.json();

  if (!data || data.length === 0) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(JSON.stringify(data[0]));
}
