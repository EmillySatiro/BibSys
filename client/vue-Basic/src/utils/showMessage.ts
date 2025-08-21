interface showMessageProps {
	text: string;
	type?: "success" | "error";
	popupMessage: any;
	popupType: any;
	showPopup: any;
}

export function showMessage({
	text,
	type = "success",
	popupMessage,
	popupType,
	showPopup,
}: showMessageProps) {
    console.log(text)
    console.log(type)
	popupMessage.value = text;
	popupType.value = type;
	showPopup.value = true;
	setTimeout(() => (showPopup.value = false), 1500);
}
