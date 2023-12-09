export function middleware() {
  return Response.json({
    msg: "Hello There",
  });
}

//control which  routes are to be affected
export const config = {
  matcher: "/about",
};
