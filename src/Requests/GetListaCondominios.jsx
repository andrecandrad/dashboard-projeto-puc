import { useState, useEffect } from "react";


function GetListaCondominios() {
	const [response, setResponse] = useState(null);

	useEffect(() => {
		fetch("http://127.0.0.1:5000/condominios")
		 .then((r) => r.json())
		 .then((data) => setResponse(data.condominios))
		 .catch((error) => console.error("Error fetching data:", error));
	}, []);

	return response;
}

export default GetListaCondominios;
