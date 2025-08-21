import { NextResponse } from "next/server";
import { findAllPublicPostsCached } from "@/lib/post/queries/public";

export async function GET() {
  const posts = await findAllPublicPostsCached();
  // Retorna só os 3 primeiros
  return NextResponse.json(posts.slice(0, 3));
}
