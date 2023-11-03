async function getImgList() {
    const baseUrl = "https://run.mocky.io/v3/4ed3aa2f-7623-41a0-bbaa-8dae917a8548";

    return await fetch(baseUrl, {
        method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
    });
}

export { getImgList };