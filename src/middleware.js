import { NextResponse } from "next/server";

export function middleware(request) {
  // ব্রাউজারের কুকি থেকে টোকেন বা সেশন আইডি চেক করা
  // (তোমার প্রজেক্টে Better Auth বা JWT যে কুকি সেট করে, তার নাম 'token' এর জায়গায় দিতে পারো)
  const token = request.cookies.get("token")?.value || request.cookies.get("next-auth.session-token")?.value; 
  const { pathname } = request.nextUrl;

  // ১. ইউজার লগইন না থাকলে ড্যাশবোর্ডের কোনো পেজে ঢুকতে দেবে না, সোজা লগইনে পাঠাবে
  if (!token && pathname.startsWith("/dashboard")) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // ২. ইউজার লগইন থাকলে তাকে আর লগইন বা রেজিস্টার পেজে যেতে দেবে না
  if (token && (pathname.startsWith("/login") || pathname.startsWith("/register"))) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

// কোন কোন রাউট লক থাকবে তা ডিফাইন করা
export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
};