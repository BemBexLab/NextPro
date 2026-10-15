const PROJECTS_API_URL = "https://projects-api-bembexlab.vercel.app/api/images/";

export const revalidate = 900;

export async function GET() {
  try {
    const response = await fetch(PROJECTS_API_URL, {
      next: { revalidate },
    });

    if (!response.ok) {
      return Response.json(
        { error: "Projects are temporarily unavailable." },
        { status: 502 },
      );
    }

    return Response.json(await response.json(), {
      headers: {
        "Cache-Control": "s-maxage=900, stale-while-revalidate=3600",
      },
    });
  } catch {
    return Response.json(
      { error: "Projects are temporarily unavailable." },
      { status: 502 },
    );
  }
}
