async function PostCondominiosPeriodo(hasData, formattedPeriodoInicial, formattedPeriodoFim, idCondominioValue) {

	if (hasData === true) {
		const payload = {
			condominio_id: idCondominioValue,
			mesAnoInicio: formattedPeriodoInicial,
			mesAnoFim: formattedPeriodoFim
		};

		try {
			const response = await fetch('http://127.0.0.1:5000/exportar', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			}).then((r) => r.json());

			if (response) {
				return response;
			} else {
				console.error('Falha em enviar os dados!');
			}
		} catch (error) {
			console.error('Erro ao enviar os dados:', error);
		}
	}
}

export default PostCondominiosPeriodo;
