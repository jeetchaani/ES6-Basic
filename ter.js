const auth =  false;

const checkAuth = () => auth ? "Permission" : "Not";

console.log(checkAuth());