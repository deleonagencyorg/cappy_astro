export const prerender = false;

export async function GET({ request }: { request: Request }) {
  const incoming = new URL(request.url);
  const base = 'https://backtoschool.yummiespromociones.com/';
  const destination = base + (incoming.search || '');
  return new Response(null, {
    status: 302,
    headers: {
      Location: destination,
      'Cache-Control': 'no-store',
    },
  });
}
