import server from "../src/server";

function toHeaders(headers: Record<string, string | string[] | undefined>): Headers {
  const result = new Headers();
  for (const [key, value] of Object.entries(headers)) {
    if (value === undefined) continue;
    if (Array.isArray(value)) {
      for (const item of value) {
        result.append(key, item);
      }
    } else {
      result.set(key, value);
    }
  }
  return result;
}

export default async function handler(req: any, res: any) {
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers["host"] || "localhost";
  const url = new URL(req.url, `${protocol}://${host}`);

  const request = new Request(url.toString(), {
    method: req.method,
    headers: toHeaders(req.headers),
    body: req.method === "GET" || req.method === "HEAD" ? undefined : req,
  });

  const response = await server.default.fetch(request, {}, {});

  res.statusCode = response.status;
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  const buffer = Buffer.from(await response.arrayBuffer());
  res.setHeader("content-length", String(buffer.byteLength));
  res.end(buffer);
}
