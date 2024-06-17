// GetListaCondominios.jsx
const GetListaCondominios = async () => {
    try {
        const response = await fetch("http://127.0.0.1:5000/condominios");
        const data = await response.json();
        return data.condominios;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};

export default GetListaCondominios;
