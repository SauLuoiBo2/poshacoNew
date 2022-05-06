export const formatPhoneNumber = (phoneNumberString: string) => {
    const cleaned = `${phoneNumberString}`.replace(/\D/g, '');
    const firstChar = phoneNumberString.slice(0, 3) === '+84';
    if (firstChar) {
        const newPhone = cleaned.match(/^(\d{2})(\d{3})(\d{3})(\d{3})$/);
        if (newPhone) {
            return `+${newPhone[1]} ${newPhone[2]} ${newPhone[3]} ${newPhone[3]}`;
        }
    }
    const match = phoneNumberString.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return `${match[1]} ${match[2]}-${match[3]}`;
    }
    return phoneNumberString;
};
