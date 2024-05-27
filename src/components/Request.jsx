import { useState, useEffect } from "react";

function useRequest() {
	const [response, setResponse] = useState(null);

	useEffect(() => {
		fetch("http://127.0.0.1:5000/condominios")
		 .then((r) => r.json())
		 .then((data) => setResponse(data.condominios))  // Adjust to fetch condominios array
		 .catch((error) => console.error("Error fetching data:", error));
	}, []);

	return response;
}

export default useRequest;
