export async function fetchEpornerData(endpoint: string) {
  const apiKey = process.env.NEXT_PUBLIC_EPORNER_API_KEY;
  const res = await fetch(
    `https://www.eporner.com/api/v2/${endpoint}&api_key=${apiKey}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}
