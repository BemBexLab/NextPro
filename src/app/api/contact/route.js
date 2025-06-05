import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function POST(req) {
  try {
    const data = await req.json();
    const { first_name, last_name, email, phone, service, subject, message } = data;

    const { error } = await supabase.from("contacts").insert([
      { first_name, last_name, email, phone, service, subject, message },
    ]);

    if (error) {
      console.error("Supabase Error:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
