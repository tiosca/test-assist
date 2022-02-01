import React from "react";
import "./contact.css"
const Contact = () => {
	return (
		<div className="contact">
			<form>
				<label>
					Name:
					<input type="text" className="name" />
				</label>
				<label>
					Surname:
					<input type="text" className="surname" />
				</label>
				<label>
					Phone number:
					<input type="number" className="phone" />
				</label>
				<label>
					Email:
					<input type="email" className="email" />
				</label>
				<input type="submit" className="submit" value="Submit" />
			</form>
		</div>
	);
};

const handleSaveToPC = (jsonData,Contact) => {
	const fileData = JSON.stringify(jsonData);
	const blob = new Blob([fileData], {type: "text/plain"});
	const url = URL.createObjectURL(blob);
	const link = document.createElement('a');
	link.download = `${Contact}.json`;
	link.href = url;
	link.click();
}

export default Contact;