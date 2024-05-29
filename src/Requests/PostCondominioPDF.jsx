async function PostCondominioFile(event, selectedFile, nameCondominio, hasData) {
	event.preventDefault();
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
			} else {
				console.error('Falha em fazer o upload do PDF!');
			}
		} catch (error) {
			console.error('Erro ao fazer upload do arquivo:', error);
		}
	}
}

export default PostCondominioFile;
