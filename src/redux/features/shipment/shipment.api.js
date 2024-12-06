export async function fetchApi(id) {
  try {
    const response = await fetch(
      `https://tracking.bosta.co/shipments/track/${id}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch API Error:", error);
  }
}


