function makeUser(formData) {
    const user = {
        username: formData.get('name'),
        avatar: formData.get('barista'),
    };
    return user;
}

export default makeUser;