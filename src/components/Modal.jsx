import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";
import GetListaCondominios from "../Requests/GetListaCondominios.jsx";
import PostCondominiosPeriodo from "../Requests/PostCondominiosPeriodo.jsx";
import PostCondominioFile from "../Requests/PostCondominioPDF.jsx";

export default function Modal(props) {
    const { showModal, setShowModal, setChartData } = props;
    const [hasData, setHasData] = useState(null);
    const [activeForm, setActiveForm] = useState(true);
    const [nameCondominio, setNameCondominio] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [idCondominio, setIdCondominio] = useState(null);
    const [periodoInicial, setPeriodoInicial] = useState(null);
    const [periodoFim, setPeriodoFim] = useState(null);
    const [ListaCondominios, setListaCondominios] = useState([]);
    const [loading, setLoading] = useState(false); // Estado de carregamento

    // Function to fetch initial list of condos
    const fetchListaCondominios = async () => {
        const lista = await GetListaCondominios();
        console.log(lista);
        setListaCondominios(lista);
    };

    useEffect(() => {
        fetchListaCondominios();
    }, []);

    const handleOptionClick = (value) => {
        setHasData(value);
        setActiveForm(false);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setActiveForm(true);
        setHasData(null);
        setSelectedFile(null);
        setNameCondominio("");
        setIdCondominio(null);
        setPeriodoInicial(null);
        setPeriodoFim(null);
    };

    const handleTurnBack = () => {
        setActiveForm(true);
        setHasData(null);
        setSelectedFile(null);
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleNameChange = (event) => {
        setNameCondominio(event.target.value);
    };

    const getFile = async (event) => {
        event.preventDefault();
        if (selectedFile && nameCondominio) {
            setLoading(true); // Começar o carregamento
            await PostCondominioFile(event, selectedFile, nameCondominio, hasData);
            setActiveForm(true);
            setHasData(null);
            setSelectedFile(null);
            setShowModal(true);
            await fetchListaCondominios(); // Update condo list
            setLoading(false); // Terminar o carregamento
        } else {
            console.error("Por favor, selecione um arquivo e forneça o nome do condomínio.");
        }
    };

    const formatDate = (date) => {
        const [year, month] = date.split('-');
        return `${month}/${year}`;
    };

    const getDados = async (event) => {
        event.preventDefault();
        const formattedPeriodoInicial = formatDate(event.target[1].value);
        console.log(event.target[1].value);
        const formattedPeriodoFim = formatDate(event.target[2].value);
        const idCondominioValue = event.target[0].value;
        setPeriodoInicial(formattedPeriodoInicial);
        setPeriodoFim(formattedPeriodoFim);
        setIdCondominio(idCondominioValue);
        const data = await PostCondominiosPeriodo(hasData, formattedPeriodoInicial, formattedPeriodoFim, idCondominioValue);
        await setChartData(data);
        setActiveForm(true);
        setHasData(null);
        setSelectedFile(null);
        setShowModal(false);
        await fetchListaCondominios(); // Update condo list
    };


    ListaCondominios.map((condominio) => {
        let dataInicio = condominio.mesAno[0];
        let partes = dataInicio.split("/");
        let dataCorrigida = `${partes[1]}-${partes[0]}`;
        console.log(dataCorrigida);
        
        let dataFinal = condominio.mesAno[condominio.mesAno.length - 1];
        let partes2 = dataFinal.split("/");
        let dataCorrigida2 = `${partes2[1]}-${partes2[0]}`;
        console.log(dataCorrigida2);
        
        return {
            mesInicial: dataCorrigida,
            mesFinal: dataCorrigida2  
        };


    });
    

    return (
        <>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex  justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-2xl font-semibold">Dados</h3>
                                </div>

                                {loading ? (
                                    <div className="flex justify-center items-center p-6">
                                        <span className="text-lg font-semibold">Carregando...</span>
                                    </div>
                                ) : (
                                    <>
                                        {activeForm && (
                                            <div className="text-center flex-row pl-7 pr-7 border-b border-solid border-blueGray-200 rounded-t">
                                                <h3 className="text-lg font-semibold">O que você deseja fazer?</h3>
                                                <div className="p-3">
                                                    <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={() => handleOptionClick(true)}>
                                                        Gerar Relatórios
                                                    </button>
                                                    <button className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={() => handleOptionClick(false)}>
                                                        Upload PDF
                                                    </button>
                                                </div>
                                                <div className="flex items-center justify-end pt-4 pb-4 pl-4 border-t border-solid border-blueGray-200 rounded-b">
                                                    <div className="flex items-center justify-end">
                                                        <button className="text-red-500 background-transparent font-bold uppercase text-sm outline-none focus:outline-none ease-linear transition-all duration-150" type="button" onClick={handleCloseModal}>
                                                            Fechar
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {hasData === true && (
                                            <>
                                                <div className="relative p-6 flex-auto">
                                                    <form onSubmit={getDados}>
                                                        <div className="mb-4">
                                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="condominio">
                                                                Condomínios
                                                            </label>
                                                            <select id="condominio" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                                                <option defaultValue hidden>
                                                                    Selecione o condomínio
                                                                </option>
                                                                {ListaCondominios &&
                                                                    ListaCondominios.map((condominio) => (
                                                                        <option key={condominio.id} value={condominio.id}>
                                                                            {condominio.nome} - {condominio.mesAno[0]} até {condominio.mesAno[condominio.mesAno.length - 1]}
                                                                        </option>
                                                                    ))}
                                                            </select>
                                                        </div>
                                                        <div className="mb-4">
                                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="period">
                                                                Selecione o período
                                                            </label>
                                                            <div className="flex space-x-2">

                                                                {ListaCondominios &&
                                                                    ListaCondominios.map((condominio) => (
                                                                        <>
                                                                            <input type="month" id="start-month" className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                                                            <input type="month" id="end-month" className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                                                        </>
                                                                    ))}

                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-between pt-4 border-t border-solid border-blueGray-200 rounded-b">
                                                            {activeForm === false && (
                                                                <div className="flex items-center justify-start">
                                                                    <button className="text-gray-500 background-transparent font-bold uppercase text-sm outline-none focus:outline-none ease-linear transition-all duration-150" type="button" onClick={handleTurnBack}>
                                                                        Voltar
                                                                    </button>
                                                                </div>
                                                            )}

                                                            <div className="flex items-center justify-end">
                                                                <button className="text-red-500 background-transparent font-bold uppercase text-sm outline-none focus:outline-none ease-linear transition-all duration-150" type="button" onClick={handleCloseModal}>
                                                                    Fechar
                                                                </button>

                                                                <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 ml-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit">
                                                                    Gerar relatórios
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </>
                                        )}

                                        {hasData === false && (
                                            <div className="relative p-6 flex-auto">
                                                <form onSubmit={getFile}>
                                                    <div className="mb-4">
                                                        <label className="block text-gray-700 text-sm font-bold mb-1 mt-2" htmlFor="nameUpload">
                                                            Nome do condomínio:
                                                        </label>
                                                        <input type="text" id="nameUpload" className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={nameCondominio} onChange={handleNameChange} />
                                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="upload">
                                                            Upload PDF
                                                        </label>
                                                        <input type="file" id="upload" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleFileChange} />
                                                    </div>

                                                    <div className="flex items-center justify-between pt-4 border-t border-solid border-blueGray-200 rounded-b">
                                                        {activeForm === false && (
                                                            <div className="flex items-center justify-start">
                                                                <button className="text-gray-500 background-transparent font-bold uppercase text-sm outline-none focus:outline-none ease-linear transition-all duration-150" type="button" onClick={handleTurnBack}>
                                                                    Voltar
                                                                </button>
                                                            </div>
                                                        )}

                                                        <div className="flex items-center justify-end">
                                                            <button className="text-red-500 background-transparent font-bold uppercase text-sm outline-none focus:outline-none ease-linear transition-all duration-150" type="button" onClick={handleCloseModal}>
                                                                Fechar
                                                            </button>

                                                            <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 ml-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit">
                                                                Upload
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );

}

Modal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    setShowModal: PropTypes.func.isRequired,
    setChartData: PropTypes.func.isRequired,
};
