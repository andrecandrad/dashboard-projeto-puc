import React, { useState } from "react";
import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";
import Request from "./Request.jsx";

export default function Modal(props) {
	const [hasData, setHasData] = useState(null);
	const [activeForm, setActiveForm] = useState(true);
	const [selectedFile, setSelectedFile] = useState(null);
	const [nameCondominio, setNameCondominio] = useState(null);
	const [idCondominio, setIdCondominio] = useState(null);
	const [periodoInicial, setPeriodoInicial] = useState(null);
	const [periodoFim, setPeriodoFim] = useState(null);
	const response = Request();

	const handleOptionClick = (value) => {
		setHasData(value);
		setActiveForm(false);
	};

	const handleCloseModal = () => {
		props.setShowModal(false);
		setActiveForm(true);
		setHasData(null);
		setSelectedFile(null);
	};

	const handleTurnBack = () => {
		setActiveForm(true);
		setHasData(null);
		setSelectedFile(null);
	};

	const handleSaveChanges = async () => {
		props.setShowModal(false);
		setActiveForm(true);
		setHasData(null);
		setSelectedFile(null);
	};

	const handleChooseCondominio = async () => {
		if (hasData === true ) {
			const formData = new FormData();
			formData.append('pdf_file', selectedFile);

			try {
				const response = await fetch('http://127.0.0.1:5000/exportar', {
					method: 'POST',
					body: formData,
				});
				if (response.ok) {
					console.log('PDF enviado com sucesso!');
					setActiveForm(true);
					setHasData(null);
					setSelectedFile(null);
				} else {
					console.error('Falha em fazer o upload do PDF!');
				}
			} catch (error) {
				console.error('Erro ao fazer upload do arquivo:', error);
			}
		}
	}
	
	const handleSendFile = async () => {
		if (hasData === false && selectedFile) {
			const formData = new FormData();
			formData.append('pdf_file', selectedFile);
			formData.append('nome_condominio', nameCondominio);

			try {
				const response = await fetch('http://127.0.0.1:5000/condominios', {
					method: 'POST',
					body: formData,
				});
				if (response.ok) {
					console.log('PDF enviado com sucesso!');
					setActiveForm(true);
					setHasData(null);
					setSelectedFile(null);
				} else {
					console.error('Falha em fazer o upload do PDF!');
				}
			} catch (error) {
				console.error('Erro ao fazer upload do arquivo:', error);
			}
		}
	}


	const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	const getDados  = (event) => {
		setPeriodoInicial(event.target[1].value)
		setPeriodoFim(event.target[2].value)
		setIdCondominio(event.target[0].value)
		event.preventDefault()
	};

	const handleCondominioNameChange = (event) => {
		setNameCondominio(event.target.value)
	};
	

	return (
		<>
			{props.showModal ? (
				<>
					<div
						className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							{/*content*/}
							<div
								className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/*header*/}
								<div
									className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
									<h3 className="text-2xl font-semibold">Carregar dados</h3>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => props.setShowModal(false)}
									>
										<span
											className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
											<IoClose />
										</span>
									</button>
								</div>
								{/*body*/}

								{activeForm && (
									<div
										className="text-center flex-row pl-7 pr-7 border-b border-solid border-blueGray-200 rounded-t">
										<h3 className="text-lg font-semibold">Já possui dados carregados?</h3>
										<div className="p-3">
											<button
												className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
												onClick={() => handleOptionClick(true)}
											>
												Sim
											</button>
											<button
												className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
												onClick={() => handleOptionClick(false)}
											>
												Não
											</button>
										</div>
									</div>
								)}

								{hasData === true && (
									<>
										<div className="relative p-6 flex-auto">
											<form onSubmit={getDados}>
												<div className="mb-4">
													<label
														className="block text-gray-700 text-sm font-bold mb-2"
														htmlFor="condominio"
													>
														Condomínios
													</label>
													<select
														id="condominio"
														className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
													>
														<option defaultValue hidden>
															Selecione o condomínio
														</option>
														{response &&
															response.map((condominio) => (
																<option key={condominio.id} value={condominio.id}>
																	{condominio.nome} - {condominio.mesAno[0]} até{" "}
																	{condominio.mesAno[condominio.mesAno.length - 1]}
																</option>
															))}
													</select>
												</div>
												<div className="mb-4">
													<label
														className="block text-gray-700 text-sm font-bold mb-2"
														htmlFor="period"
													>
														Selecione o período
													</label>
													<div className="flex space-x-2">
														<input
															type="month"
															id="start-month"
															className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
															// onChange={handlePeriodoInicialChange}
														/>
														<input
															type="month"
															id="end-month"
															className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
															// onChange={handlePeriodoFimChange}
														/>
													</div>
												</div>
												<button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 ml-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
												type="submit"											>
												Carregar
											</button>
											</form>
										</div>
									</>
								)}
								{hasData === false && (
									<div className="relative p-6 flex-auto">
										<form>
											<div className="mb-4">
												<label className="block text-gray-700 text-sm font-bold mb-1 mt-2" htmlFor="nameUpload"> Nome do condomínio: </label>
												<input
													isRequired
													type="text"
													id="nameUpload"
													className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
													onChange={handleCondominioNameChange}
												/>
												<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="upload" > Upload PDF </label>
												<input
													type="file"
													id="upload"
													className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
													onChange={handleFileChange}
												/>
											</div>
										</form>
									</div>
								)}

								{/*footer*/}
								<div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
									{activeForm === false && (
										<div className="flex items-center justify-start">
											<button className="text-gray-500 background-transparent font-bold uppercase text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
												type="button"
												onClick={() => handleTurnBack()}
											>
												Voltar
											</button>
										</div>
									)}

									<div className="flex items-center justify-end">
										<button className="text-red-500 background-transparent font-bold uppercase text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
											type="button"
											onClick={() => handleCloseModal()}
										>
											Fechar
										</button>

										{activeForm === false && (
											<button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 ml-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
												type="button"
												onClick={() => handleSaveChanges()}
											>
												Carregar
											</button>
										)}
									</div>
								</div>
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
};
