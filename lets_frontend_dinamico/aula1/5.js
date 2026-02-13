  
const serializeForm = function (form) {
	const obj = {};
	const formData = new FormData(form);
	for (const key of formData.keys()) {
		obj[key] = formData.get(key);
	}
	return obj;
};


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const data = serializeForm(e.target)


    console.log(data)
})